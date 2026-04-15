// Deterministic curriculum per course (modules + lesson titles).
// Sourced from academy-config.json + KB structure. Expanded incrementally.
// Each course: list of { lessonNumber, slug, title, module } with length === course.lessonCount.

export type CurriculumLesson = {
  lessonNumber: number;
  slug: string;
  titleHe: string;
  titleEn: string;
  titleAr: string;
  module: string;
  kbKey?: string;
};

const tarot: CurriculumLesson[] = [
  { lessonNumber: 1,  slug: "the-fool",           titleHe: "השוטה — התחלה בטרם יודעים",     titleEn: "The Fool — Before You Know",           titleAr: "الأحمق — قبل أن تعرف",           module: "Major Arcana", kbKey: "major_arcana.0" },
  { lessonNumber: 2,  slug: "the-magician",       titleHe: "הקוסם — הקלף שמתחיל הכל",        titleEn: "The Magician — All Begins",            titleAr: "الساحر — البداية",                 module: "Major Arcana", kbKey: "major_arcana.1" },
  { lessonNumber: 3,  slug: "the-high-priestess", titleHe: "הכוהנת הגדולה — החוכמה השקטה",   titleEn: "The High Priestess — Silent Wisdom",   titleAr: "الكاهنة — الحكمة الصامتة",         module: "Major Arcana", kbKey: "major_arcana.2" },
  { lessonNumber: 4,  slug: "the-empress",        titleHe: "הקיסרית — שפע ויצירה",            titleEn: "The Empress — Abundance",               titleAr: "الإمبراطورة — الوفرة",              module: "Major Arcana", kbKey: "major_arcana.3" },
  { lessonNumber: 5,  slug: "the-emperor",        titleHe: "הקיסר — סדר ומבנה",                titleEn: "The Emperor — Order",                    titleAr: "الإمبراطور — النظام",               module: "Major Arcana", kbKey: "major_arcana.4" },
  { lessonNumber: 6,  slug: "the-hierophant",     titleHe: "הכומר הגדול — מסורת ולמידה",     titleEn: "The Hierophant — Tradition",            titleAr: "البابا — التقليد",                  module: "Major Arcana", kbKey: "major_arcana.5" },
  { lessonNumber: 7,  slug: "the-lovers",         titleHe: "האוהבים — בחירה של לב",           titleEn: "The Lovers — Choice",                    titleAr: "العشاق — الاختيار",                 module: "Major Arcana", kbKey: "major_arcana.6" },
  { lessonNumber: 8,  slug: "the-chariot",        titleHe: "המרכבה — שליטה בניגודים",         titleEn: "The Chariot — Mastery",                  titleAr: "العربة — التحكم",                   module: "Major Arcana", kbKey: "major_arcana.7" },
  { lessonNumber: 9,  slug: "strength",           titleHe: "כוח — גבורה רכה",                  titleEn: "Strength — Gentle Power",                titleAr: "القوة — القوة الناعمة",             module: "Major Arcana", kbKey: "major_arcana.8" },
  { lessonNumber: 10, slug: "the-hermit",         titleHe: "הנזיר — אור פנימי",                 titleEn: "The Hermit — Inner Light",               titleAr: "الناسك — النور الداخلي",            module: "Major Arcana", kbKey: "major_arcana.9" },
  { lessonNumber: 11, slug: "wheel-of-fortune",   titleHe: "גלגל המזל — מחזוריות",             titleEn: "Wheel of Fortune — Cycles",              titleAr: "عجلة الحظ — الدورات",               module: "Major Arcana", kbKey: "major_arcana.10" },
  { lessonNumber: 12, slug: "justice",            titleHe: "צדק — אמת ואיזון",                 titleEn: "Justice — Truth & Balance",              titleAr: "العدالة — الحقيقة والتوازن",          module: "Major Arcana", kbKey: "major_arcana.11" },
  { lessonNumber: 13, slug: "the-hanged-man",     titleHe: "התלוי — הסתכלות אחרת",             titleEn: "The Hanged Man — New Sight",             titleAr: "المعلق — رؤية جديدة",               module: "Major Arcana", kbKey: "major_arcana.12" },
  { lessonNumber: 14, slug: "death",              titleHe: "מוות — טרנספורמציה",                titleEn: "Death — Transformation",                 titleAr: "الموت — التحول",                    module: "Major Arcana", kbKey: "major_arcana.13" },
  { lessonNumber: 15, slug: "temperance",         titleHe: "מזג — איזון האלמנטים",              titleEn: "Temperance — Elements",                  titleAr: "الاعتدال — العناصر",                 module: "Major Arcana", kbKey: "major_arcana.14" },
  { lessonNumber: 16, slug: "the-devil",          titleHe: "השטן — שעבודים שבחרנו",            titleEn: "The Devil — Chosen Chains",              titleAr: "الشيطان — السلاسل المختارة",         module: "Major Arcana", kbKey: "major_arcana.15" },
  { lessonNumber: 17, slug: "the-tower",          titleHe: "המגדל — שבירת אשליות",              titleEn: "The Tower — Shattering",                 titleAr: "البرج — التحطيم",                    module: "Major Arcana", kbKey: "major_arcana.16" },
  { lessonNumber: 18, slug: "the-star",           titleHe: "הכוכב — תקווה",                     titleEn: "The Star — Hope",                        titleAr: "النجمة — الأمل",                      module: "Major Arcana", kbKey: "major_arcana.17" },
  { lessonNumber: 19, slug: "the-moon",           titleHe: "הירח — תת-מודע וחלומות",            titleEn: "The Moon — Subconscious",                titleAr: "القمر — اللاوعي",                     module: "Major Arcana", kbKey: "major_arcana.18" },
  { lessonNumber: 20, slug: "the-sun",            titleHe: "השמש — חיוניות",                    titleEn: "The Sun — Vitality",                     titleAr: "الشمس — الحيوية",                     module: "Major Arcana", kbKey: "major_arcana.19" },
  { lessonNumber: 21, slug: "judgement",          titleHe: "המשפט — התעוררות",                   titleEn: "Judgement — Awakening",                   titleAr: "الحكم — اليقظة",                      module: "Major Arcana", kbKey: "major_arcana.20" },
  { lessonNumber: 22, slug: "the-world",          titleHe: "העולם — השלמה",                      titleEn: "The World — Completion",                  titleAr: "العالم — الاكتمال",                   module: "Major Arcana", kbKey: "major_arcana.21" },
  { lessonNumber: 23, slug: "suit-of-wands",      titleHe: "סדרת המטות — אש ורצון",              titleEn: "Wands — Fire & Will",                     titleAr: "العصي — النار والإرادة",              module: "Minor Arcana", kbKey: "suits.wands" },
  { lessonNumber: 24, slug: "suit-of-cups",       titleHe: "סדרת הגביעים — מים ורגש",            titleEn: "Cups — Water & Emotion",                  titleAr: "الكؤوس — الماء والعاطفة",              module: "Minor Arcana", kbKey: "suits.cups" },
  { lessonNumber: 25, slug: "suit-of-swords",     titleHe: "סדרת החרבות — אוויר ומחשבה",         titleEn: "Swords — Air & Thought",                  titleAr: "السيوف — الهواء والفكر",               module: "Minor Arcana", kbKey: "suits.swords" },
  { lessonNumber: 26, slug: "suit-of-pentacles",  titleHe: "סדרת הפנטקלים — אדמה וחומר",         titleEn: "Pentacles — Earth & Matter",              titleAr: "النجوم الخماسية — الأرض والمادة",      module: "Minor Arcana", kbKey: "suits.pentacles" },
  { lessonNumber: 27, slug: "court-cards",        titleHe: "כרטיסי החצר — אנשים ותפקידים",      titleEn: "Court Cards — People & Roles",            titleAr: "أوراق البلاط — الناس والأدوار",        module: "Minor Arcana", kbKey: "court_cards" },
  { lessonNumber: 28, slug: "three-card-spread",  titleHe: "פריסת שלושה קלפים",                  titleEn: "Three-Card Spread",                        titleAr: "فرشة الثلاث أوراق",                    module: "Spreads", kbKey: "spreads.three" },
  { lessonNumber: 29, slug: "celtic-cross",       titleHe: "הצלב הקלטי — פריסת 10 קלפים",        titleEn: "Celtic Cross — 10-Card Spread",           titleAr: "الصليب السلتي — 10 أوراق",             module: "Spreads", kbKey: "spreads.celtic_cross" },
  { lessonNumber: 30, slug: "tarot-ethics",       titleHe: "אתיקה של קוראת טארוט",                titleEn: "Tarot Ethics",                             titleAr: "أخلاقيات قراءة التاروت",                module: "Practice", kbKey: "ethics" },
];

