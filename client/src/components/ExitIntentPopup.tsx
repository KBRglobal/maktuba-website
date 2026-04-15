import { useState, useEffect, useCallback } from "react";
import { useLang } from "@/contexts/LangContext";
import { trpc } from "@/lib/trpc";
import { LOGO } from "@/lib/icons";
import { Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "maktuba-exit-shown";

export default function ExitIntentPopup() {
  const { t, lang } = useLang();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const subscribeMutation = trpc.subscribe.email.useMutation();

  const handleShow = useCallback(() => {
    // Only show once per session
    if (sessionStorage.getItem(SESSION_KEY)) return;
    // Don't show if user already submitted email from hero/cta
    if (sessionStorage.getItem("maktuba-email-submitted")) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setShow(true);
  }, []);

  useEffect(() => {
    // Desktop: mouse leaves viewport from the top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        handleShow();
      }
    };

    // Mobile: scroll up quickly (back-to-top gesture) after scrolling down significantly
    let lastScrollY = 0;
    let maxScrollY = 0;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > maxScrollY) maxScrollY = currentY;
      // If user scrolled at least 30% of page and then scrolls back up significantly
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScrollY > pageHeight * 0.3 && currentY < maxScrollY * 0.3 && lastScrollY > currentY) {
        handleShow();
      }
      lastScrollY = currentY;
    };

    // Delay adding listeners so popup doesn't fire immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleShow]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    subscribeMutation.mutate({ email, lang, source: "exit-intent" });
    setSubmitted(true);
    setTimeout(() => setShow(false), 2500);
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            onClick={() => setShow(false)}
          />
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
            dir={t.dir}
          >
            <div className="relative w-full max-w-md pointer-events-auto bg-[#0e0a18] border border-[#d4a574]/30 shadow-[0_0_80px_rgba(212,165,116,0.15)] overflow-hidden">
              {/* Gold accent line at top */}
              <div className="h-0.5 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent" />

              {/* Close button */}
              <button
                onClick={() => setShow(false)}
                className="absolute top-3 end-3 w-8 h-8 flex items-center justify-center text-[#e8dcc8]/40 hover:text-[#e8dcc8] transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="p-8 text-center">
                {/* Logo */}
                <img
                  src={LOGO.icon}
                  alt="Maktuba"
                  className="h-12 w-auto mx-auto mb-6 drop-shadow-[0_0_15px_rgba(212,165,116,0.4)]"
                />

                {/* Decorative stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="w-1.5 h-1.5 bg-[#d4a574]/60 rotate-45"
                    />
                  ))}
                </div>

                <h2
                  className="font-display text-2xl sm:text-3xl tracking-wider text-[#d4a574] mb-3"
                  style={{ fontFamily: "'Playfair Display', 'Heebo', serif" }}
                >
                  {t.exitTitle}
                </h2>
                <p className="text-sm text-[#e8dcc8]/60 leading-relaxed mb-8 max-w-sm mx-auto">
                  {t.exitSub}
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-[#d4a574] py-3"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span className="font-medium">{t.heroSuccess}</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.heroPlaceholder}
                      dir="ltr"
                      autoFocus
                      className="w-full px-4 py-3 bg-[#1a1520] border border-[#d4a574]/30 text-[#e8dcc8] placeholder-[#e8dcc8]/30 focus:outline-none focus:border-[#d4a574] transition-colors text-center"
                    />
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-[#d4a574] text-[#0a0612] font-semibold tracking-wider hover:bg-[#c4955a] transition-colors flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      {t.exitCta}
                    </button>
                  </form>
                )}

                {!submitted && (
                  <button
                    onClick={() => setShow(false)}
                    className="mt-4 text-xs text-[#e8dcc8]/30 hover:text-[#e8dcc8]/50 transition-colors"
                  >
                    {t.exitClose}
                  </button>
                )}
              </div>

              {/* Gold accent line at bottom */}
              <div className="h-0.5 bg-gradient-to-r from-transparent via-[#d4a574]/50 to-transparent" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
