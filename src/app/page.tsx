"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900 grid-bg">
      <Navbar />
      <Hero />

      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent mx-8" />
      <About />

      <div className="h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent mx-8" />
      <Skills />

      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent mx-8" />
      <Projects />

      <div className="h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent mx-8" />
      <Contact />

      <Footer />
    </main>
  );
}
