"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeader({
  subtitle,
  title,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
        {title}
      </h2>
      <div
        className={`mt-4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent ${
          centered ? "mx-auto w-48" : "w-48"
        }`}
      />
    </motion.div>
  );
}