// Stubs for other courses — expanded programmatically. Each one produces
// lessonCount entries. For brevity here we generate titles from KB when possible.
// Actual generation script will fall back to deterministic patterns.

function stubCourse(courseId: string, count: number, moduleOrder: Array<{name: string; count: number}>): CurriculumLesson[] {
  const out: CurriculumLesson[] = [];
  let n = 1;
  for (const m of moduleOrder) {
    for (let i = 1; i <= m.count; i++) {
      out.push({
        lessonNumber: n,
        slug: `${courseId}-${String(n).padStart(2, "0")}`,
        titleHe: `${courseId} — שיעור ${n}`,
        titleEn: `${courseId} — Lesson ${n}`,
        titleAr: `${courseId} — الدرس ${n}`,
        module: m.name,
      });
      n++;
    }
  }
  return out.slice(0, count);
}

const coffee: CurriculumLesson[] = [
  { lessonNumber: 1, slug: "coffee-intro",       titleHe: "מבוא לקריאה בקפה",      titleEn: "Intro to Coffee Reading",    titleAr: "مقدمة قراءة الفنجان",   module: "יסודות", kbKey: "intro" },
  { lessonNumber: 2, slug: "coffee-ritual",      titleHe: "הטקס — הכנת הקפה",       titleEn: "The Ritual",                  titleAr: "الطقس",                  module: "יסודות", kbKey: "ritual" },
  { lessonNumber: 3, slug: "flipping-the-cup",   titleHe: "הפיכת הכוס",              titleEn: "Flipping the Cup",            titleAr: "قلب الفنجان",            module: "יסודות", kbKey: "flipping" },
  { lessonNumber: 4, slug: "the-five-zones",     titleHe: "חמש האזורים בכוס",        titleEn: "The Five Zones",              titleAr: "المناطق الخمس",          module: "יסודות", kbKey: "zones" },
  { lessonNumber: 5, slug: "symbols-animals",     titleHe: "סמלי חיות",               titleEn: "Animal Symbols",              titleAr: "رموز الحيوانات",         module: "סמלים", kbKey: "symbols.animals" },
  { lessonNumber: 6, slug: "symbols-birds",       titleHe: "סמלי ציפורים",            titleEn: "Bird Symbols",                titleAr: "رموز الطيور",            module: "סמלים", kbKey: "symbols.birds" },
  { lessonNumber: 7, slug: "symbols-plants",      titleHe: "סמלי צמחים",              titleEn: "Plant Symbols",               titleAr: "رموز النباتات",          module: "סמלים", kbKey: "symbols.plants" },
  { lessonNumber: 8, slug: "symbols-objects",     titleHe: "סמלי חפצים",              titleEn: "Object Symbols",              titleAr: "رموز الأشياء",           module: "סמלים", kbKey: "symbols.objects" },
  { lessonNumber: 9, slug: "symbols-geometric",   titleHe: "צורות גיאומטריות",         titleEn: "Geometric Shapes",            titleAr: "الأشكال الهندسية",        module: "סמלים", kbKey: "symbols.geometric" },
  { lessonNumber: 10, slug: "symbols-letters",    titleHe: "אותיות ומספרים",           titleEn: "Letters & Numbers",           titleAr: "الحروف والأرقام",         module: "סמלים", kbKey: "symbols.letters" },
  { lessonNumber: 11, slug: "symbols-human",      titleHe: "דמויות אנוש",              titleEn: "Human Figures",               titleAr: "الأشكال البشرية",          module: "סמלים", kbKey: "symbols.human" },
  { lessonNumber: 12, slug: "position-top",       titleHe: "אזור הפתח — הווה",          titleEn: "Top Zone — Present",          titleAr: "المنطقة العليا",           module: "מיקום", kbKey: "position.top" },
  { lessonNumber: 13, slug: "position-middle",    titleHe: "אזור האמצע — עתיד קרוב",    titleEn: "Middle Zone — Near Future",   titleAr: "المنطقة الوسطى",           module: "מיקום", kbKey: "position.middle" },
  { lessonNumber: 14, slug: "position-bottom",    titleHe: "אזור התחתית — בית ומשפחה",  titleEn: "Bottom Zone — Home",          titleAr: "المنطقة السفلية",           module: "מיקום", kbKey: "position.bottom" },
  { lessonNumber: 15, slug: "position-handle",    titleHe: "הידית — אני",               titleEn: "Handle — Self",                titleAr: "المقبض — الذات",            module: "מיקום", kbKey: "position.handle" },
  { lessonNumber: 16, slug: "reading-combined",   titleHe: "קריאה משולבת",              titleEn: "Combined Reading",             titleAr: "القراءة المدمجة",          module: "תרגול", kbKey: "practice.combined" },
  { lessonNumber: 17, slug: "common-questions",   titleHe: "שאלות נפוצות",              titleEn: "Common Questions",             titleAr: "الأسئلة الشائعة",          module: "תרגול", kbKey: "practice.questions" },
  { lessonNumber: 18, slug: "love-in-coffee",     titleHe: "אהבה בקפה",                 titleEn: "Love in Coffee",               titleAr: "الحب في الفنجان",           module: "תרגול", kbKey: "practice.love" },
  { lessonNumber: 19, slug: "money-in-coffee",    titleHe: "כסף ופרנסה",                titleEn: "Money & Livelihood",           titleAr: "المال والرزق",              module: "תרגול", kbKey: "practice.money" },
  { lessonNumber: 20, slug: "coffee-ethics",      titleHe: "אתיקה של קריאת קפה",         titleEn: "Coffee Reading Ethics",        titleAr: "أخلاقيات قراءة الفنجان",   module: "תרגול", kbKey: "ethics" },
];

