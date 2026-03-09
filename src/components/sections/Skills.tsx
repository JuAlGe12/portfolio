"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Smartphone,
  Container,
  Bot,
  Database,
} from "lucide-react";
import { useLanguage } from "@/lib/context";
import { skillCategories } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap = {
  Monitor,
  Server,
  Smartphone,
  Container,
  Bot,
  Database,
};

type IconName = keyof typeof iconMap;

function SkillBar({
  name,
  level,
  color,
  index,
}: {
  name: string;
  level: number;
  color: string;
  index: number;
}) {
  const barColor =
    color === "cyan"
      ? "from-cyan-400 to-cyan-500"
      : "from-violet-400 to-violet-500";

  const glowColor =
    color === "cyan"
      ? "rgba(0, 212, 255, 0.4)"
      : "rgba(124, 58, 237, 0.4)";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="space-y-1.5"
    >
      <div className="flex justify-between items-center">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-slate-500 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.07 + 0.2, duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
          style={{ boxShadow: `0 0 8px ${glowColor}` }}
        />
      </div>
    </motion.div>
  );
}

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState(false);

  const Icon = iconMap[category.icon as IconName] ?? Monitor;

  const categoryLabels = t.skills.categories as Record<string, string>;
  const label = categoryLabels[category.id] ?? category.id;

  const borderColor =
    category.color === "cyan"
      ? hovered
        ? "border-cyan-400/40"
        : "border-white/5"
      : hovered
      ? "border-violet-400/40"
      : "border-white/5";

  const iconColor =
    category.color === "cyan" ? "text-cyan-400" : "text-violet-400";

  const glowClass =
    category.color === "cyan"
      ? "bg-cyan-400/5"
      : "bg-violet-400/5";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`glass rounded-2xl p-6 border transition-all duration-300 ${borderColor} ${
        hovered ? glowClass : ""
      }`}
    >
      {/* Card header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`p-2 rounded-lg ${
            category.color === "cyan"
              ? "bg-cyan-400/10"
              : "bg-violet-400/10"
          }`}
        >
          <Icon size={20} className={iconColor} />
        </div>
        <h3 className="text-white font-semibold text-base">{label}</h3>
      </div>

      {/* Skills list */}
      <div className="space-y-3">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={category.color}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="section-padding max-w-6xl mx-auto px-4 sm:px-6"
    >
      <SectionHeader
        subtitle={t.skills.subtitle}
        title={t.skills.title}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, i) => (
          <SkillCard key={category.id} category={category} index={i} />
        ))}
      </div>

      {/* Bottom tech strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 glass rounded-2xl p-6 border border-white/5"
      >
        <p className="text-slate-500 text-xs font-mono text-center uppercase tracking-widest mb-6">
          Tech Stack
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Next.js", "React", "TypeScript", "Python", "FastAPI",
            "Node.js", "NestJS", "React Native", "Docker", "PostgreSQL",
            "SQLite", "Tailwind CSS", "Framer Motion", "Git", "n8n",
            "LangChain", "Scikit-learn", "Pandas", "Vercel", "GitHub Actions",
          ].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1.5 glass rounded-full text-xs font-mono text-slate-400 hover:text-cyan-400 border border-white/5 hover:border-cyan-400/30 transition-all duration-200 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
