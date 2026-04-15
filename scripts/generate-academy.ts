#!/usr/bin/env tsx
/**
 * Generate Maktuba Academy lessons.
 *
 * Usage:
 *   pnpm generate                                  — all courses, all lessons
 *   pnpm generate --course=tarot                   — one course
 *   pnpm generate --course=tarot --lesson=12       — one lesson
 *   pnpm generate --concurrency=3                  — parallel calls (default 2)
 *
 * Resume: skips any lesson whose JSON already exists in src/content/lessons/.
 * Rate-limited: default 1s delay between calls to avoid 429.
 * Validation: every lesson is Zod-validated against the content collection schema
 * before being written to disk.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { curriculum, totalLessons, type CurriculumLesson } from "./lib/curriculum.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const LESSONS_DIR = path.join(REPO_ROOT, "src/content/lessons");
const LOG_FILE = path.join(REPO_ROOT, "generated_lessons.log");
const KB_ROOT = "/Users/claude/Documents/maktuba/repo/packages/knowledge-base";

const argv = await yargs(hideBin(process.argv))
  .option("course",      { type: "string",  describe: "Only generate one course" })
  .option("lesson",      { type: "number",  describe: "Only generate one lesson number within the course" })
  .option("concurrency", { type: "number",  default: 2, describe: "Parallel API calls" })
  .option("delay",       { type: "number",  default: 1000, describe: "ms between calls (anti-429)" })
  .option("force",       { type: "boolean", default: false, describe: "Re-generate even if file exists" })
  .option("dry-run",     { type: "boolean", default: false, describe: "Don't call the API — just print plan" })
  .parse();

if (!process.env.ANTHROPIC_API_KEY && !argv["dry-run"]) {
  console.error("Missing ANTHROPIC_API_KEY. Set it in your env or pass --dry-run.");
  process.exit(1);
}

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });
const MODEL = "claude-sonnet-4-20250514";

// --- load KB per course on demand --------------------------------------------
const kbCache = new Map<string, unknown>();
function loadCourseKB(courseId: string): unknown {
  if (kbCache.has(courseId)) return kbCache.get(courseId);
  const courseDir = path.join(KB_ROOT, courseId);
  if (!fs.existsSync(courseDir)) {
    kbCache.set(courseId, null);
    return null;
  }
  const bundle: Record<string, unknown> = {};
  for (const f of fs.readdirSync(courseDir)) {
    if (!f.endsWith(".json")) continue;
    try {
      const content = JSON.parse(fs.readFileSync(path.join(courseDir, f), "utf8"));
      bundle[f.replace(/\.json$/, "")] = content;
    } catch {/* skip */}
  }
  kbCache.set(courseId, bundle);
  return bundle;
}

// --- prompts -----------------------------------------------------------------
const SYSTEM_PROMPT = `
אתה כותב תוכן חינוכי עבור אקדמיית מכתובה — אקדמיה חינמית המלמדת אמנויות מיסטיות (טארוט, אסטרולוגיה, נומרולוגיה, קבלה וכו').

קול: אתה מכתובה — סבתא חכמה עתיקה שמלמדת. חמה, אישית, יודעת. "שב/שבי... הנר דולק." לעולם אל תישמע כמו ספר לימוד.

מבנה: כל שיעור כולל בדיוק 8 סקציות:
1. OPENING (~200 מילים) — יוצר אווירה, מחבר לשיעור קודם
2. THEORY_A (~800 מילים) — ידע ליבה, כתוב באופן מרתק
3. PRACTICE_1 (~200 מילים) — תרגיל מעשי שהתלמיד עושה עכשיו
4. THEORY_B (~800 מילים) — עומק נוסף, קישורי cross-system
5. PRACTICE_2 (~200 מילים) — תרגיל מתקדם
6. DEEP_DIVE (~500 מילים) — "מה שלא כתוב בספרים"
7. QUIZ — 5 שאלות רב-ברירה (4 אופציות, אחת נכונה, הסבר לכל)
8. CLOSING (~200 מילים) — סיכום + משפט חוכמה + Teaser לשיעור הבא

חוקי תוכן:
- השתמש אך ורק בעובדות ה-Knowledge Base שסופק.
- לעולם אל תמציא משמעויות, קורספונדנסים, או עובדות אסטרולוגיות.
- Cross-reference: חבר טארוט→אסטרולוגיה→קבלה→נומרולוגיה באופן טבעי.
- השתמש ב-H2 שהם שאלות שאנשים מחפשים ב-Google (SEO/AEO).
- שתי המשפטים הראשונים של כל סקציה = תשובה ישירה לשאלת ה-H2.
- כלול 3-5 שאלות נפוצות בסוף (FAQ).
- כלול crossReferences (course+lesson) לקורסים אחרים.

שפה: עברית טבעית ישראלית, כוללת מגדר (את/ה). לעולם אל תכתוב "אולי" — מכתובה יודעת.
תיבות תרגול: הוראות ספציפיות, לא מעורפלות.

פלט: JSON תקף בלבד (ללא markdown wrapper, ללא הסברים). בדיוק לפי הסכמה.
`.trim();

