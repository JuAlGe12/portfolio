"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Zap, Coffee } from "lucide-react";
import { useLanguage } from "@/lib/context";
import { personalInfo } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";

const statsIcons = [MapPin, Code2, Zap, Coffee];

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: MapPin,  label: t.about.location,   value: "Buenos Aires" },
    { icon: Code2,   label: t.about.experience, value: t.about.experience },
    { icon: Zap,     label: t.about.focus,      value: t.about.focus },
    { icon: Coffee,  label: t.about.status,     value: t.about.status },
  ];

  return (
    <section id="about" className="section-padding max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeader subtitle={t.about.subtitle} title={t.about.title} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Avatar side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Spinning border */}
            <div className="absolute -inset-1 rounded-full opacity-75">
              <div
                className="w-full h-full rounded-full animate-border-spin"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00D4FF, #7C3AED, #00D4FF)",
                  padding: "2px",
                }}
              />
            </div>

            {/* Glow */}
            <div className="absolute -inset-4 rounded-full bg-cyan-400/10 blur-2xl" />

            {/* Avatar container */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-dark-900">
              <div className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
                {/* Placeholder avatar — reemplazá con tu foto */}
                <div className="text-center">
                  <div className="text-6xl font-black text-gradient-cyan">
                    CJ
                  </div>
                  <div className="text-slate-500 text-sm font-mono mt-1">
                    avatar
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 glass-strong rounded-2xl px-4 py-2 border border-green-400/30"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-mono font-semibold">
                  {t.about.status}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            {t.about.bio_1}
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            {t.about.bio_2}
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            {t.about.bio_3}
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-4 border border-white/5 hover:border-cyan-400/20 transition-colors duration-300"
              >
                <stat.icon size={16} className="text-cyan-400 mb-2" />
                <div className="text-white font-semibold text-sm">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-xs mt-0.5">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors font-mono"
            >
              <Code2 size={14} />
              GitHub
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors font-mono"
            >
              <Zap size={14} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
