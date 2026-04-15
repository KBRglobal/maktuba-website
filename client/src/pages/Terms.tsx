import { useLang } from "@/contexts/LangContext";
import { Link } from "wouter";
import LangSwitcher from "@/components/LangSwitcher";
import { ArrowRight } from "lucide-react";
import { LOGO } from "@/lib/icons";

export default function Terms() {
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
          {lang === "ar" ? "شروط الاستخدام" : lang === "he" ? "תנאי שימוש" : "Terms of Service"}
        </h1>
        <p className="text-sm text-[#e8dcc8]/30 mb-10">
          {lang === "ar" ? "آخر تحديث: أبريل 2026" : lang === "he" ? "עדכון אחרון: אפריל 2026" : "Last updated: April 2026"}
        </p>
        <div className="space-y-8 text-[#e8dcc8]/60 leading-relaxed">
          {lang === "he" ? (
            <>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">1. הסכמה</h2>
                <p>בשימוש באפליקציית מכתובה, אתם מסכימים לתנאי שימוש אלה. אם אינכם מסכימים, אנא אל תשתמשו באפליקציה.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">2. אופי השירות</h2>
                <p>מכתובה מספקת קריאות מיסטיות לצורכי בידור והתבוננות עצמית בלבד. אין לראות בתוכן ייעוץ מקצועי, רפואי, פסיכולוגי או פיננסי.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">3. מנויים ותשלומים</h2>
                <p>מנויים מנוהלים דרך Apple App Store או Google Play Store. ביטול מנוי נעשה דרך הגדרות החנות. החזרים כפופים למדיניות החנות הרלוונטית.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">4. קניין רוחני</h2>
                <p>כל התוכן, העיצוב, הקלפים והאלגוריתמים הם קניינה הבלעדי של Maktuba.App Ltd.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">5. יצירת קשר</h2>
                <p>לשאלות: <span className="text-[#d4a574]">info@kbr.global</span></p>
                <p className="mt-2">Maktuba.App Ltd. | Gibraltar</p>
              </section>
            </>
          ) : lang === "ar" ? (
            <>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">1. الموافقة</h2>
                <p>باستخدام تطبيق مكتوبة، فإنكم توافقون على شروط الاستخدام هذه. إذا لم توافقوا، يرجى عدم استخدام التطبيق.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">2. طبيعة الخدمة</h2>
                <p>مكتوبة تقدم قراءات روحانية لأغراض الترفيه والتأمل الذاتي فقط. لا ينبغي اعتبار المحتوى نصيحة مهنية أو طبية أو نفسية أو مالية.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">3. الاشتراكات والمدفوعات</h2>
                <p>تُدار الاشتراكات عبر Apple App Store أو Google Play Store. يتم الإلغاء عبر إعدادات المتجر. تخضع المبالغ المستردة لسياسة المتجر المعني.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">4. الملكية الفكرية</h2>
                <p>جميع المحتويات والتصاميم والبطاقات والخوارزميات هي ملكية حصرية لشركة Maktuba.App Ltd.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">5. اتصل بنا</h2>
                <p>للاستفسارات: <span className="text-[#d4a574]">info@kbr.global</span></p>
                <p className="mt-2">Maktuba.App Ltd. | Gibraltar</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">1. Agreement</h2>
                <p>By using the Maktuba app, you agree to these Terms of Service. If you do not agree, please do not use the app.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">2. Nature of Service</h2>
                <p>Maktuba provides mystical readings for entertainment and self-reflection purposes only. Content should not be considered professional, medical, psychological, or financial advice.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">3. Subscriptions & Payments</h2>
                <p>Subscriptions are managed through the Apple App Store or Google Play Store. Cancellation is done through store settings. Refunds are subject to the relevant store's policy.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">4. Intellectual Property</h2>
                <p>All content, designs, cards, and algorithms are the exclusive property of Maktuba.App Ltd.</p>
              </section>
              <section>
                <h2 className="font-display text-xl text-[#d4a574]/80 mb-3">5. Contact Us</h2>
                <p>For inquiries: <span className="text-[#d4a574]">info@kbr.global</span></p>
                <p className="mt-2">Maktuba.App Ltd. | Gibraltar</p>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