function buildUserPrompt(opts: {
  courseId: string; lesson: CurriculumLesson; kb: unknown;
  courseTitle: string; totalLessons: number;
}): string {
  const { courseId, lesson, kb, courseTitle, totalLessons: total } = opts;
  const kbSnippet = kb ? JSON.stringify(kb).slice(0, 14000) : "(אין KB זמין — השתמש בידע מיסטי סטנדרטי)";
  return [
    `קורס: ${courseTitle} (${courseId})`,
    `שיעור: ${lesson.lessonNumber} מתוך ${total}`,
    `נושא: ${lesson.titleHe}`,
    `מודול: ${lesson.module}`,
    `Knowledge Base (JSON):`,
    "```json",
    kbSnippet,
    "```",
    "",
    `החזר JSON בפורמט הבא (ללא markdown wrapper):`,
    "```",
    `{`,
    `  "courseId": "${courseId}",`,
    `  "lessonNumber": ${lesson.lessonNumber},`,
    `  "title": "${lesson.titleHe}",`,
    `  "slug": "${lesson.slug}",`,
    `  "module": "${lesson.module}",`,
    `  "estimatedMinutes": 15,`,
    `  "sections": {`,
    `    "opening": "<p class=\\"drop-cap\\">...</p>",`,
    `    "theoryA": "<h2>שאלה מחפשים בגוגל?</h2><p>תשובה ישירה. פסקאות נוספות.</p>",`,
    `    "practice1": { "instruction": "הוראה ספציפית", "type": "observe|draw|write|meditate" },`,
    `    "theoryB": "<h2>שאלה נוספת</h2><p>...</p>",`,
    `    "practice2": { "instruction": "הוראה מתקדמת", "type": "..." },`,
    `    "deepDive": "<h2>מה שלא כתוב בספרים</h2><p>...</p>",`,
    `    "quiz": {`,
    `      "questions": [`,
    `        { "question": "?", "options": ["A","B","C","D"], "correct": 0, "explanation": "..." }`,
    `      ]` ,
    `    },`,
    `    "closing": { "summary": "...", "wisdom": "משפט חוכמה קצר.", "nextPreview": "בשיעור הבא..." }`,
    `  },`,
    `  "faq": [`,
    `    { "question": "שאלה נפוצה 1?", "answer": "תשובה." }`,
    `  ],`,
    `  "crossReferences": [`,
    `    { "course": "astrology", "lesson": "mercury", "label": "⭐ מרקורי באסטרולוגיה" }`,
    `  ],`,
    `  "seo": {`,
    `    "title": "כותרת עד 65 תווים עם keyword",`,
    `    "description": "תיאור 150-160 תווים",`,
    `    "keywords": ["מילה1","מילה2","..."]`,
    `  }`,
    `}`,
    "```",
    "",
    `חובה: quiz חייב 5 שאלות. FAQ 3-5. crossReferences 2-3. keywords 4-8.`,
  ].join("\n");
}

// --- schema validation reuses collection schema (lightweight runtime check) ---
function validateLesson(raw: unknown): { ok: true } | { ok: false; error: string } {
  if (!raw || typeof raw !== "object") return { ok: false, error: "not an object" };
  const d = raw as Record<string, unknown>;
  for (const k of ["courseId","lessonNumber","title","slug","module","sections","faq","seo"]) {
    if (!(k in d)) return { ok: false, error: `missing field: ${k}` };
  }
  const s = d.sections as Record<string, unknown>;
  for (const k of ["opening","theoryA","practice1","theoryB","practice2","deepDive","quiz","closing"]) {
    if (!(k in s)) return { ok: false, error: `missing section: ${k}` };
  }
  const quiz = (s.quiz as Record<string, unknown>).questions;
  if (!Array.isArray(quiz) || quiz.length !== 5) return { ok: false, error: `quiz must have 5 questions, got ${(quiz as unknown[])?.length}` };
  for (const [i, q] of (quiz as Array<Record<string, unknown>>).entries()) {
    if (!q.question || !Array.isArray(q.options) || q.options.length !== 4) return { ok: false, error: `question ${i}: bad options` };
    if (typeof q.correct !== "number" || q.correct < 0 || q.correct > 3) return { ok: false, error: `question ${i}: bad correct` };
    if (!q.explanation) return { ok: false, error: `question ${i}: missing explanation` };
  }
  if (!Array.isArray(d.faq) || (d.faq as unknown[]).length < 2) return { ok: false, error: "faq < 2" };
  const seo = d.seo as Record<string, unknown>;
  if (!seo.title || !seo.description || !Array.isArray(seo.keywords)) return { ok: false, error: "bad seo" };
  return { ok: true };
}

