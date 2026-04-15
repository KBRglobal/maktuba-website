import { useState } from "react";
import { useRoute } from "wouter";
import { trpc } from "@/lib/trpc";
import { LOGO } from "@/lib/icons";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, Loader2 } from "lucide-react";

export default function ReadingPage() {
  const [, params] = useRoute("/r/:slug");
  const slug = params?.slug ?? "";
  const [password, setPassword] = useState("");
  const [content, setContent] = useState<{
    title: string;
    recipientName: string;
    content: string;
  } | null>(null);
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const { data: readingInfo, isLoading: checkLoading } = trpc.reading.check.useQuery(
    { slug },
    { enabled: !!slug }
  );

  const accessMutation = trpc.reading.access.useMutation({
    onSuccess: (data) => {
      setContent(data);
      setUnlocked(true);
      setError("");
    },
    onError: (err) => {
      setError(err.message || "שגיאה בגישה לקריאה");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    setError("");
    accessMutation.mutate({ slug, password });
  };

  // Loading state
  if (checkLoading) {
    return (
      <div className="min-h-screen bg-[#0A0908] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#C9A96E] animate-spin" />
      </div>
    );
  }

  // Reading not found
  if (!readingInfo?.exists) {
    return (
      <div className="min-h-screen bg-[#0A0908] flex items-center justify-center px-6" dir="rtl">
        <div className="text-center">
          <img src={LOGO.icon} alt="MAKTUBA" className="h-16 w-auto mx-auto mb-8 opacity-50" />
          <h1 className="font-serif text-2xl text-[#C9A96E]/60 mb-4">הקריאה לא נמצאה</h1>
          <p className="text-[#E8DCC8]/30 text-sm">
            ייתכן שהקריאה כבר נצפתה ונמחקה, או שהקישור אינו תקין.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0908] text-[#E8DCC8]" dir="rtl">
      {/* Decorative background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C9A96E]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C9A96E]/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
        {/* Logo */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={LOGO.full}
            alt="MAKTUBA"
            className="h-20 w-auto mx-auto mb-4 drop-shadow-[0_0_15px_rgba(201,169,110,0.3)]"
          />
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent mx-auto" />
        </motion.div>

        <AnimatePresence mode="wait">
          {!unlocked ? (
            /* ═══════════ PASSWORD GATE ═══════════ */
            <motion.div
              key="gate"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto"
            >
              {/* Ornate card frame */}
              <div className="relative border border-[#C9A96E]/20 bg-[#0A0908]/80 backdrop-blur-sm p-10">
                {/* Corner ornaments */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C9A96E]/40" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#C9A96E]/40" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#C9A96E]/40" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C9A96E]/40" />

                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-6 border border-[#C9A96E]/20 rounded-full flex items-center justify-center">
                    <Lock className="w-7 h-7 text-[#C9A96E]/60" strokeWidth={1.5} />
                  </div>
                  <h1 className="font-serif text-xl text-[#C9A96E] mb-2">
                    קריאה אישית
                  </h1>
                  <p className="text-sm text-[#E8DCC8]/40">
                    עבור <span className="text-[#C9A96E]/70">{readingInfo.recipientName}</span>
                  </p>
                  <p className="text-xs text-[#E8DCC8]/25 mt-2">
                    {readingInfo.title}
                  </p>
                </div>

                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent mx-auto mb-8" />

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs text-[#C9A96E]/50 mb-2 tracking-wider uppercase">
                      הכניסי את הסיסמה שקיבלת
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="· · · · · ·"
                      className="w-full px-5 py-3.5 bg-[#0A0908]/60 border border-[#C9A96E]/20 text-[#E8DCC8] text-center text-lg tracking-[0.3em] placeholder:text-[#E8DCC8]/15 focus:outline-none focus:border-[#C9A96E]/50 transition-colors"
                      autoFocus
                    />
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400/80 text-sm text-center"
                    >
                      {error}
                    </motion.p>
                  )}

                  <button
                    type="submit"
                    disabled={accessMutation.isPending || !password.trim()}
                    className="w-full py-3.5 bg-[#C9A96E]/10 border border-[#C9A96E]/30 text-[#C9A96E] text-sm tracking-[0.2em] uppercase hover:bg-[#C9A96E]/20 hover:border-[#C9A96E]/50 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {accessMutation.isPending ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Eye className="w-4 h-4" strokeWidth={1.5} />
                        גלי את הקריאה
                      </>
                    )}
                  </button>
                </form>

                <p className="text-center text-[10px] text-[#E8DCC8]/15 mt-6">
                  קריאה זו תהיה זמינה לצפייה חד-פעמית בלבד
                </p>
              </div>
            </motion.div>
          ) : (
            /* ═══════════ READING CONTENT ═══════════ */
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Title card */}
              <div className="text-center mb-12">
                <h1 className="font-serif text-2xl sm:text-3xl text-[#C9A96E] mb-2">
                  {content?.title}
                </h1>
                <p className="text-sm text-[#E8DCC8]/40">
                  {content?.recipientName}
                </p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <span className="w-12 h-px bg-[#C9A96E]/20" />
                  <span className="text-[#C9A96E]/30 text-xs">✦</span>
                  <span className="w-12 h-px bg-[#C9A96E]/20" />
                </div>
              </div>

              {/* Reading content */}
              <div className="relative border border-[#C9A96E]/15 bg-[#0A0908]/60 backdrop-blur-sm">
                {/* Corner ornaments */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C9A96E]/30" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C9A96E]/30" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C9A96E]/30" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C9A96E]/30" />

                <div className="p-8 sm:p-12">
                  <div
                    className="reading-content prose prose-invert max-w-none"
                    style={{
                      lineHeight: "2",
                      fontSize: "1rem",
                    }}
                  >
                    {(() => {
                      const lines = content?.content.split("\n") || [];
                      const elements: React.ReactNode[] = [];
                      let idx = 0;
                      while (idx < lines.length) {
                        const line = lines[idx];
                        // Detect markdown table blocks (lines starting with |)
                        if (line.startsWith("|")) {
                          const tableLines: string[] = [];
                          while (idx < lines.length && lines[idx].startsWith("|")) {
                            tableLines.push(lines[idx]);
                            idx++;
                          }
                          // Parse table: skip separator rows (|---|---|)
                          const dataRows = tableLines.filter(l => !l.match(/^\|[\s-|]+\|$/));
                          elements.push(
                            <div key={`table-${idx}`} className="my-6 border border-[#C9A96E]/15 overflow-hidden">
                              <table className="w-full text-sm">
                                <tbody>
                                  {dataRows.map((row, ri) => {
                                    const cells = row.split("|").filter(c => c.trim() !== "");
                                    if (cells.length < 2 || cells.every(c => !c.trim())) return null;
                                    return (
                                      <tr key={ri} className="border-b border-[#C9A96E]/8 last:border-b-0">
                                        <td className="px-5 py-3 text-[#C9A96E]/60 font-medium whitespace-nowrap">{cells[0]?.trim()}</td>
                                        <td className="px-5 py-3 text-[#E8DCC8]/70">{cells.slice(1).map(c => c.trim()).join(" | ")}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          );
                          continue;
                        }
                        // Horizontal rule / separator lines
                        if (line.match(/^[━─═]{3,}$/)) {
                          elements.push(
                            <div key={idx} className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent my-6" />
                          );
                          idx++;
                          continue;
                        }
                        // Section headers with ✧
                        if (line.startsWith("✧")) {
                          elements.push(
                            <motion.h2
                              key={idx}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1 * Math.min(idx, 10) }}
                              className="font-serif text-xl sm:text-2xl text-[#C9A96E] mt-10 mb-6 flex items-center gap-3"
                            >
                              <span className="text-[#C9A96E]/40">✧</span>
                              <span>{line.replace("✧ ", "").replace("✧", "")}</span>
                            </motion.h2>
                          );
                          idx++;
                          continue;
                        }
                        // Decorative dividers
                        if (line.includes("· · · ✦ · · ·")) {
                          elements.push(
                            <div key={idx} className="flex items-center justify-center gap-3 my-8">
                              <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#C9A96E]/30" />
                              <span className="text-[#C9A96E]/40 text-lg">✦</span>
                              <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#C9A96E]/30" />
                            </div>
                          );
                          idx++;
                          continue;
                        }
                        // Emoji section headers
                        if (line.match(/^[♥🦴⚡🍽🌙]/)) {
                          elements.push(
                            <h3 key={idx} className="font-serif text-lg text-[#C9A96E]/80 mt-8 mb-4">
                              {line}
                            </h3>
                          );
                          idx++;
                          continue;
                        }
                        // Closing mystical text
                        if (line.startsWith("הנר מרצד") || line.startsWith("הקריאה נשלמה") || line.startsWith("עשן מסתלסל") || line.startsWith("שקט עמוק")) {
                          elements.push(
                            <p key={idx} className="text-center text-[#C9A96E]/40 italic my-2 text-sm">
                              {line}
                            </p>
                          );
                          idx++;
                          continue;
                        }
                        // Quote-like emphasis
                        if (line.startsWith("\"") || line.startsWith("״")) {
                          elements.push(
                            <blockquote key={idx} className="border-r-2 border-[#C9A96E]/30 pr-4 my-4 text-[#E8DCC8]/80 italic">
                              {line}
                            </blockquote>
                          );
                          idx++;
                          continue;
                        }
                        // Star symbol ✦
                        if (line.trim() === "✦") {
                          elements.push(
                            <div key={idx} className="text-center text-[#C9A96E]/30 text-2xl my-8">
                              ✦
                            </div>
                          );
                          idx++;
                          continue;
                        }
                        // Empty lines
                        if (!line.trim()) {
                          elements.push(<div key={idx} className="h-3" />);
                          idx++;
                          continue;
                        }
                        // Regular paragraphs
                        elements.push(
                          <p key={idx} className="text-[#E8DCC8]/70 mb-3 leading-relaxed">
                            {line}
                          </p>
                        );
                        idx++;
                      }
                      return elements;
                    })()}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center mt-12">
                <p className="text-xs text-[#E8DCC8]/20">
                  מה שנכתב — מתגלה בזמנו
                </p>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent mx-auto mt-4" />
                <img src={LOGO.icon} alt="MAKTUBA" className="h-8 w-auto mx-auto mt-6 opacity-30" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
