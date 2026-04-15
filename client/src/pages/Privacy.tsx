import { useLang } from "@/contexts/LangContext";
import { Link } from "wouter";
import LangSwitcher from "@/components/LangSwitcher";
import { ArrowRight } from "lucide-react";
import { LOGO } from "@/lib/icons";

export default function Privacy() {
  const { t, lang } = useLang();
  const isRTL = t.dir === "rtl";

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
        <h1 className="font-display text-3xl tracking-[0.15em] text-[#d4a574] mb-4">
          {lang === "ar" ? "سياسة الخصوصية" : lang === "he" ? "מדיניות פרטיות" : "Privacy Policy"}
        </h1>
        <p className="text-sm text-[#e8dcc8]/30 mb-10">
          {lang === "ar" ? "آخر تحديث: أبريل 2026" : lang === "he" ? "עדכון אחרון: אפריל 2026" : "Last updated: April 2026"}
        </p>
        <div className="space-y-8 text-[#e8dcc8]/60 leading-relaxed">
          {lang === "he" ? (
            <>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">1. מבוא</h2>
                <p>Maktuba.App ("מכתובה", "אנחנו") מחויבת להגנה על פרטיותכם. מדיניות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלכם.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">2. מידע שאנו אוספים</h2>
                <p><strong className="text-[#e8dcc8]">מידע שאתם מספקים:</strong> תאריך לידה, שם (אופציונלי), שפה מועדפת, תמונות כף יד או כוס קפה (בהסכמה בלבד).</p>
                <p className="mt-2"><strong className="text-[#e8dcc8]">מידע אוטומטי:</strong> מזהה מכשיר, סוג מכשיר, מערכת הפעלה, נתוני שימוש אנונימיים.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">3. שימוש בתמונות</h2>
                <p>תמונות כף יד מטופלות כמידע ביומטרי. תמונות כוס קפה נשמרות עד 72 שעות. כל התמונות מוצפנות ב-AES-256. אף אדם לא צופה בתמונות — רק מערכת ה-AI.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">4. שיתוף מידע</h2>
                <p>אנחנו לא מוכרים או משתפים את המידע האישי שלכם עם צדדים שלישיים למטרות שיווקיות.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">5. יצירת קשר</h2>
                <p>לשאלות: <span className="text-[#d4a574]">info@kbr.global</span></p>
              </section>
            </>
          ) : lang === "ar" ? (
            <>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">1. مقدمة</h2>
                <p>Maktuba.App ("مكتوبة"، "نحن") ملتزمة بحماية خصوصيتكم. توضح هذه السياسة كيف نجمع ونستخدم ونحمي معلوماتكم.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">2. المعلومات التي نجمعها</h2>
                <p><strong className="text-[#e8dcc8]">معلومات تقدمونها:</strong> تاريخ الميلاد، الاسم (اختياري)، اللغة المفضلة، صور الكف أو فنجان القهوة (بموافقتكم فقط).</p>
                <p className="mt-2"><strong className="text-[#e8dcc8]">معلومات تلقائية:</strong> معرف الجهاز، نوع الجهاز، نظام التشغيل، بيانات استخدام مجهولة.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">3. استخدام الصور</h2>
                <p>صور الكف تُعامل كبيانات بيومترية. صور فنجان القهوة تُحفظ لمدة 72 ساعة. جميع الصور مشفرة بـ AES-256. لا يطلع أي شخص على الصور — فقط نظام الذكاء الاصطناعي.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">4. مشاركة المعلومات</h2>
                <p>لا نبيع أو نشارك معلوماتكم الشخصية مع أطراف ثالثة لأغراض تسويقية.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">5. اتصل بنا</h2>
                <p>للاستفسارات: <span className="text-[#d4a574]">info@kbr.global</span></p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">1. Introduction</h2>
                <p>Maktuba.App ("Maktuba", "we") is committed to protecting your privacy. This policy explains how we collect, use, and protect your information.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">2. Information We Collect</h2>
                <p><strong className="text-[#e8dcc8]">Information you provide:</strong> Date of birth, name (optional), preferred language, palm or coffee cup photos (with consent only).</p>
                <p className="mt-2"><strong className="text-[#e8dcc8]">Automatic information:</strong> Device ID, device type, operating system, anonymous usage data.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">3. Image Usage</h2>
                <p>Palm images are treated as biometric data. Coffee cup images are stored for up to 72 hours. All images are encrypted with AES-256. No human views the images — only the AI system.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">4. Information Sharing</h2>
                <p>We do not sell or share your personal information with third parties for marketing purposes.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">5. Contact Us</h2>
                <p>For inquiries: <span className="text-[#d4a574]">info@kbr.global</span></p>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
