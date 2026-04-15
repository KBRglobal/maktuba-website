#!/usr/bin/env tsx
/**
 * Build public/sitemap.xml and public/robots.txt from existing lesson files.
 * Outputs hreflang alternates for he/en/ar for every lesson.
 * Runs at build time; no API calls.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const LESSONS_DIR = path.join(REPO_ROOT, "src/content/lessons");
const PUBLIC = path.join(REPO_ROOT, "public");
const SITE = "https://maktuba.app";
const LANGS = ["he", "en", "ar"] as const;

type Lesson = { courseId: string; slug: string; dateModified?: string };

function listLessons(): Lesson[] {
  if (!fs.existsSync(LESSONS_DIR)) return [];
  const out: Lesson[] = [];
  for (const f of fs.readdirSync(LESSONS_DIR)) {
    if (!f.endsWith(".json")) continue;
    if (f.includes(".en.") || f.includes(".ar.")) continue; // only base HE files
    const j = JSON.parse(fs.readFileSync(path.join(LESSONS_DIR, f), "utf8"));
    out.push({ courseId: j.courseId, slug: j.slug, dateModified: j.dateModified });
  }
  return out;
}

function listCourses(): string[] {
  const cfg = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, "data/academy-config.json"), "utf8"));
  return cfg.courses.map((c: { id: string }) => c.id);
}

function urlFor(lang: "he" | "en" | "ar", pathname: string): string {
  const prefix = lang === "he" ? "" : `/${lang}`;
  return `${SITE}${prefix}${pathname}`;
}

function xmlEscape(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function urlEntry(pathname: string, lastmod: string, priority: number, changefreq: string): string {
  const alt = LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${xmlEscape(urlFor(l, pathname))}" />`).join("\n");
  const xdefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(urlFor("he", pathname))}" />`;
  // Emit one <url> per language
  return LANGS.map((lang) => `  <url>
    <loc>${xmlEscape(urlFor(lang, pathname))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
${alt}
${xdefault}
  </url>`).join("\n");
}

function build() {
  const today = new Date().toISOString().slice(0, 10);
  const lessons = listLessons();
  const courses = listCourses();
  const parts: string[] = [];
  parts.push('<?xml version="1.0" encoding="UTF-8"?>');
  parts.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">');
  // Home + Academy index
  parts.push(urlEntry("/", today, 1.0, "weekly"));
  parts.push(urlEntry("/academy", today, 0.9, "weekly"));
  // Course index pages
  for (const cid of courses) parts.push(urlEntry(`/academy/${cid}`, today, 0.8, "monthly"));
  // Lesson pages
  for (const l of lessons) {
    parts.push(urlEntry(`/academy/${l.courseId}/${l.slug}`, l.dateModified || today, 0.7, "monthly"));
  }
  parts.push("</urlset>");
  const xml = parts.join("\n");
  fs.mkdirSync(PUBLIC, { recursive: true });
  fs.writeFileSync(path.join(PUBLIC, "sitemap.xml"), xml, "utf8");
  const count = xml.match(/<url>/g)?.length ?? 0;
  console.log(`✓ sitemap.xml  ${count} URLs (${lessons.length} lessons × ${LANGS.length} langs + ${courses.length} courses + 2 roots)`);
  // robots.txt
  const robots = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${SITE}/sitemap.xml`,
    "",
  ].join("\n");
  fs.writeFileSync(path.join(PUBLIC, "robots.txt"), robots, "utf8");
  console.log(`✓ robots.txt`);
}

build();
