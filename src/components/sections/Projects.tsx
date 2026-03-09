"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/context";
import { projects } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

const filterCategories = [
  { id: "all",      label_en: "All",        label_es: "Todos"      },
  { id: "frontend", label_en: "Frontend",   label_es: "Frontend"   },
  { id: "backend",  label_en: "Backend",    label_es: "Backend"    },
  { id: "fullstack",label_en: "Full Stack", label_es: "Full Stack" },
  { id: "mobile",   label_en: "Mobile",     label_es: "Mobile"     },
  { id: "ai",       label_en: "AI & Auto",  label_es: "IA & Auto"  },
];

export default function Projects() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Featured primero
  const sorted = [...filtered].sort((a, b) =>
    a.featured === b.featured ? 0 : a.featured ? -1 : 1
  );

  return (
    <section
      id="projects"
      className="section-padding max-w-6xl mx-auto px-4 sm:px-6"
    >
      <SectionHeader
        subtitle={t.projects.subtitle}
        title={t.projects.title}
      />

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {filterCategories.map((cat) => {
          const label = lang === "es" ? cat.label_es : cat.label_en;
          const isActive = activeFilter === cat.id;

          return (
            <motion.button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 ${
                isActive
                  ? "text-dark-900 font-semibold"
                  : "glass text-slate-400 hover:text-white border border-white/5 hover:border-white/10"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Projects count */}
      <motion.p
        key={activeFilter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-slate-600 text-xs font-mono mb-8"
      >
        {sorted.length} {sorted.length === 1 ? "project" : "projects"}
      </motion.p>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {sorted.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {sorted.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-slate-600 font-mono text-sm">
            No projects in this category yet.
          </p>
        </motion.div>
      )}

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <p className="text-slate-500 text-sm font-mono mb-4">
          {lang === "es"
            ? "Más proyectos en mi GitHub"
            : "More projects on my GitHub"}
        </p>
        <a
          href="https://github.com/JuAlGe12"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full border border-white/10 hover:border-cyan-400/30 text-slate-400 hover:text-cyan-400 text-sm font-mono transition-all duration-300 hover:shadow-cyan"
        >
          github.com/JuAlGe12
        </a>
      </motion.div>
    </section>
  );
}
