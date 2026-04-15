#!/usr/bin/env tsx
/**
 * Download Rider-Waite-Smith tarot card images (public domain since 2012)
 * from Wikimedia Commons and save to public/images/tarot/.
 *
 * Uses the canonical "RWS Tarot" file names. Major Arcana = 22 images,
 * Minor Arcana = 56 images, total 78.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { fetch } from "undici";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../public/images/tarot");

// Wikimedia uses RWS_Tarot_<n>_<slug>.jpg for major arcana
const MAJOR: Array<{ slug: string; wm: string }> = [
  { slug: "the-fool",           wm: "RWS_Tarot_00_Fool.jpg" },
  { slug: "the-magician",       wm: "RWS_Tarot_01_Magician.jpg" },
  { slug: "the-high-priestess", wm: "RWS_Tarot_02_High_Priestess.jpg" },
  { slug: "the-empress",        wm: "RWS_Tarot_03_Empress.jpg" },
  { slug: "the-emperor",        wm: "RWS_Tarot_04_Emperor.jpg" },
  { slug: "the-hierophant",     wm: "RWS_Tarot_05_Hierophant.jpg" },
  { slug: "the-lovers",         wm: "RWS_Tarot_06_Lovers.jpg" },
  { slug: "the-chariot",        wm: "RWS_Tarot_07_Chariot.jpg" },
  { slug: "strength",           wm: "RWS_Tarot_08_Strength.jpg" },
  { slug: "the-hermit",         wm: "RWS_Tarot_09_Hermit.jpg" },
  { slug: "wheel-of-fortune",   wm: "RWS_Tarot_10_Wheel_of_Fortune.jpg" },
  { slug: "justice",            wm: "RWS_Tarot_11_Justice.jpg" },
  { slug: "the-hanged-man",     wm: "RWS_Tarot_12_Hanged_Man.jpg" },
  { slug: "death",              wm: "RWS_Tarot_13_Death.jpg" },
  { slug: "temperance",         wm: "RWS_Tarot_14_Temperance.jpg" },
  { slug: "the-devil",          wm: "RWS_Tarot_15_Devil.jpg" },
  { slug: "the-tower",          wm: "RWS_Tarot_16_Tower.jpg" },
  { slug: "the-star",           wm: "RWS_Tarot_17_Star.jpg" },
  { slug: "the-moon",           wm: "RWS_Tarot_18_Moon.jpg" },
  { slug: "the-sun",            wm: "RWS_Tarot_19_Sun.jpg" },
  { slug: "judgement",          wm: "RWS_Tarot_20_Judgement.jpg" },
  { slug: "the-world",          wm: "RWS_Tarot_21_World.jpg" },
];

const SUITS: Array<{ suit: "Wands" | "Cups" | "Swords" | "Pents"; slug: string }> = [
  { suit: "Wands", slug: "wands" },
  { suit: "Cups",   slug: "cups" },
  { suit: "Swords", slug: "swords" },
  { suit: "Pents",  slug: "pentacles" },
];

const RANKS = [
  { name: "Ace", n: "01", slug: "ace" },
  { name: "02",  n: "02", slug: "02" },
  { name: "03",  n: "03", slug: "03" },
  { name: "04",  n: "04", slug: "04" },
  { name: "05",  n: "05", slug: "05" },
  { name: "06",  n: "06", slug: "06" },
  { name: "07",  n: "07", slug: "07" },
  { name: "08",  n: "08", slug: "08" },
  { name: "09",  n: "09", slug: "09" },
  { name: "10",  n: "10", slug: "10" },
  { name: "Page",   n: "11", slug: "page"   },
  { name: "Knight", n: "12", slug: "knight" },
  { name: "Queen",  n: "13", slug: "queen"  },
  { name: "King",   n: "14", slug: "king"   },
];

function minorWMName(suit: typeof SUITS[number], rank: typeof RANKS[number]): string {
  // Wikimedia convention: Wands01.jpg, Wands02.jpg, ... WandsPa.jpg, WandsKn.jpg, WandsQu.jpg, WandsKi.jpg
  const abbrev: Record<string, string> = { ace: "01", page: "Pa", knight: "Kn", queen: "Qu", king: "Ki" };
  const tail = abbrev[rank.slug] ?? rank.n;
  return `${suit.suit}${tail}.jpg`;
}

const MINORS: Array<{ slug: string; wm: string }> = [];
for (const s of SUITS) {
  for (const r of RANKS) {
    MINORS.push({ slug: `${s.slug}-${r.slug}`, wm: minorWMName(s, r) });
  }
}

const ALL = [...MAJOR, ...MINORS];

async function resolveWikimediaUrl(file: string): Promise<string | null> {
  // Wikimedia imageinfo API returns the direct URL
  const api = `https://en.wikipedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(file)}&prop=imageinfo&iiprop=url&format=json&origin=*`;
  try {
    const res = await fetch(api, { headers: { "User-Agent": "MaktubaAcademyBuilder/1.0 (office@travi.world)" } });
    const data = await res.json() as { query?: { pages?: Record<string, { imageinfo?: Array<{ url: string }> }> } };
    const pages = data.query?.pages ?? {};
    const firstPage = Object.values(pages)[0];
    return firstPage?.imageinfo?.[0]?.url ?? null;
  } catch {
    return null;
  }
}

async function downloadOne(entry: { slug: string; wm: string }): Promise<"ok" | "skipped" | "miss"> {
  fs.mkdirSync(OUT, { recursive: true });
  const outPath = path.join(OUT, `${entry.slug}.jpg`);
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) return "skipped";
  const url = await resolveWikimediaUrl(entry.wm);
  if (!url) {
    console.error(`✗ miss ${entry.slug}  (no URL for ${entry.wm})`);
    return "miss";
  }
  const res = await fetch(url, { headers: { "User-Agent": "MaktubaAcademyBuilder/1.0 (office@travi.world)" } });
  if (!res.ok) { console.error(`✗ http ${entry.slug}  ${res.status}`); return "miss"; }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outPath, buf);
  console.log(`✓ ${entry.slug.padEnd(22)} ${(buf.length / 1024).toFixed(0)}KB`);
  return "ok";
}

async function main() {
  console.log(`Fetching ${ALL.length} Rider-Waite-Smith card images…`);
  let ok = 0, skip = 0, miss = 0;
  for (const e of ALL) {
    const r = await downloadOne(e);
    if (r === "ok") ok++;
    else if (r === "skipped") skip++;
    else miss++;
    await new Promise((res) => setTimeout(res, 300)); // be nice
  }
  console.log(`◼ done  ok=${ok}  skip=${skip}  miss=${miss}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
