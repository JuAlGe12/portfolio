"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";
import { useLanguage } from "@/lib/context";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = [
    { label: t.nav.about,    href: "#about"    },
    { label: t.nav.skills,   href: "#skills"   },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact,  href: "#contact"  },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="glass-strong">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="font-mono font-bold text-xl text-white mb-3">
                <span className="text-gradient-cyan">CJ</span>
                <span className="text-slate-400">.</span>
                <span className="text-white">dev</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                {lang === "es"
                  ? "Desarrollador Full Stack construyendo productos digitales desde Buenos Aires."
                  : "Full Stack Developer building digital products from Buenos Aires."}
              </p>
            </div>

            {/* Nav links */}
            <div>
              <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-4">
                {lang === "es" ? "Navegación" : "Navigation"}
              </p>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-left text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200 font-mono w-fit"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-4">
                {lang === "es" ? "Contacto" : "Contact"}
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors font-mono"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-blue-400 text-sm transition-colors font-mono"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm transition-colors font-mono"
                >
                  <Mail size={14} />
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-xs font-mono">
              © {year} Carlos Julian Albin Gener.{" "}
              {t.footer.rights}
            </p>
            <p className="text-slate-600 text-xs font-mono flex items-center gap-1.5">
              {t.footer.built_with}
              <Heart size={10} className="text-red-500 fill-red-500" />
              {t.footer.and}
              <Code2 size={10} className="text-cyan-400" />
              Next.js + Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
