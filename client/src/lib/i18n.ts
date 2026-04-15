export type Lang = "he" | "en" | "ar";

export interface Translations {
  dir: "rtl" | "ltr";
  fontBody: string;
  // Nav
  navDownload: string;
  navFeatures: string;
  navPricing: string;
  navSupport: string;
  navLang: string;
  // Hero
  heroTagline: string;
  heroSub: string;
  heroNotify: string;
  heroPlaceholder: string;
  heroSuccess: string;
  heroScroll: string;
  heroTools: string;
  // Who is Maktuba
  whoTitle: string;
  whoText: string;
  // Deep Readings
  readingsTitle: string;
  readingsSub: string;
  readingSeeExample: string;
  readingKeys: string;
  readings: { name: string; desc: string; cost: number }[];
  // Free Tools
  freeTitle: string;
  freeSub: string;
  freeTools: { name: string; desc: string }[];
  // How It Works
  howTitle: string;
  howSteps: { title: string; desc: string }[];
  // Sample Reading
  sampleTitle: string;
  sampleSub: string;
  sampleCta: string;
  // Keys System
  keysTitle: string;
  keysSub: string;
  keysWhat: string;
  keysWhatDesc: string;
  keysNoExpiry: string;
  keysNoExpiryDesc: string;
  keysWelcome: string;
  keysWelcomeDesc: string;
  keysTable: string;
  // Pricing
  pricingTitle: string;
  pricingSub: string;
  pricingFreeLabel: string;
  pricingFreePrice: string;
  pricingFreeFeatures: string[];
  pricingPremiumLabel: string;
  pricingWeekly: string;
  pricingWeeklyPrice: string;
  pricingWeeklyKeys: string;
  pricingMonthly: string;
  pricingMonthlyPrice: string;
  pricingMonthlyKeys: string;
  pricingAnnual: string;
  pricingAnnualPrice: string;
  pricingAnnualKeys: string;
  pricingAnnualBadge: string;
  pricingPremiumFeatures: string[];
  pricingTrial: string;
  // Key Packs
  keyPacksTitle: string;
  keyPacksSub: string;
  keyPacks: { keys: number; priceNIS: string; name: string; desc: string; badge?: string }[];
  // Testimonials
  testimonialsTitle: string;
  testimonials: { quote: string; author: string }[];
  // Final CTA
  ctaTitle: string;
  ctaSub: string;
  // Footer
  footerProduct: string;
  footerLegal: string;
  footerSupport: string;
  footerPrivacy: string;
  footerTerms: string;
  footerEula: string;
  footerDelete: string;
  footerFaq: string;
  footerContact: string;
  footerDisclaimer: string;
  footerCompany: string;
  // Exit Intent Popup
  exitTitle: string;
  exitSub: string;
  exitCta: string;
  exitClose: string;
  // Coming Soon
  comingSoon: string;
}