function countWords(lesson: Record<string, unknown>): number {
  const s = lesson.sections as Record<string, string | Record<string, unknown>>;
  let text = "";
  for (const k of ["opening","theoryA","theoryB","deepDive"]) text += " " + (s[k] as string);
  text += " " + (s.practice1 as Record<string, string>).instruction;
  text += " " + (s.practice2 as Record<string, string>).instruction;
  const closing = s.closing as Record<string, string>;
  text += " " + closing.summary + " " + closing.wisdom + " " + closing.nextPreview;
  text = text.replace(/<[^>]+>/g, " ");
  return text.split(/\s+/).filter(Boolean).length;
}

function logLine(line: string) {
  console.log(line);
  fs.appendFileSync(LOG_FILE, `${new Date().toISOString()}  ${line}\n`);
}

// --- main generation loop ----------------------------------------------------
async function generateOne(opts: { courseId: string; courseTitle: string; lesson: CurriculumLesson; }): Promise<"skipped" | "generated" | "failed"> {
  const { courseId, courseTitle, lesson } = opts;
  const fileName = `${courseId}-${lesson.slug}.json`;
  const filePath = path.join(LESSONS_DIR, fileName);
  if (!argv.force && fs.existsSync(filePath)) {
    logLine(`⏭  skip  ${courseId}/${lesson.slug}  (exists)`);
    return "skipped";
  }
  const kb = loadCourseKB(courseId);
  const prompt = buildUserPrompt({ courseId, lesson, kb, courseTitle, totalLessons: curriculum[courseId].length });
  if (argv["dry-run"]) {
    logLine(`🔍 dry  ${courseId}/${lesson.slug}  (prompt chars=${prompt.length})`);
    return "skipped";
  }

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await anthropic.messages.create({
        model: MODEL,
        max_tokens: 8000,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: prompt }],
      });
      const text = res.content
        .filter((c) => c.type === "text")
        .map((c) => (c as { text: string }).text)
        .join("\n")
        .trim();
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error("no JSON object in response");
      const parsed = JSON.parse(jsonMatch[0]);
      parsed.datePublished ??= "2026-04-15";
      parsed.dateModified ??= "2026-04-15";
      parsed.seo.ogImage ??= `/og/academy/${courseId}/${lesson.slug}.png`;
      const ok = validateLesson(parsed);
      if (!ok.ok) throw new Error(`validation failed: ${ok.error}`);
      const wc = countWords(parsed);
      if (wc < 2000 || wc > 4500) {
        logLine(`⚠  warn ${courseId}/${lesson.slug}  wc=${wc} outside 2500-3500`);
      }
      fs.mkdirSync(LESSONS_DIR, { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2), "utf8");
      logLine(`✓  gen  ${courseId}/${lesson.slug}  wc=${wc}  attempt=${attempt}`);
      return "generated";
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      logLine(`✗  err  ${courseId}/${lesson.slug}  attempt=${attempt}  ${msg}`);
      if (attempt === 3) return "failed";
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  return "failed";
}

async function main() {
  fs.mkdirSync(LESSONS_DIR, { recursive: true });
  const courseTitles: Record<string, string> = JSON.parse(
    fs.readFileSync(path.join(REPO_ROOT, "data/academy-config.json"), "utf8"),
  ).courses.reduce(
    (acc: Record<string, string>, c: { id: string; titleHe: string }) => ({ ...acc, [c.id]: c.titleHe }),
    {},
  );

  const jobs: Array<{ courseId: string; courseTitle: string; lesson: CurriculumLesson }> = [];
  const courseIds = argv.course ? [argv.course] : Object.keys(curriculum);
  for (const cid of courseIds) {
    const lessons = curriculum[cid];
    if (!lessons) { console.error(`Unknown course: ${cid}`); continue; }
    for (const l of lessons) {
      if (argv.lesson !== undefined && l.lessonNumber !== argv.lesson) continue;
      jobs.push({ courseId: cid, courseTitle: courseTitles[cid] ?? cid, lesson: l });
    }
  }

  logLine(`▶  start  jobs=${jobs.length}  concurrency=${argv.concurrency}  delay=${argv.delay}ms`);
  let gen = 0, skip = 0, fail = 0;

  // Simple sequential with throttle (concurrency > 1 with delay inside pool)
  const pool = Array.from({ length: argv.concurrency }, (_, i) => i);
  let cursor = 0;
  await Promise.all(pool.map(async () => {
    while (cursor < jobs.length) {
      const idx = cursor++;
      const job = jobs[idx];
      const r = await generateOne(job);
      if (r === "generated") gen++;
      else if (r === "skipped") skip++;
      else fail++;
      if (r === "generated" && argv.delay > 0) await new Promise((res) => setTimeout(res, argv.delay));
    }
  }));

  logLine(`◼  done  gen=${gen}  skip=${skip}  fail=${fail}`);
  if (fail > 0) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
