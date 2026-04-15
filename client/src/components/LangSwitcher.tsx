import { useLang } from "@/contexts/LangContext";
import type { Lang } from "@/lib/i18n";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";

const langs: { code: Lang; label: string; native: string }[] = [
  { code: "he", label: "עברית", native: "עב" },
  { code: "en", label: "English", native: "EN" },
  { code: "ar", label: "العربية", native: "عر" },
];

export default function LangSwitcher() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = langs.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 text-xs tracking-wider text-[#C9A96E]/70 hover:text-[#C9A96E] transition-colors duration-300 border border-[#C9A96E]/20 hover:border-[#C9A96E]/40"
        aria-label={t.navLang}
      >
        <Globe className="w-3.5 h-3.5" strokeWidth={1.5} />
        <span>{current.native}</span>
      </button>

      {open && (
        <div className="absolute top-full mt-2 end-0 min-w-[140px] bg-[#0A0908]/95 backdrop-blur-md border border-[#C9A96E]/20 shadow-xl z-50">
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors duration-200 ${
                lang === l.code
                  ? "text-[#C9A96E] bg-[#C9A96E]/10"
                  : "text-[#E8DCC8]/60 hover:text-[#E8DCC8] hover:bg-[#C9A96E]/5"
              }`}
            >
              <span>{l.label}</span>
              {lang === l.code && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
