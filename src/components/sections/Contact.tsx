"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle, XCircle } from "lucide-react";
import { useLanguage } from "@/lib/context";
import { personalInfo } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t, lang } = useLanguage();
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      // Usamos Formspree — servicio gratuito sin necesidad de backend
      // Reemplazá YOUR_FORM_ID con el tuyo (lo configurás en el PASO 2)
      const res = await fetch("https://formspree.io/f/xjgagkvj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setFormState("idle"), 4000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 4000);
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 4000);
    }
  };

  const inputClasses =
    "w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 border border-white/5 focus:border-cyan-400/40 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 transition-all duration-200 bg-transparent font-mono";

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      handle: "@JuAlGe12",
      href: personalInfo.github,
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      handle: "Carlos Julian Albin Gener",
      href: personalInfo.linkedin,
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      label: "Email",
      handle: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "hover:text-cyan-400",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding max-w-6xl mx-auto px-4 sm:px-6"
    >
      <SectionHeader subtitle={t.contact.subtitle} title={t.contact.title} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left — Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            {t.contact.description}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1.5 uppercase tracking-wider">
                {t.contact.name_label}
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t.contact.name_placeholder}
                required
                className={inputClasses}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1.5 uppercase tracking-wider">
                {t.contact.email_label}
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t.contact.email_placeholder}
                required
                className={inputClasses}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1.5 uppercase tracking-wider">
                {t.contact.message_label}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t.contact.message_placeholder}
                required
                rows={5}
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={formState === "sending"}
              whileTap={{ scale: 0.97 }}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                formState === "success"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : formState === "error"
                  ? "bg-red-500/20 text-red-400 border border-red-500/30"
                  : "bg-gradient-to-r from-cyan-400 to-violet-500 text-dark-900 hover:shadow-cyan-lg hover:scale-[1.02]"
              }`}
            >
              {formState === "idle" && (
                <>
                  <Send size={16} />
                  {t.contact.send}
                </>
              )}
              {formState === "sending" && (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-dark-900/30 border-t-dark-900 rounded-full"
                  />
                  {t.contact.sending}
                </>
              )}
              {formState === "success" && (
                <>
                  <CheckCircle size={16} />
                  {t.contact.success}
                </>
              )}
              {formState === "error" && (
                <>
                  <XCircle size={16} />
                  {t.contact.error}
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Right — Social links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-6">
            {t.contact.or}
          </p>

          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 4 }}
              className={`flex items-center gap-4 glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300 group ${link.color}`}
            >
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                <link.icon size={20} className="text-slate-400 group-hover:text-current transition-colors" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">
                  {link.label}
                </div>
                <div className="text-slate-500 text-xs font-mono mt-0.5">
                  {link.handle}
                </div>
              </div>
              <div className="ml-auto text-slate-700 group-hover:text-current transition-colors">
                →
              </div>
            </motion.a>
          ))}

          {/* Availability card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 glass rounded-2xl p-6 border border-green-400/20"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-mono font-semibold">
                {lang === "es" ? "Disponible ahora" : "Available now"}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {lang === "es"
                ? "Estoy tomando proyectos freelance y oportunidades remotas. Tiempo de respuesta: menos de 24hs."
                : "I'm currently taking on freelance projects and remote opportunities. Response time: under 24h."}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
