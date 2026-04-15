#!/usr/bin/env tsx
/**
 * Translate all Hebrew lessons to English + Arabic.
 * Source: src/content/lessons/<courseId>-<slug>.json  (Hebrew)
 * Output: src/content/lessons/<courseId>-<slug>.en.json, .ar.json
 * Uses Claude API with a strict "preserve JSON structure + HTML tags" prompt.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const LESSONS_DIR = path.join(REPO_ROOT, "src/content/lessons");
const LOG_FILE = path.join(REPO_ROOT, "translation.log");

const argv = await yargs(hideBin(process.argv))
  .option("lang",      { type: "string",  choices: ["en", "ar"], demandOption: true })
  .option("concurrency", { type: "number", default: 2 })
  .option("delay",       { type: "number", default: 1000 })
  .option("force",       { type: "boolean", default: false })
  .parse();

if (!process.env.ANTHROPIC_API_KEY) {
  console.error("Missing ANTHROPIC_API_KEY.");
  process.exit(1);
}

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const MODEL = "claude-sonnet-4-20250514";

const LANG_NAMES = { en: "English", ar: "Arabic" } as const;
const TARGET = argv.lang as "en" | "ar";

const SYSTEM = `
You are translating educational content for Maktuba Academy from Hebrew to ${LANG_NAMES[TARGET]}.

Rules:
- Preserve the JSON structure EXACTLY — same keys, same array lengths, same nested types.
- Preserve HTML tags (<p>, <h2>, <strong>, class="drop-cap", etc.) EXACTLY.
- Translate only the human-readable text content.
- Keep proper names (Maktuba, Mercury, Kabbalah) in their standard ${LANG_NAMES[TARGET]} spelling.
- For Hebrew letter references (ב׳, א׳), translate to: Beth, Aleph, etc. (English) / باء، ألف (Arabic).
- Quiz "correct" index stays numeric (do NOT translate).
- Slug stays identical (URL-safe, lowercase, hyphens).
- courseId, lessonNumber, module name, crossReferences.course stay in English/Hebrew as-is.
- For module names that are in Hebrew (e.g., "יסודות"), translate: "Foundations" / "الأساسيات".
- SEO keywords: provide 4-8 keywords in the target language.
- Voice stays warm, grandmotherly, ancient-but-modern.
- NEVER add new sections or fields. NEVER remove fields.

Output: The translated JSON, nothing else. No markdown wrapper.
`.trim();

function logLine(line: string) {
  console.log(line);
  fs.appendFileSync(LOG_FILE, `${new Date().toISOString()}  [${TARGET}]  ${line}\n`);
}

async function translateOne(srcPath: string): Promise<"skipped" | "generated" | "failed"> {
  const base = path.basename(srcPath, ".json");
  const outPath = path.join(LESSONS_DIR, `${base}.${TARGET}.json`);
  if (!argv.force && fs.existsSync(outPath)) {
    logLine(`⏭  skip ${base}`);
    return "skipped";
  }
  const he = fs.readFileSync(srcPath, "utf8");
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await anthropic.messages.create({
        model: MODEL,
        max_tokens: 8000,
        system: SYSTEM,
        messages: [{ role: "user", content: `Translate this Hebrew lesson JSON to ${LANG_NAMES[TARGET]}:\n\n${he}` }],
      });
      const text = res.content.filter((c) => c.type === "text").map((c) => (c as { text: string }).text).join("\n").trim();
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error("no JSON in response");
      const parsed = JSON.parse(jsonMatch[0]);
      fs.writeFileSync(outPath, JSON.stringify(parsed, null, 2), "utf8");
      logLine(`✓  tr   ${base}  attempt=${attempt}`);
      return "generated";
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      logLine(`✗  err  ${base}  attempt=${attempt}  ${msg}`);
      if (attempt === 3) return "failed";
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  return "failed";
}

async function main() {
  const heFiles = fs.readdirSync(LESSONS_DIR)
    .filter((f) => f.endsWith(".json") && !f.includes(".en.") && !f.includes(".ar."))
    .map((f) => path.join(LESSONS_DIR, f));
  logLine(`▶  start  lang=${TARGET}  files=${heFiles.length}  concurrency=${argv.concurrency}`);
  let g = 0, s = 0, f = 0;
  const pool = Array.from({ length: argv.concurrency }, () => 0);
  let cursor = 0;
  await Promise.all(pool.map(async () => {
    while (cursor < heFiles.length) {
      const idx = cursor++;
      const r = await translateOne(heFiles[idx]);
      if (r === "generated") g++; else if (r === "skipped") s++; else f++;
      if (r === "generated" && argv.delay > 0) await new Promise((res) => setTimeout(res, argv.delay));
    }
  }));
  logLine(`◼  done  gen=${g}  skip=${s}  fail=${f}`);
  if (f > 0) process.exit(1);
}

main().catch((e) => { console.error(e); process.exit(1); });
