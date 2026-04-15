#!/usr/bin/env tsx
/**
 * Generate per-lesson Open Graph images (1200×630) via Satori + resvg.
 * Output: public/og/academy/{courseId}/{slug}.png
 * Template: dark background, gold title, course icon, Maktuba wordmark.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const LESSONS_DIR = path.join(REPO_ROOT, "src/content/lessons");
const OG_ROOT = path.join(REPO_ROOT, "public/og/academy");

// Load a Hebrew-friendly font that Satori can render. @fontsource packs ship TTF in node_modules.
function loadFont(subpath: string): Buffer {
  const p = path.join(REPO_ROOT, "node_modules", subpath);
  return fs.readFileSync(p);
}

const fonts = [
  { name: "Playfair", data: loadFont("@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff").buffer as ArrayBuffer, weight: 700 as const, style: "normal" as const },
  { name: "Heebo",    data: loadFont("@fontsource/heebo/files/heebo-hebrew-400-normal.woff").buffer as ArrayBuffer, weight: 400 as const, style: "normal" as const },
  { name: "Heebo",    data: loadFont("@fontsource/heebo/files/heebo-hebrew-700-normal.woff").buffer as ArrayBuffer, weight: 700 as const, style: "normal" as const },
];

type LessonJson = {
  courseId: string;
  slug: string;
  title: string;
  module: string;
  lessonNumber: number;
};

function courseIcon(courseId: string): string {
  const icons: Record<string, string> = {
    tarot: "🃏", coffee: "☕", palm: "✋", astrology: "⭐", numerology: "🔢",
    kabbalah: "🔯", dreams: "🌙", iching: "☯", crystals: "💎", psalms: "📖",
  };
  return icons[courseId] ?? "✨";
}

function template(lesson: LessonJson) {
  const icon = courseIcon(lesson.courseId);
  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        width: "1200px",
        height: "630px",
        background: "linear-gradient(135deg, #0a0612 0%, #1a0f2e 100%)",
        padding: "64px",
        fontFamily: "Heebo",
        color: "#ddd5ea",
      },
      children: [
        {
          type: "div",
          props: {
            style: { display: "flex", alignItems: "center", gap: "16px", fontSize: "28px", color: "#d4a574", letterSpacing: "0.2em" },
            children: [
              { type: "span", props: { children: "🔮" } },
              { type: "span", props: { style: { fontFamily: "Playfair", fontWeight: 700 }, children: "MAKTUBA" } },
              { type: "span", props: { style: { fontSize: "22px", color: "#7a6b90" }, children: "| ACADEMY" } },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", gap: "20px" },
            children: [
              { type: "div", props: { style: { fontSize: "96px" }, children: icon } },
              { type: "div", props: { style: { fontSize: "16px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#b8a0d8" }, children: lesson.module } },
              { type: "div", props: { style: { fontSize: "56px", fontFamily: "Playfair", fontWeight: 700, color: "#d4a574", lineHeight: 1.2, maxWidth: "1000px" }, children: lesson.title } },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "20px", color: "#7a6b90" },
            children: [
              { type: "span", props: { children: `שיעור ${lesson.lessonNumber}` } },
              { type: "span", props: { style: { color: "#d4a574" }, children: "maktuba.app/academy" } },
            ],
          },
        },
      ],
    },
  };
}

async function renderOne(lesson: LessonJson) {
  const outDir = path.join(OG_ROOT, lesson.courseId);
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${lesson.slug}.png`);
  if (fs.existsSync(outPath)) return "skipped";
  const svg = await satori(template(lesson) as unknown as Parameters<typeof satori>[0], {
    width: 1200, height: 630, fonts,
  });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  fs.writeFileSync(outPath, png);
  return "generated";
}

async function main() {
  if (!fs.existsSync(LESSONS_DIR)) { console.log("no lessons dir"); return; }
  const files = fs.readdirSync(LESSONS_DIR).filter((f) => f.endsWith(".json") && !f.includes(".en.") && !f.includes(".ar."));
  let g = 0, s = 0;
  for (const f of files) {
    const j = JSON.parse(fs.readFileSync(path.join(LESSONS_DIR, f), "utf8")) as LessonJson;
    try {
      const r = await renderOne(j);
      if (r === "generated") { g++; console.log(`✓ og  ${j.courseId}/${j.slug}`); } else s++;
    } catch (err) {
      console.error(`✗ og  ${j.courseId}/${j.slug}  ${err instanceof Error ? err.message : err}`);
    }
  }
  console.log(`◼ done  gen=${g}  skip=${s}  total=${files.length}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