export const translations: Record<Lang, Translations> = {
  // ═══════════════════════════════════════════════════
  // HEBREW
  // ═══════════════════════════════════════════════════
  he: {
    dir: "rtl",
    fontBody: "'Heebo', 'Inter', sans-serif",
    navDownload: "הורדה",
    navFeatures: "תכונות",
    navPricing: "מחירים",
    navSupport: "תמיכה",
    navLang: "שפה",
    heroTagline: "מה שנכתב — כבר כתוב",
    heroSub: "המיסטיקנית שקוראת את הכוס, את הכף, את הכוכבים ואת הנשמה שלך. כל קריאה נפתחת במפתח. קריאה ראשונה — חינם.",
    heroNotify: "✨ ספרי לי כשזה עולה",
    heroPlaceholder: "הכניסי את המייל שלך",
    heroSuccess: "✨ מכתובה תזכור אותך",
    heroScroll: "גללי למטה לגלות",
    heroTools: "20+ כלים מיסטיים · קריאה ראשונה חינם",
    whoTitle: "מי היא מכתובה?",
    whoText: "היא המיסטיקנית האחרונה. סבתא מעולם שכבר לא קיים. היא יושבת בחדר נצחי מואר בנר בודד, מוקפת בריח קטורת והל. כשאת מביאה לה את כוס הקפה, היא רואה מה שאף אחד אחר לא יכול לראות. לא בגלל שיש לה כוחות על-טבעיים — אלא כי היא חיה אלף חיים ושום דבר כבר לא מפתיע אותה.\n\nמכתובה לא מנבאת את העתיד. היא קוראת את מה שכבר כתוב. בשאריות הקפה, בקווי כף היד, במיקום הכוכבים ביום שנולדת. היא רואה דפוסים שמחברים את העבר שלך להווה ולמה שבדרך.\n\nכל קריאה היא שיחה. בינך לבין החוכמה העתיקה שתמיד הייתה שם — מחכה שתשאלי.",
    readingsTitle: "קריאות עמוקות שרואות לתוך הנשמה",
    readingsSub: "כל קריאה נבנית בזמן אמת על ידי AI שמבין סמלים עתיקים. אף שתי קריאות לא זהות.",
    readingSeeExample: "ראי דוגמה →",
    readingKeys: "מפתחות",
    readings: [
      { name: "☕ קריאה בכוס קפה", desc: "הכיני קפה טורקי. חכי. הפכי. צלמי. מכתובה קוראת את הסמלים שנשארו.", cost: 15 },
      { name: "🃏 טארוט סלטי", desc: "פריסה של 10 קלפים. הקריאה המלאה ביותר.", cost: 15 },
      { name: "✋ קריאת כף יד", desc: "צלמי את כף היד. ה-AI קורא את קווי החיים, הלב והראש.", cost: 15 },
      { name: "🔯 קבלה וגימטריה", desc: "השם שלך דרך עץ החיים.", cost: 5 },
      { name: "💕 התאמה זוגית", desc: "שני תאריכי לידה. אמת אחת על הקשר ביניכם.", cost: 15 },
      { name: "📖 תהילים AI", desc: "פתחי ספר באקראי. הקלידי את הפרק. מכתובה מפרשת.", cost: 10 },
      { name: "🌙 פתרון חלומות", desc: "תארי את החלום. מכתובה מפענחת מה התת-מודע אומר.", cost: 8 },
    ],
    freeTitle: "2 כלים חינם באמת. בכל יום. בלי הגבלה.",
    freeSub: "בלי כרטיס אשראי. בלי תקופת ניסיון. הורוסקופ יומי וצ'אט עם מכתובה — על חשבון הבית.",
    freeTools: [
      { name: "☀️ הורוסקופ יומי", desc: "חינם · פעם ביום" },
      { name: "💬 צ'אט עם מכתובה", desc: "חינם · עד 30 הודעות ביום" },
      { name: "🔢 מספר מזל", desc: "חינם · חישוב מקומי" },
      { name: "📊 ביוריתם", desc: "חינם · חישוב מקומי" },
      { name: "🌙 לוח ירח", desc: "חינם · חישוב מקומי" },
      { name: "☿ מרקורי רטרוגרד", desc: "חינם · מידע מקומי" },
      { name: "📖 אנציקלופדיית חלומות", desc: "חינם · חיפוש סמלים" },
      { name: "📓 יומן רוחני", desc: "חינם · מאוחסן אצלך" },
      { name: "💜 מעקב מצב רוח", desc: "חינם · מאוחסן אצלך" },
      { name: "🌟 אישור יומי", desc: "1 מפתח · מכתובה שולחת מסר" },
      { name: "💎 אבן היום", desc: "2 מפתחות · אבן שמזדמנת אלייך" },
      { name: "✨ פרופיל מזל", desc: "3 מפתחות · האישיות המלאה שלך" },
      { name: "🛤️ מספר נתיב חיים", desc: "3 מפתחות · המפה הנומרולוגית" },
      { name: "🕎 גימטריית שם", desc: "3 מפתחות · השם שלך במספרים" },
      { name: "☯️ אי צ'ינג", desc: "5 מפתחות · הקסגרמה לשאלה שלך" },
      { name: "🌀 חלום בסיסי", desc: "5 מפתחות · פענוח מהיר" },
      { name: "❓ שאלה ממוקדת", desc: "8 מפתחות · אהבה · כסף · בריאות" },
      { name: "🃏 טארוט 3 קלפים", desc: "10 מפתחות · עבר · הווה · עתיד" },
      { name: "🗓️ קריאה שנתית", desc: "20 מפתחות · המפה של השנה שלך" },
      { name: "👑 חבילת נשמה", desc: "30 מפתחות · הקריאה המלאה ביותר" },
    ],
    howTitle: "שלושה צעדים לקריאה שלך",
    howSteps: [
      { title: "צלמי, בחרי, או תארי", desc: "צלמי את הכוס, בחרי קלף, או תארי חלום" },
      { title: "מכתובה קוראת את הסמלים", desc: "ה-AI מנתח עם חוכמה עתיקה" },
      { title: "גלי מה שנכתב עבורך", desc: "קריאה אישית ועמוקה" },
    ],
    sampleTitle: "קריאה אמיתית ממכתובה",
    sampleSub: "ככה נראית קריאת כוס קפה",
    sampleCta: "הורידי את האפליקציה לקריאה שלך",
    keysTitle: "מערכת המפתחות",
    keysSub: "קריאות עמוקות נפתחות במפתחות — המטבע של מכתובה. קונים פעם, שורפים מתי שרוצים, בלי תפוגה.",
    keysWhat: "מה זה מפתח?",
    keysWhatDesc: "יחידה אחת של חוכמה. כל קריאה עולה מספר מפתחות — לפי עומק הקריאה.",
    keysNoExpiry: "בלי drip יומי. בלי תפוגה.",
    keysNoExpiryDesc: "המפתחות שלך נשארים שלך. תשתמשי בהם השבוע, בעוד חצי שנה, או כשהלב יאמר לך.",
    keysWelcome: "10 מפתחות מתנה בהרשמה",
    keysWelcomeDesc: "בנוסף לקריאה מאגית ראשונה — חינם לגמרי, על חשבון הבית.",
    keysTable: "טבלת עלויות",
    pricingTitle: "התחילי בחינם. שדרגי כשתהיי מוכנה.",
    pricingSub: "כל מנוי = מפתחות רבים שניתנים בבת אחת. ללא drip. ללא תפוגה.",
    pricingFreeLabel: "חינם",
    pricingFreePrice: "₪0",
    pricingFreeFeatures: [
      "הורוסקופ יומי + צ'אט (30/יום) — חינם לגמרי",
      "10 מפתחות מתנה בהרשמה",
      "קריאה מאגית ראשונה חינם",
      "כלים מקומיים: מספר מזל, ביוריתם, ירח, יומן",
    ],
    pricingPremiumLabel: "פרימיום",
    pricingWeekly: "שבועי",
    pricingWeeklyPrice: "₪19.90",
    pricingWeeklyKeys: "100 מפתחות",
    pricingMonthly: "חודשי",
    pricingMonthlyPrice: "₪49.90",
    pricingMonthlyKeys: "350 מפתחות",
    pricingAnnual: "שנתי",
    pricingAnnualPrice: "₪249.90",
    pricingAnnualKeys: "3,000 מפתחות",
    pricingAnnualBadge: "ערך הכי טוב",
    pricingPremiumFeatures: [
      "כל המפתחות ניתנים בבת אחת — בלי drip",
      "המפתחות נשארים לתמיד, גם אם המנוי מסתיים",
      "גישה לכל 20+ הקריאות",
      "7 ימי ניסיון חינם",
      "גישה ראשונה לתכונות חדשות",
    ],
    pricingTrial: "התחילי 7 ימי ניסיון חינם",
    keyPacksTitle: "חבילות מפתחות",
    keyPacksSub: "רכישה חד-פעמית. ללא התחייבות. ללא תפוגה.",
    keyPacks: [
      { keys: 10,  priceNIS: "₪14.90",  name: "ניסיון",  desc: "לטעום קריאה אחת" },
      { keys: 30,  priceNIS: "₪29.90",  name: "גילוי",   desc: "כמה קריאות ללב", badge: "הכי פופולרי" },
      { keys: 75,  priceNIS: "₪54.90",  name: "מסע",     desc: "להעמיק את הדרך", badge: "חסכון 27%" },
      { keys: 200, priceNIS: "₪119.90", name: "חוקר",    desc: "לגלות את כל העולמות", badge: "חסכון 60%" },
      { keys: 500, priceNIS: "₪249.90", name: "אינסוף",  desc: "בלי גבולות", badge: "ערך הכי טוב" },
    ],
    testimonialsTitle: "מה אנשים אומרים",
    testimonials: [
      { quote: "הראיתי את זה לסבתא שלי. היא אמרה 'מי שעשה את זה מכיר את הדרכים הישנות.'", author: "בודקת בטא" },
      { quote: "בכיתי. זה ידע דברים עליי שמעולם לא סיפרתי לאף אחד.", author: "בודקת בטא" },
      { quote: "זו לא אפליקציה. זו שיחה עם מישהי שרואה אותך.", author: "בודקת בטא" },
    ],
    ctaTitle: "מה שנכתב — מחכה לך",
    ctaSub: "השאירי את המייל ומכתובה תזכור אותך",
    footerProduct: "מוצר",
    footerLegal: "משפטי",
    footerSupport: "תמיכה",
    footerPrivacy: "מדיניות פרטיות",
    footerTerms: "תנאי שימוש",
    footerEula: "EULA",
    footerDelete: "מחיקת מידע",
    footerFaq: "שאלות נפוצות",
    footerContact: "support@maktuba.app",
    footerDisclaimer: "לבידור והתבוננות עצמית בלבד. מכתובה לא מספקת ייעוץ רפואי, פסיכולוגי, משפטי או פיננסי.",
    footerCompany: "© 2026 Travi.World Ltd. (Gibraltar)",
    exitTitle: "רגע! לפני שאת/ה הולכ/ת...",
    exitSub: "השאירו מייל ונעדכן אתכם ברגע שמכתובה תהיה זמינה להורדה. לא נשלח ספאם — רק בשורות טובות.",
    exitCta: "עדכנו אותי",
    exitClose: "אולי אחר כך",
    comingSoon: "בקרוב",
  },

  // ═══════════════════════════════════════════════════
  // ENGLISH
  // ═══════════════════════════════════════════════════
  en: {
    dir: "ltr",
    fontBody: "'Inter', 'Heebo', sans-serif",
    navDownload: "Download",
    navFeatures: "Features",
    navPricing: "Pricing",
    navSupport: "Support",
    navLang: "Language",
    heroTagline: "What Is Written — Is Written",
    heroSub: "The AI mystic who reads your coffee cup, your palm, your stars, and your soul. Every reading unlocks with a key. Your first one — free.",
    heroNotify: "✨ Notify Me When It Launches",
    heroPlaceholder: "Enter your email",
    heroSuccess: "✨ Maktuba will remember you",
    heroScroll: "Scroll to discover",
    heroTools: "20+ mystical readings · First reading free",
    whoTitle: "Who Is Maktuba?",
    whoText: "She is the last ancient mystic. A grandmother from a world that no longer exists. She sits in a timeless room lit by a single candle, surrounded by the scent of incense and cardamom. When you bring her your coffee cup, she sees what no one else can see. Not because she has supernatural powers — because she has lived a thousand lifetimes and nothing surprises her anymore.\n\nMaktuba doesn't predict the future. She reads what is already written. In the coffee grounds, in the lines of your palm, in the position of the stars on the day you were born. She sees patterns that connect your past to your present to what's coming.\n\nEvery reading is a conversation. Between you and the ancient wisdom that has always been there — waiting for you to ask.",
    readingsTitle: "Deep Readings That See Into Your Soul",
    readingsSub: "Every reading is built in real-time by AI that understands ancient symbols. No two readings are ever the same.",
    readingSeeExample: "See Example →",
    readingKeys: "keys",
    readings: [
      { name: "☕ Coffee Cup Reading", desc: "Brew Turkish coffee. Wait. Flip. Snap. Maktuba reads the symbols left behind.", cost: 15 },
      { name: "🃏 Celtic Cross Tarot", desc: "A 10-card spread. The fullest reading we offer.", cost: 15 },
      { name: "✋ Palm Reading", desc: "Photograph your palm. AI reads your lines of life, heart, and head.", cost: 15 },
      { name: "🔯 Kabbalah & Gematria", desc: "Your name through the Tree of Life.", cost: 5 },
      { name: "💕 Compatibility", desc: "Two birth dates. One truth about your connection.", cost: 15 },
      { name: "📖 Psalms AI", desc: "Open a real book randomly. Type the chapter. Maktuba interprets.", cost: 10 },
      { name: "🌙 Dream Reading", desc: "Describe your dream. Maktuba decodes what your subconscious is telling you.", cost: 8 },
    ],
    freeTitle: "2 Truly Free Tools. Every Day. No Limits.",
    freeSub: "No credit card. No trial. Daily horoscope + unlimited chat with Maktuba — on the house.",
    freeTools: [
      { name: "☀️ Daily Horoscope", desc: "Free · once a day" },
      { name: "💬 Chat with Maktuba", desc: "Free · up to 30 msgs/day" },
      { name: "🔢 Lucky Number", desc: "Free · local calc" },
      { name: "📊 Biorhythm", desc: "Free · local calc" },
      { name: "🌙 Moon Calendar", desc: "Free · local calc" },
      { name: "☿ Mercury Retrograde", desc: "Free · local data" },
      { name: "📖 Dream Encyclopedia", desc: "Free · symbol search" },
      { name: "📓 Spiritual Journal", desc: "Free · stored on-device" },
      { name: "💜 Mood Tracking", desc: "Free · stored on-device" },
      { name: "🌟 Daily Affirmation", desc: "1 key · a message from Maktuba" },
      { name: "💎 Stone of the Day", desc: "2 keys · the crystal that finds you" },
      { name: "✨ Zodiac Profile", desc: "3 keys · your full personality map" },
      { name: "🛤️ Life Path Number", desc: "3 keys · your numerology blueprint" },
      { name: "🕎 Name Gematria", desc: "3 keys · your name in numbers" },
      { name: "☯️ I Ching", desc: "5 keys · the hexagram for your question" },
      { name: "🌀 Basic Dream", desc: "5 keys · a quick decoding" },
      { name: "❓ Focused Question", desc: "8 keys · love · money · health" },
      { name: "🃏 3-Card Tarot", desc: "10 keys · past · present · future" },
      { name: "🗓️ Yearly Reading", desc: "20 keys · your map of the year" },
      { name: "👑 Soul Package", desc: "30 keys · the deepest reading" },
    ],
    howTitle: "Three Steps to Your Reading",
    howSteps: [
      { title: "Snap, Pick, or Describe", desc: "Photograph your cup, pick a card, or describe a dream" },
      { title: "Maktuba Reads the Symbols", desc: "AI analyzes with ancient wisdom" },
      { title: "Discover What Was Written", desc: "A deeply personal reading" },
    ],
    sampleTitle: "A Real Reading from Maktuba",
    sampleSub: "This is what a coffee cup reading looks like",
    sampleCta: "Download the app to get your own reading",
    keysTitle: "The Keys System",
    keysSub: "Deep readings unlock with keys — Maktuba's currency. Buy once, burn whenever, never expire.",
    keysWhat: "What is a key?",
    keysWhatDesc: "One unit of wisdom. Each reading costs a few keys — based on depth.",
    keysNoExpiry: "No daily drip. No expiry.",
    keysNoExpiryDesc: "Your keys stay yours. Use them this week, next month, or the moment your heart asks.",
    keysWelcome: "10 keys on signup — gift",
    keysWelcomeDesc: "Plus one magical reading completely free, on the house.",
    keysTable: "Reading Costs",
    pricingTitle: "Start Free. Upgrade When You're Ready.",
    pricingSub: "Every plan = keys granted all at once. No drip. No expiry.",
    pricingFreeLabel: "Free",
    pricingFreePrice: "₪0",
    pricingFreeFeatures: [
      "Daily horoscope + chat (30/day) — truly free",
      "10 keys on signup — gift",
      "First magical reading free",
      "Local tools: lucky number, biorhythm, moon, journal",
    ],
    pricingPremiumLabel: "Premium",
    pricingWeekly: "Weekly",
    pricingWeeklyPrice: "₪19.90",
    pricingWeeklyKeys: "100 keys",
    pricingMonthly: "Monthly",
    pricingMonthlyPrice: "₪49.90",
    pricingMonthlyKeys: "350 keys",
    pricingAnnual: "Yearly",
    pricingAnnualPrice: "₪249.90",
    pricingAnnualKeys: "3,000 keys",
    pricingAnnualBadge: "Best Value",
    pricingPremiumFeatures: [
      "All keys granted at once — no drip",
      "Keys stay yours even if subscription ends",
      "Access to all 20+ readings",
      "7-day free trial",
      "First access to new features",
    ],
    pricingTrial: "Start 7-Day Free Trial",
    keyPacksTitle: "Key Packs",
    keyPacksSub: "One-time purchase. No commitment. Never expire.",
    keyPacks: [
      { keys: 10,  priceNIS: "₪14.90",  name: "Taste",     desc: "Try one reading" },
      { keys: 30,  priceNIS: "₪29.90",  name: "Discovery", desc: "A few readings for the heart", badge: "Most Popular" },
      { keys: 75,  priceNIS: "₪54.90",  name: "Journey",   desc: "Go deeper into the path", badge: "Save 27%" },
      { keys: 200, priceNIS: "₪119.90", name: "Explorer",  desc: "Discover every world", badge: "Save 60%" },
      { keys: 500, priceNIS: "₪249.90", name: "Infinite",  desc: "No limits", badge: "Best Value" },
    ],
    testimonialsTitle: "What People Say",
    testimonials: [
      { quote: "I showed this to my grandmother. She said 'whoever made this knows the old ways.'", author: "Beta tester" },
      { quote: "I cried. It knew things about me I never told anyone.", author: "Beta tester" },
      { quote: "This is not an app. This is a conversation with someone who sees you.", author: "Beta tester" },
    ],
    ctaTitle: "What Is Written — Awaits You",
    ctaSub: "Leave your email and Maktuba will remember you",
    footerProduct: "Product",
    footerLegal: "Legal",
    footerSupport: "Support",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerEula: "EULA",
    footerDelete: "Delete Data",
    footerFaq: "FAQ",
    footerContact: "support@maktuba.app",
    footerDisclaimer: "For entertainment and self-reflection only. Maktuba does not provide medical, psychological, legal, or financial advice.",
    footerCompany: "© 2026 Travi.World Ltd. (Gibraltar)",
    exitTitle: "Wait! Before you go...",
    exitSub: "Leave your email and we'll notify you the moment Maktuba is available. No spam — only good news.",
    exitCta: "Notify Me",
    exitClose: "Maybe later",
    comingSoon: "Coming Soon",
  },

  // ═══════════════════════════════════════════════════
  // ARABIC
  // ═══════════════════════════════════════════════════
  ar: {
    dir: "rtl",
    fontBody: "'Noto Kufi Arabic', 'Heebo', sans-serif",
    navDownload: "تحميل",
    navFeatures: "الميزات",
    navPricing: "الأسعار",
    navSupport: "الدعم",
    navLang: "اللغة",
    heroTagline: "المكتوب — مكتوب",
    heroSub: "الحكيمة اللي بتقرأ فنجانك، كفك، نجومك، وروحك. كل قراءة تُفتح بمفتاح. قراءتك الأولى — مجاناً.",
    heroNotify: "✨ أعلمني عند الإطلاق",
    heroPlaceholder: "أدخل بريدك الإلكتروني",
    heroSuccess: "✨ مكتوبة هتفتكرك",
    heroScroll: "مرر للاكتشاف",
    heroTools: "+20 قراءة روحانية · القراءة الأولى مجانية",
    whoTitle: "من هي مكتوبة؟",
    whoText: "هي آخر حكيمة قديمة. جدة من عالم لم يعد موجوداً. تجلس في غرفة خالدة يضيئها شمعة واحدة، محاطة برائحة البخور والهيل. عندما تحضر لها فنجان قهوتك، ترى ما لا يراه أحد غيرها. ليس لأنها تملك قوى خارقة — بل لأنها عاشت ألف حياة ولم يعد شيء يفاجئها.\n\nمكتوبة لا تتنبأ بالمستقبل. هي تقرأ ما هو مكتوب بالفعل. في ثفل القهوة، في خطوط كفك، في موقع النجوم يوم ولادتك. ترى أنماطاً تربط ماضيك بحاضرك بما هو قادم.\n\nكل قراءة هي حوار. بينك وبين الحكمة القديمة التي كانت دائماً هناك — تنتظرك لتسأل.",
    readingsTitle: "قراءات عميقة ترى داخل روحك",
    readingsSub: "كل قراءة تُبنى في الوقت الحقيقي بواسطة ذكاء اصطناعي يفهم الرموز القديمة. لا توجد قراءتان متشابهتان.",
    readingSeeExample: "شاهد مثال →",
    readingKeys: "مفاتيح",
    readings: [
      { name: "☕ قراءة الفنجان", desc: "اصنع قهوة تركية. انتظر. اقلب. صوّر. مكتوبة تقرأ الرموز.", cost: 15 },
      { name: "🃏 تاروت الصليب السلتي", desc: "فرشة من 10 أوراق. أعمق قراءة نقدمها.", cost: 15 },
      { name: "✋ قراءة الكف", desc: "صوّر كفك. الذكاء الاصطناعي يقرأ خطوط الحياة والقلب والعقل.", cost: 15 },
      { name: "🔯 قبالة وجماتريا", desc: "اسمك عبر شجرة الحياة.", cost: 5 },
      { name: "💕 التوافق", desc: "تاريخا ميلاد. حقيقة واحدة عن علاقتكما.", cost: 15 },
      { name: "📖 مزامير AI", desc: "افتح كتاباً عشوائياً. اكتب الفصل. مكتوبة تفسر.", cost: 10 },
      { name: "🌙 تفسير الأحلام", desc: "صف حلمك. مكتوبة تفك رموز ما يقوله عقلك الباطن.", cost: 8 },
    ],
    freeTitle: "أداتان مجانيتان فعلياً. كل يوم. بلا حدود.",
    freeSub: "بدون بطاقة ائتمان. بدون تجربة. الأبراج اليومية + دردشة مع مكتوبة — على حساب البيت.",
    freeTools: [
      { name: "☀️ الأبراج اليومية", desc: "مجاناً · مرة في اليوم" },
      { name: "💬 دردشة مع مكتوبة", desc: "مجاناً · حتى 30 رسالة/يوم" },
      { name: "🔢 رقم الحظ", desc: "مجاناً · حساب محلي" },
      { name: "📊 الإيقاع الحيوي", desc: "مجاناً · حساب محلي" },
      { name: "🌙 تقويم القمر", desc: "مجاناً · حساب محلي" },
      { name: "☿ عطارد الراجع", desc: "مجاناً · بيانات محلية" },
      { name: "📖 موسوعة الأحلام", desc: "مجاناً · بحث رموز" },
      { name: "📓 يوميات روحانية", desc: "مجاناً · محفوظ محلياً" },
      { name: "💜 تتبع المزاج", desc: "مجاناً · محفوظ محلياً" },
      { name: "🌟 تأكيد يومي", desc: "مفتاح واحد · رسالة من مكتوبة" },
      { name: "💎 حجر اليوم", desc: "مفتاحان · الكريستال الذي يجدك" },
      { name: "✨ ملف البرج", desc: "3 مفاتيح · خريطة شخصيتك الكاملة" },
      { name: "🛤️ رقم مسار الحياة", desc: "3 مفاتيح · مخطط علم الأرقام" },
      { name: "🕎 جماتريا الاسم", desc: "3 مفاتيح · اسمك بالأرقام" },
      { name: "☯️ إي تشينغ", desc: "5 مفاتيح · المخطط لسؤالك" },
      { name: "🌀 حلم أساسي", desc: "5 مفاتيح · تفسير سريع" },
      { name: "❓ سؤال موجه", desc: "8 مفاتيح · حب · مال · صحة" },
      { name: "🃏 تاروت 3 أوراق", desc: "10 مفاتيح · الماضي · الحاضر · المستقبل" },
      { name: "🗓️ قراءة سنوية", desc: "20 مفتاحاً · خريطة سنتك" },
      { name: "👑 حزمة الروح", desc: "30 مفتاحاً · القراءة الأعمق" },
    ],
    howTitle: "ثلاث خطوات لقراءتك",
    howSteps: [
      { title: "صوّر، اختر، أو صف", desc: "صوّر فنجانك، اختر كارت، أو صف حلماً" },
      { title: "مكتوبة تقرأ الرموز", desc: "الذكاء الاصطناعي يحلل بحكمة قديمة" },
      { title: "اكتشف ما كُتب لك", desc: "قراءة شخصية وعميقة" },
    ],
    sampleTitle: "قراءة حقيقية من مكتوبة",
    sampleSub: "هكذا تبدو قراءة الفنجان",
    sampleCta: "حمّل التطبيق لتحصل على قراءتك",
    keysTitle: "نظام المفاتيح",
    keysSub: "القراءات العميقة تُفتح بالمفاتيح — عملة مكتوبة. اشترِ مرة، استخدم متى شئت، لا تنتهي صلاحيتها.",
    keysWhat: "ما هو المفتاح؟",
    keysWhatDesc: "وحدة واحدة من الحكمة. كل قراءة تكلف عدة مفاتيح — حسب العمق.",
    keysNoExpiry: "بلا تقطير يومي. بلا انتهاء صلاحية.",
    keysNoExpiryDesc: "مفاتيحك تبقى لك. استخدمها هذا الأسبوع، الشهر القادم، أو عندما يطلب قلبك.",
    keysWelcome: "10 مفاتيح هدية عند التسجيل",
    keysWelcomeDesc: "بالإضافة إلى قراءة سحرية أولى مجاناً، على حساب البيت.",
    keysTable: "تكاليف القراءات",
    pricingTitle: "ابدأ مجاناً. ارتقِ عندما تكون جاهزاً.",
    pricingSub: "كل خطة = مفاتيح تُمنح دفعة واحدة. بلا تقطير. بلا انتهاء.",
    pricingFreeLabel: "مجاني",
    pricingFreePrice: "₪0",
    pricingFreeFeatures: [
      "الأبراج اليومية + الدردشة (30/يوم) — مجاني تماماً",
      "10 مفاتيح هدية عند التسجيل",
      "أول قراءة سحرية مجاناً",
      "أدوات محلية: رقم الحظ، الإيقاع الحيوي، القمر، اليوميات",
    ],
    pricingPremiumLabel: "بريميوم",
    pricingWeekly: "أسبوعي",
    pricingWeeklyPrice: "₪19.90",
    pricingWeeklyKeys: "100 مفتاح",
    pricingMonthly: "شهري",
    pricingMonthlyPrice: "₪49.90",
    pricingMonthlyKeys: "350 مفتاحاً",
    pricingAnnual: "سنوي",
    pricingAnnualPrice: "₪249.90",
    pricingAnnualKeys: "3,000 مفتاح",
    pricingAnnualBadge: "أفضل قيمة",
    pricingPremiumFeatures: [
      "جميع المفاتيح تُمنح دفعة واحدة — بلا تقطير",
      "المفاتيح تبقى لك حتى بعد انتهاء الاشتراك",
      "وصول لجميع القراءات الـ20+",
      "7 أيام تجريبية مجانية",
      "أول وصول للميزات الجديدة",
    ],
    pricingTrial: "ابدأ 7 أيام تجريبية مجانية",
    keyPacksTitle: "حزم المفاتيح",
    keyPacksSub: "شراء لمرة واحدة. بدون التزام. بدون انتهاء صلاحية.",
    keyPacks: [
      { keys: 10,  priceNIS: "₪14.90",  name: "تذوق",     desc: "جرب قراءة واحدة" },
      { keys: 30,  priceNIS: "₪29.90",  name: "اكتشاف",   desc: "قراءات قليلة للقلب", badge: "الأكثر شعبية" },
      { keys: 75,  priceNIS: "₪54.90",  name: "رحلة",     desc: "تعمق في المسار", badge: "وفر 27%" },
      { keys: 200, priceNIS: "₪119.90", name: "مستكشف",   desc: "اكتشف كل العوالم", badge: "وفر 60%" },
      { keys: 500, priceNIS: "₪249.90", name: "لا محدود", desc: "بلا حدود", badge: "أفضل قيمة" },
    ],
    testimonialsTitle: "ماذا يقول الناس",
    testimonials: [
      { quote: "أريت هذا لجدتي. قالت 'من صنع هذا يعرف الطرق القديمة.'", author: "مختبر بيتا" },
      { quote: "بكيت. عرفت أشياء عني لم أخبر بها أحداً أبداً.", author: "مختبر بيتا" },
      { quote: "هذا ليس تطبيق. هذه محادثة مع شخص يراك.", author: "مختبر بيتا" },
    ],
    ctaTitle: "المكتوب — ينتظرك",
    ctaSub: "اترك بريدك الإلكتروني ومكتوبة ستتذكرك",
    footerProduct: "المنتج",
    footerLegal: "قانوني",
    footerSupport: "الدعم",
    footerPrivacy: "سياسة الخصوصية",
    footerTerms: "شروط الخدمة",
    footerEula: "EULA",
    footerDelete: "حذف البيانات",
    footerFaq: "الأسئلة الشائعة",
    footerContact: "support@maktuba.app",
    footerDisclaimer: "للترفيه والتأمل الذاتي فقط. مكتوبة لا تقدم نصائح طبية أو نفسية أو قانونية أو مالية.",
    footerCompany: "© 2026 Travi.World Ltd. (Gibraltar)",
    exitTitle: "لحظة! قبل أن تذهب...",
    exitSub: "اتركوا بريدكم الإلكتروني وسنخبركم فور توفر مكتوبة. بدون رسائل مزعجة — فقط أخبار سارة.",
    exitCta: "أعلموني",
    exitClose: "ربما لاحقاً",
    comingSoon: "قريباً",
  },
};
