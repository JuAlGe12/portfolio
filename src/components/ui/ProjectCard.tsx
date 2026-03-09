"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Clock, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/context";
import { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { t, lang } = useLanguage();

  const description =
    lang === "es" ? project.description_es : project.description_en;

  const topColor =
    project.color === "cyan"
      ? "from-cyan-400 to-violet-500"
      : "from-violet-500 to-cyan-400";

  const tagColor =
    project.color === "cyan"
      ? "bg-cyan-400/10 text-cyan-400 border-cyan-400/20"
      : "bg-violet-400/10 text-violet-400 border-violet-400/20";

  const glowHover =
    project.color === "cyan"
      ? "hover:border-cyan-400/30 hover:shadow-cyan"
      : "hover:border-violet-400/30 hover:shadow-violet";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`glass rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 flex flex-col ${glowHover}`}
    >
      {/* Top color bar */}
      <div className={`h-0.5 w-full bg-gradient-to-r ${topColor}`} />

      {/* Card content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-600">
              #{String(project.id).padStart(2, "0")}
            </span>
            {project.featured && (
              <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                featured
              </span>
            )}
          </div>

          {/* Status badge */}
          {project.status === "wip" ? (
            <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400">
              <Clock size={12} />
              <span>{t.projects.wip}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-xs font-mono text-green-400">
              <CheckCircle2 size={12} />
              <span>Done</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-lg mb-2 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 rounded-full text-xs font-mono border ${tagColor}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors duration-200"
          >
            <Github size={14} />
            {t.projects.view_code}
          </a>
          {project.demo !== "#" && (
            <>
              <span className="text-slate-700">•</span>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <ExternalLink size={14} />
                {t.projects.view_demo}
              </a>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
