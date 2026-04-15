import { useLang } from "@/contexts/LangContext";
import { Link } from "wouter";
import LangSwitcher from "@/components/LangSwitcher";
import { ArrowRight, Mail } from "lucide-react";
import { LOGO } from "@/lib/icons";

export default function Support() {
  const { t, lang } = useLang();
  const isRTL = t.dir === "rtl";

  const faqs = lang === "he" ? [
    { q: "מתי האפליקציה יוצאת?", a: "האפליקציה נמצאת בשלבי פיתוח אחרונים. השאירו מייל בתחתית האתר ונעדכן אתכם ברגע שהאפליקציה זמינה להורדה." },
    { q: "האם הקריאות אמיתיות?", a: "הקריאות מבוססות על AI ומסורות מיסטיות עתיקות. הן מיועדות לבידור והתבוננות עצמית בלבד." },
    { q: "האם התמונות שלי בטוחות?", a: "כן. כל התמונות מוצפנות, נתוני EXIF מוסרים, ואף אדם לא צופה בהן — רק מערכת ה-AI." },
    { q: "איך אפשר ליצור קשר?", a: "שלחו לנו מייל ל-info@kbr.global ונחזור אליכם בהקדם." },
  ] : lang === "ar" ? [
    { q: "متى سيتم إطلاق التطبيق؟", a: "التطبيق في مراحله الأخيرة من التطوير. اترك بريدك الإلكتروني في أسفل الموقع وسنبلغك فور الإطلاق." },
    { q: "هل القراءات حقيقية؟", a: "القراءات مبنية على الذكاء الاصطناعي والتقاليد الروحانية القديمة. وهي مخصصة للترفيه والتأمل الذاتي فقط." },
    { q: "هل صوري آمنة؟", a: "نعم. جميع الصور مشفرة، ويتم إزالة بيانات EXIF، ولا يطلع عليها أي شخص — فقط نظام الذكاء الاصطناعي." },
    { q: "كيف أتواصل معكم؟", a: "أرسل لنا بريدًا إلكترونيًا على info@kbr.global وسنرد عليك في أقرب وقت." },
  ] : [
    { q: "When will the app launch?", a: "The app is in the final stages of development. Leave your email at the bottom of the site and we'll notify you as soon as it's available for download." },
    { q: "Are the readings real?", a: "Readings are powered by AI and ancient mystical traditions. They are intended for entertainment and self-reflection only." },
    { q: "Are my photos safe?", a: "Yes. All photos are encrypted, EXIF data is removed, and no human views them — only the AI system." },
    { q: "How can I contact you?", a: "Send us an email at info@kbr.global and we'll get back to you as soon as possible." },
  ];

  return (
    <div className="min-h-screen bg-[#0a0612] text-[#e8dcc8]" style={{ fontFamily: t.fontBody }} dir={t.dir}>
      <nav className="border-b border-[#d4a574]/10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/"><img src={LOGO.icon} alt="MAKTUBA" className="h-8 w-auto" /></Link>
          <LangSwitcher />
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-[#d4a574]/60 hover:text-[#d4a574] text-sm mb-10 transition-colors">
          <ArrowRight className={`w-4 h-4 ${isRTL ? "" : "rotate-180"}`} />
          {lang === "ar" ? "الرئيسية" : lang === "he" ? "חזרה" : "Back"}
        </Link>
        <h1 className="font-display text-3xl tracking-[0.15em] text-[#d4a574] mb-10">
          {lang === "ar" ? "الدعم" : lang === "he" ? "תמיכה" : "Support"}
        </h1>

        {/* Contact */}
        <div className="border border-[#d4a574]/15 p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-5 h-5 text-[#d4a574]/60" />
            <h2 className="font-display text-xl text-[#d4a574]/80">
              {lang === "ar" ? "تواصل معنا" : lang === "he" ? "צרו קשר" : "Contact Us"}
            </h2>
          </div>
          <p className="text-[#e8dcc8]/60 mb-4">
            {lang === "ar" ? "نحن هنا للمساعدة. لأي سؤال أو مشكلة:" : lang === "he" ? "אנחנו כאן כדי לעזור. לכל שאלה או בעיה:" : "We're here to help. For any question or issue:"}
          </p>
          <a href="mailto:info@kbr.global" className="text-[#d4a574] hover:text-[#D4B87A] transition-colors">
            info@kbr.global
          </a>
        </div>

        {/* FAQ */}
        <h2 className="font-display text-2xl text-[#d4a574]/80 mb-8">
          {lang === "ar" ? "الأسئلة الشائعة" : lang === "he" ? "שאלות נפוצות" : "FAQ"}
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#d4a574]/10 p-6">
              <h3 className="text-[#e8dcc8] font-medium mb-2">{faq.q}</h3>
              <p className="text-sm text-[#e8dcc8]/50 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
