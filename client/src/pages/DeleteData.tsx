import { useLang } from "@/contexts/LangContext";
import { Link } from "wouter";
import LangSwitcher from "@/components/LangSwitcher";
import { ArrowRight } from "lucide-react";
import { LOGO } from "@/lib/icons";

export default function DeleteData() {
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
        <h1 className="font-display text-3xl tracking-[0.15em] text-[#d4a574] mb-10">
          {lang === "ar" ? "حذف البيانات" : lang === "he" ? "מחיקת מידע" : "Delete Your Data"}
        </h1>
        <div className="space-y-6 text-[#e8dcc8]/60 leading-relaxed">
          {lang === "he" ? (
            <>
              <p>אנחנו מכבדים את הפרטיות שלך. אם ברצונך למחוק את כל המידע שלך מהמערכת, אנא שלח/י בקשה לכתובת:</p>
              <p className="text-[#d4a574]">info@kbr.global</p>
              <p>נושא ההודעה: "בקשה למחיקת מידע"</p>
              <p>אנא כלול/י את כתובת האימייל שבה נרשמת לאפליקציה. המידע שלך יימחק תוך 30 יום מקבלת הבקשה.</p>
              <p>לאחר מחיקת המידע, לא נוכל לשחזר את הנתונים שלך, כולל היסטוריית קריאות, הגדרות אישיות, ומנוי פעיל.</p>
            </>
          ) : lang === "ar" ? (
            <>
              <p>نحن نحترم خصوصيتك. إذا كنت ترغب في حذف جميع بياناتك من نظامنا، يرجى إرسال طلب إلى:</p>
              <p className="text-[#d4a574]">info@kbr.global</p>
              <p>عنوان الرسالة: "طلب حذف البيانات"</p>
              <p>يرجى تضمين عنوان البريد الإلكتروني الذي سجلت به في التطبيق. سيتم حذف بياناتك خلال 30 يومًا من استلام الطلب.</p>
              <p>بعد حذف البيانات، لن نتمكن من استعادة بياناتك، بما في ذلك سجل القراءات والإعدادات الشخصية والاشتراك النشط.</p>
            </>
          ) : (
            <>
              <p>We respect your privacy. If you would like to delete all your data from our system, please send a request to:</p>
              <p className="text-[#d4a574]">info@kbr.global</p>
              <p>Subject: "Data Deletion Request"</p>
              <p>Please include the email address you used to register in the app. Your data will be deleted within 30 days of receiving the request.</p>
              <p>After deletion, we will not be able to recover your data, including reading history, personal settings, and active subscriptions.</p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
