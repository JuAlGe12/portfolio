"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export default function GlowButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: GlowButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-cyan-400 text-dark-900 hover:bg-cyan-500 shadow-cyan hover:shadow-cyan-lg hover:scale-105",
    secondary:
      "glass border border-cyan-400/30 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-cyan",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div whileTap={{ scale: 0.97 }}>
      <Link href={href} className={classes}>
        {children}
      </Link>
    </motion.div>
  );
}
