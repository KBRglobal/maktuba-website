import { useLang } from "@/contexts/LangContext";
import { LOGO, CHARACTER, COFFEE, TAROT, PALM, ATMOSPHERE, APP_SCREENS } from "@/lib/icons";
import { motion } from "framer-motion";
import { Link } from "wouter";
import LangSwitcher from "@/components/LangSwitcher";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { useState, useEffect, useRef } from "react";
import { trpc } from "@/lib/trpc";
import {
  ChevronDown,
  Star,
  Sparkles,
  Eye,
  Heart,
  Camera,
  Wand2,
  BookOpen,
  Key,
  ShieldCheck,
  Check,
  ArrowRight,
  Mail,
  Instagram,
  Quote,
} from "lucide-react";

/* ─── animations ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0, 0, 0.2, 1] as const },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

/* ─── star field canvas ─── */
function StarField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    const stars: { x: number; y: number; r: number; a: number; s: number }[] = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random(),
        s: Math.random() * 0.005 + 0.002,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.a += s.s;
        const alpha = 0.15 + 0.35 * Math.abs(Math.sin(s.a));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,165,116,${alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="fixed inset-0 pointer-events-none z-0" />;
}

/* ─── Phone Mockup ─── */
function PhoneMockup({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-[2.5rem] border-[3px] border-[#d4a574]/30 bg-[#1a1520] p-2 shadow-[0_0_60px_rgba(212,165,116,0.15)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1520] rounded-b-2xl z-10" />
        <img
          src={src}
          alt="App screen"
          className="rounded-[2rem] w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function Home() {
  const { t, lang } = useLang();
  const isRTL = t.dir === "rtl";
  const fontClass = lang === "ar" ? "font-arabic" : lang === "he" ? "font-hebrew" : "font-display";
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [ctaEmail, setCtaEmail] = useState("");
  const [ctaSubmitted, setCtaSubmitted] = useState(false);

  const subscribeMutation = trpc.subscribe.email.useMutation({
    onSuccess: () => {},
  });

  const handleEmailSubmit = (e: React.FormEvent, which: "hero" | "cta") => {
    e.preventDefault();
    const val = which === "hero" ? email : ctaEmail;
    if (!val || !val.includes("@")) return;
    subscribeMutation.mutate({ email: val, lang, source: which });
    if (which === "hero") setEmailSubmitted(true);
    else setCtaSubmitted(true);
    // Signal to ExitIntentPopup that user already subscribed
    sessionStorage.setItem("maktuba-email-submitted", "1");
  };

  // Reading images for the 7 readings
  const readingImages = [
    COFFEE.theCoffee,
    TAROT.theCards,
    PALM.thePalm,
    ATMOSPHERE.crystalsCloseup,
    CHARACTER.theReading,
    CHARACTER.readingBook,
    CHARACTER.dailyWisdom,
  ];

  return (
    <div
      className={`min-h-screen bg-[#0a0612] text-[#e8dcc8] overflow-x-hidden ${fontClass}`}
      style={{ fontFamily: t.fontBody }}
      dir={t.dir}
    >
      <StarField />
      <ExitIntentPopup />

      {/* ═══════════════ NAV ═══════════════ */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#0a0612]/80 backdrop-blur-md border-b border-[#d4a574]/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <img
            src={LOGO.icon}
            alt="MAKTUBA"
            className="h-8 sm:h-10 w-auto drop-shadow-[0_0_8px_rgba(212,165,116,0.3)]"
          />
          <div className="flex items-center gap-3 sm:gap-6">
            <LangSwitcher />
            <span className="hidden sm:inline-block px-4 py-1.5 border border-[#d4a574]/30 text-[#d4a574]/60 text-xs tracking-[0.2em] uppercase">
              {t.comingSoon}
            </span>
          </div>
        </div>
      </nav>

      {/* ═══════════════ 1. HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${CHARACTER.heroWide})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0612]/70 via-[#0a0612]/50 to-[#0a0612]" />

        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <div className="text-center lg:text-start">
            <motion.img
              src={LOGO.full}
              alt="MAKTUBA"
              variants={fadeUp}
              custom={0}
              className="h-24 sm:h-36 w-auto mx-auto lg:mx-0 mb-6 drop-shadow-[0_0_20px_rgba(212,165,116,0.4)]"
            />
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl sm:text-5xl tracking-[0.08em] text-[#d4a574] mb-6 leading-tight"
            >
              {t.heroTagline}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base sm:text-lg text-[#e8dcc8]/70 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {t.heroSub}
            </motion.p>

            {/* Email capture */}
            <motion.form
              variants={fadeUp}
              custom={3}
              onSubmit={(e) => handleEmailSubmit(e, "hero")}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
            >
              {emailSubmitted ? (
                <div className="flex items-center gap-2 text-[#d4a574]">
                  <Sparkles className="w-5 h-5" />
                  <span>{t.heroSuccess}</span>
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.heroPlaceholder}
                    dir="ltr"
                    className="flex-1 px-4 py-3 bg-[#1a1520] border border-[#d4a574]/30 text-[#e8dcc8] placeholder-[#e8dcc8]/30 rounded-none focus:outline-none focus:border-[#d4a574] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#d4a574] text-[#0a0612] font-semibold tracking-wider hover:bg-[#c4955a] transition-colors whitespace-nowrap"
                  >
                    {t.heroNotify}
                  </button>
                </>
              )}
            </motion.form>

            <motion.p variants={fadeUp} custom={4} className="mt-4 text-sm text-[#e8dcc8]/40">
              {t.heroTools}
            </motion.p>
          </div>

          {/* Phone mockup */}
          <motion.div variants={fadeUp} custom={2} className="hidden lg:flex justify-center">
            <PhoneMockup src={APP_SCREENS.home} className="w-64" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-[#d4a574]/30 animate-bounce" />
        </motion.div>
      </section>

      {/* ═══════════════ 2. WHO IS MAKTUBA ═══════════════ */}
      <section className="py-28 px-6 relative">
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} custom={0} className="order-2 lg:order-1">
            <img
              src={CHARACTER.theWelcome}
              alt="Maktuba"
              className="w-full max-w-md mx-auto rounded-sm shadow-[0_0_60px_rgba(212,165,116,0.1)]"
              loading="lazy"
            />
          </motion.div>
          <div className="order-1 lg:order-2">
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl sm:text-4xl tracking-[0.12em] text-[#d4a574] mb-8"
            >
              {t.whoTitle}
            </motion.h2>
            <motion.div variants={fadeUp} custom={2}>
              {t.whoText.split("\n\n").map((p, i) => (
                <p key={i} className="text-[#e8dcc8]/70 leading-relaxed mb-4 text-base">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ 3. DEEP READINGS ═══════════════ */}
      <section className="py-28 px-6 bg-[#0e0a18]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-display text-3xl sm:text-4xl tracking-[0.12em] text-[#d4a574] mb-4"
            >
              {t.readingsTitle}
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-[#e8dcc8]/50 max-w-lg mx-auto">
              {t.readingsSub}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {t.readings.map((r, i: number) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="group relative border border-[#d4a574]/15 bg-[#0a0612]/60 overflow-hidden hover:border-[#d4a574]/40 transition-all duration-500"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={readingImages[i]}
                    alt={r.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg tracking-wider text-[#d4a574] mb-2">
                    {r.name}
                  </h3>
                  <p className="text-sm text-[#e8dcc8]/50 leading-relaxed mb-4">{r.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-[#d4a574]/50">
                      <Key className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {r.cost} {t.readingKeys}
                    </span>
                  </div>
                </div>
                <div className="absolute top-3 end-3 text-[#d4a574]/10 font-display text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ 4. FREE TOOLS ═══════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-display text-3xl sm:text-4xl tracking-[0.12em] text-[#d4a574] mb-4"
            >
              {t.freeTitle}
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-[#e8dcc8]/50 max-w-lg mx-auto">
              {t.freeSub}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {t.freeTools.map((f, i: number) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="group flex items-start gap-3 p-4 border border-[#d4a574]/8 hover:border-[#d4a574]/25 transition-all duration-500 bg-[#0a0612]/30"
              >
                <div>
                  <h3 className="text-[#d4a574] text-sm font-medium mb-0.5">{f.name}</h3>
                  <p className="text-xs text-[#e8dcc8]/40 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ 5. HOW IT WORKS ═══════════════ */}
      <section className="py-28 px-6 bg-[#0e0a18]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-display text-3xl sm:text-4xl tracking-[0.12em] text-[#d4a574] text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t.howTitle}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.howSteps.map((s, i: number) => {
              const icons = [Camera, Sparkles, Heart];
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.7 }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 border border-[#d4a574]/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#d4a574]/60" strokeWidth={1.5} />
                  </div>
                  <span className="text-[#d4a574]/20 font-display text-sm tracking-[0.3em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl tracking-wider text-[#d4a574] mt-2 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#e8dcc8]/50">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ 6. SAMPLE READING ═══════════════ */}
      <section className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-display text-3xl sm:text-4xl tracking-[0.12em] text-[#d4a574] mb-4"
            >
              {t.sampleTitle}
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-[#e8dcc8]/50 max-w-lg mx-auto">
              {t.sampleSub}
            </motion.p>
          </motion.div>

          <motion.div
            className="relative border border-[#d4a574]/20 bg-[#0e0a18]/80 p-8 sm:p-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <img
                src={COFFEE.studyingCup}
                alt="Coffee cup"
                className="w-16 h-16 rounded-full object-cover border border-[#d4a574]/30"
                loading="lazy"
              />
              <div>
                <h3 className="text-[#d4a574] font-display tracking-wider">☕ Coffee Cup Reading</h3>
                <p className="text-xs text-[#e8dcc8]/40">Sample • 3 min read</p>
              </div>
            </div>

            <div className="space-y-4 text-[#e8dcc8]/60 text-sm leading-relaxed">
              <p className="italic text-[#d4a574]/80">
                "I see a bird near the rim of your cup — a journey is coming. Not one you planned, but one that was written for you long ago..."
              </p>
              <p>
                The grounds form a clear path from the bottom to the rim. This is the road of transformation. Near the handle — your home — I see a tree with deep roots. Your family gives you strength, even when you don't feel it.
              </p>
              <p>
                There is a circle near the center. A decision is forming. Don't rush it. The coffee says: what needs to come will come when you stop pushing...
              </p>
            </div>

            {/* Blur overlay */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0e0a18] to-transparent flex items-end justify-center pb-8">
              <button className="px-8 py-3 bg-[#d4a574] text-[#0a0612] font-semibold tracking-wider hover:bg-[#c4955a] transition-colors">
                {t.sampleCta}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ 7. KEYS SYSTEM ═══════════════ */}
      <section className="py-28 px-6 bg-[#0e0a18]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} custom={0} className="w-14 h-14 mx-auto mb-6 border border-[#d4a574]/20 flex items-center justify-center">
              <Key className="w-7 h-7 text-[#d4a574]/60" strokeWidth={1.5} />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl sm:text-4xl tracking-[0.12em] text-[#d4a574] mb-4"
            >
              {t.keysTitle}
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-[#e8dcc8]/50 max-w-lg mx-auto">
              {t.keysSub}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {[
              { title: t.keysWhat, desc: t.keysWhatDesc, icon: Key },
              { title: t.keysNoExpiry, desc: t.keysNoExpiryDesc, icon: ShieldCheck },
              { title: t.keysWelcome, desc: t.keysWelcomeDesc, icon: Sparkles },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="text-center p-6 border border-[#d4a574]/10"
              >
                <item.icon className="w-8 h-8 text-[#d4a574]/60 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-[#d4a574] font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-[#e8dcc8]/40">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Cost table */}
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-center text-[#d4a574] font-display tracking-wider mb-6">
              {t.keysTable}
            </h3>
            <div className="border border-[#d4a574]/15">
              {t.readings.map((r, i: number) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-4 py-3 ${i < t.readings.length - 1 ? "border-b border-[#d4a574]/10" : ""}`}
                >
                  <span className="text-sm text-[#e8dcc8]/60">{r.name}</span>
                  <span className="text-sm text-[#d4a574] flex items-center gap-1">
                    <Key className="w-3 h-3" /> {r.cost}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ 8. PRICING ═══════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-display text-3xl sm:text-4xl tracking-[0.12em] text-[#d4a574] text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.pricingTitle}
          </motion.h2>
          <motion.p
            className="text-center text-[#e8dcc8]/50 max-w-xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.pricingSub}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free */}
            <motion.div
              className="border border-[#d4a574]/15 p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-[#d4a574] mb-2">{t.pricingFreeLabel}</h3>
              <p className="text-3xl font-bold text-[#e8dcc8] mb-6">{t.pricingFreePrice}</p>
              <ul className="space-y-3">
                {t.pricingFreeFeatures.map((f, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#e8dcc8]/60">
                    <Check className="w-4 h-4 text-[#d4a574]/60 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Premium — 3 plan tiers stacked */}
            <motion.div
              className="border-2 border-[#d4a574]/40 p-8 relative bg-[#d4a574]/5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -top-3 start-6 px-3 py-1 bg-[#d4a574] text-[#0a0612] text-xs font-bold tracking-wider">
                {t.pricingAnnualBadge}
              </div>
              <h3 className="font-display text-2xl text-[#d4a574] mb-4">{t.pricingPremiumLabel}</h3>

              {/* 3 plan tiers */}
              <div className="space-y-2 mb-6 border border-[#d4a574]/15 divide-y divide-[#d4a574]/10">
                {[
                  { label: t.pricingWeekly,  price: t.pricingWeeklyPrice,  keys: t.pricingWeeklyKeys },
                  { label: t.pricingMonthly, price: t.pricingMonthlyPrice, keys: t.pricingMonthlyKeys },
                  { label: t.pricingAnnual,  price: t.pricingAnnualPrice,  keys: t.pricingAnnualKeys, best: true },
                ].map((plan, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-4 py-3 ${plan.best ? "bg-[#d4a574]/10" : ""}`}
                  >
                    <div>
                      <p className="text-sm font-medium text-[#e8dcc8]">{plan.label}</p>
                      <p className="text-xs text-[#d4a574]/70 flex items-center gap-1 mt-0.5">
                        <Key className="w-3 h-3" /> {plan.keys}
                      </p>
                    </div>
                    <span className="text-lg font-bold text-[#d4a574]">{plan.price}</span>
                  </div>
                ))}
              </div>

              <ul className="space-y-3 mb-6">
                {t.pricingPremiumFeatures.map((f, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#e8dcc8]/70">
                    <Check className="w-4 h-4 text-[#d4a574] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center text-xs text-[#d4a574]/60">{t.pricingTrial}</p>
            </motion.div>
          </div>

          {/* Key Packs */}
          <motion.div
            className="mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-center font-display text-xl text-[#d4a574] tracking-wider mb-2">
              {t.keyPacksTitle}
            </h3>
            <p className="text-center text-sm text-[#e8dcc8]/40 mb-8">{t.keyPacksSub}</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {t.keyPacks.map((p, i: number) => (
                <div
                  key={i}
                  className={`relative text-center p-5 border transition-colors ${
                    p.badge
                      ? "border-[#d4a574]/40 bg-[#d4a574]/5 hover:border-[#d4a574]/60"
                      : "border-[#d4a574]/15 hover:border-[#d4a574]/30"
                  }`}
                >
                  {p.badge && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#d4a574] text-[#0a0612] text-[10px] font-bold tracking-wider whitespace-nowrap">
                      {p.badge}
                    </div>
                  )}
                  <h4 className="font-display text-[#d4a574] text-base tracking-wider mb-2">
                    {p.name}
                  </h4>
                  <div className="flex items-center justify-center gap-1 text-[#d4a574]/80 mb-1">
                    <Key className="w-3.5 h-3.5" />
                    <span className="text-lg font-semibold">{p.keys}</span>
                  </div>
                  <p className="text-lg font-bold text-[#e8dcc8] mb-2">{p.priceNIS}</p>
                  <p className="text-[11px] text-[#e8dcc8]/40 leading-tight">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ 9. APP PREVIEW ═══════════════ */}
      <section className="py-28 px-6 bg-[#0e0a18]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-display text-3xl sm:text-4xl tracking-[0.12em] text-[#d4a574] text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {lang === "he" ? "הצצה לאפליקציה" : lang === "ar" ? "نظرة على التطبيق" : "A Glimpse of the App"}
          </motion.h2>
          <div className="flex justify-center items-end gap-6 sm:gap-10">
            <PhoneMockup src={APP_SCREENS.screenshot1} className="w-44 sm:w-52 opacity-80" />
            <PhoneMockup src={APP_SCREENS.home} className="w-52 sm:w-64 scale-105 z-10" />
            <PhoneMockup src={APP_SCREENS.readingComplete} className="w-44 sm:w-52 opacity-80" />
          </div>
        </div>
      </section>

      {/* ═══════════════ 10. TESTIMONIALS ═══════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-display text-3xl sm:text-4xl tracking-[0.12em] text-[#d4a574] text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.testimonialsTitle}
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {t.testimonials.map((test, i: number) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="border border-[#d4a574]/15 p-6 relative"
              >
                <Quote className="w-8 h-8 text-[#d4a574]/15 absolute top-4 end-4" />
                <p className="text-[#e8dcc8]/70 text-sm leading-relaxed mb-4 italic">
                  "{test.quote}"
                </p>
                <p className="text-xs text-[#d4a574]/50">— {test.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ 11. FINAL CTA ═══════════════ */}
      <section className="py-28 px-6 bg-[#0e0a18] relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${CHARACTER.silhouette})` }}
        />
        <motion.div
          className="relative z-10 max-w-xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.img
            src={LOGO.icon}
            alt="MAKTUBA"
            variants={fadeUp}
            custom={0}
            className="h-16 w-auto mx-auto mb-8 drop-shadow-[0_0_15px_rgba(212,165,116,0.3)]" style={{ filter: 'brightness(1.3) sepia(0.3) hue-rotate(-10deg)' }}
          />
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-3xl sm:text-4xl tracking-[0.12em] text-[#d4a574] mb-4"
          >
            {t.ctaTitle}
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-[#e8dcc8]/50 mb-8">
            {t.ctaSub}
          </motion.p>

          <motion.form
            variants={fadeUp}
            custom={3}
            onSubmit={(e) => handleEmailSubmit(e, "cta")}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            {ctaSubmitted ? (
              <div className="flex items-center gap-2 text-[#d4a574] mx-auto">
                <Sparkles className="w-5 h-5" />
                <span>{t.heroSuccess}</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={ctaEmail}
                  onChange={(e) => setCtaEmail(e.target.value)}
                  placeholder={t.heroPlaceholder}
                  dir="ltr"
                  className="flex-1 px-4 py-3 bg-[#1a1520] border border-[#d4a574]/30 text-[#e8dcc8] placeholder-[#e8dcc8]/30 focus:outline-none focus:border-[#d4a574] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#d4a574] text-[#0a0612] font-semibold tracking-wider hover:bg-[#c4955a] transition-colors"
                >
                  {t.heroNotify}
                </button>
              </>
            )}
          </motion.form>
        </motion.div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="py-16 px-6 border-t border-[#d4a574]/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">
            <div>
              <img src={LOGO.icon} alt="MAKTUBA" className="h-8 mb-4 opacity-60" />
              <p className="text-xs text-[#e8dcc8]/30 leading-relaxed">
                {t.footerDisclaimer}
              </p>
            </div>
            <div>
              <h4 className="text-[#d4a574]/60 text-xs tracking-[0.2em] uppercase mb-4">
                {t.footerLegal}
              </h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-[#e8dcc8]/40 hover:text-[#d4a574] transition-colors">{t.footerPrivacy}</Link></li>
                <li><Link href="/terms" className="text-sm text-[#e8dcc8]/40 hover:text-[#d4a574] transition-colors">{t.footerTerms}</Link></li>
                <li><Link href="/eula" className="text-sm text-[#e8dcc8]/40 hover:text-[#d4a574] transition-colors">{t.footerEula}</Link></li>
                <li><Link href="/delete-data" className="text-sm text-[#e8dcc8]/40 hover:text-[#d4a574] transition-colors">{t.footerDelete}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#d4a574]/60 text-xs tracking-[0.2em] uppercase mb-4">
                {t.footerSupport}
              </h4>
              <ul className="space-y-2">
                <li><Link href="/support" className="text-sm text-[#e8dcc8]/40 hover:text-[#d4a574] transition-colors">{t.footerFaq}</Link></li>
                <li>
                  <a href={`mailto:${t.footerContact}`} className="text-sm text-[#e8dcc8]/40 hover:text-[#d4a574] transition-colors flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> {t.footerContact}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#d4a574]/10 text-center text-xs text-[#e8dcc8]/20">
            {t.footerCompany}
          </div>
        </div>
      </footer>
    </div>
  );
}