// Other courses use stub patterns for now — the generator will prompt Claude
// with "course: X, lesson N of M" and produce titles, but we need deterministic
// slugs for routing. These stubs provide them.
const palm       = stubCourse("palm",       15, [{name: "יסודות", count: 5}, {name: "קווים", count: 6}, {name: "תרגול", count: 4}]);
const astrology  = stubCourse("astrology",  25, [{name: "מזלות", count: 12}, {name: "כוכבים", count: 7}, {name: "בתים", count: 6}]);
const numerology = stubCourse("numerology", 18, [{name: "יסודות", count: 4}, {name: "מספרים", count: 9}, {name: "תרגול", count: 5}]);
const kabbalah   = stubCourse("kabbalah",   22, [{name: "עץ החיים", count: 10}, {name: "אותיות", count: 7}, {name: "גימטריה", count: 5}]);
const dreams     = stubCourse("dreams",     16, [{name: "מבוא", count: 3}, {name: "סמלים", count: 8}, {name: "תרגול", count: 5}]);
const iching     = stubCourse("iching",     12, [{name: "מבוא", count: 3}, {name: "הקסגרמות", count: 7}, {name: "תרגול", count: 2}]);
const crystals   = stubCourse("crystals",   14, [{name: "יסודות", count: 4}, {name: "אבנים", count: 8}, {name: "תרגול", count: 2}]);
const psalms     = stubCourse("psalms",     22, [{name: "מבוא", count: 3}, {name: "תהילים נבחרים", count: 14}, {name: "תרגול", count: 5}]);

export const curriculum: Record<string, CurriculumLesson[]> = {
  tarot, coffee, palm, astrology, numerology, kabbalah, dreams, iching, crystals, psalms,
};

export const totalLessons = Object.values(curriculum).reduce((s, l) => s + l.length, 0);
