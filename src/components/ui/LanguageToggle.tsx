"use client";

import { useLanguage } from "@/lib/context";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 glass rounded-full p-1">
      <motion.button
        onClick={() => setLang("en")}
        whileTap={{ scale: 0.95 }}
        className={`px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all duration-200 ${
          lang === "en"
            ? "bg-cyan-400 text-dark-900"
            : "text-slate-400 hover:text-white"
        }`}
      >
        EN
      </motion.button>
      <motion.button
        onClick={() => setLang("es")}
        whileTap={{ scale: 0.95 }}
        className={`px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all duration-200 ${
          lang === "es"
            ? "bg-cyan-400 text-dark-900"
            : "text-slate-400 hover:text-white"
        }`}
      >
        ES
      </motion.button>
    </div>
  );
}
