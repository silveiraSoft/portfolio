"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Download } from "lucide-react";
import { PERSONAL, STATS } from "@/lib/data";

const TYPING_ROLES = PERSONAL.roles;

function TypewriterText() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentRole = TYPING_ROLES[roleIndex];
    const speed = isDeleting ? 40 : 80;
    const pauseDelay = isDeleting ? 500 : 2000;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
        }
      }
    }, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="gradient-text">
      {text}
      <span className="animate-pulse text-primary ml-0.5">|</span>
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      aria-label="Hero section"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Gradient Orbs */}
      <div className="orb orb-primary w-[600px] h-[600px] -top-40 -left-40 animate-float opacity-20" />
      <div className="orb orb-violet w-[500px] h-[500px] top-1/3 -right-32 animate-float opacity-15" style={{ animationDelay: "2s" }} />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 left-1/3 animate-float opacity-10" style={{ animationDelay: "4s" }} />

      {/* Radial glow center */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="container-section relative z-10 py-28 md:py-36 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Eyebrow Badge */}
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold text-primary-light tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Available for Senior Engineering Roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-display-xl font-bold tracking-tight mb-4 text-text-primary"
          >
            Adalberto{" "}
            <span className="gradient-text">Silveira Napoles</span>
          </motion.h1>

          {/* Typewriter Role */}
          <motion.div
            variants={itemVariants}
            className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold min-h-[2.5rem] mb-6 flex items-center justify-center text-center px-4"
            aria-label="Role"
          >
            <TypewriterText />
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10 text-balance"
          >
            18+ years building <span className="text-text-primary font-medium">enterprise cloud-native systems</span> — Java, Spring Boot, AWS, and AI-powered automation. Handling{" "}
            <span className="text-primary font-medium">50,000+ daily transactions</span> at{" "}
            <span className="text-cyan-400 font-medium">99.9% uptime</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-xl font-medium text-white btn-gradient shadow-glow relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                View Projects
              </span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-xl font-medium border border-border bg-surface/50 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-200 text-text-secondary"
            >
              Get in Touch
            </a>
            <a
              href="/adalberto-silveira-resume-2026.pdf"
              download
              className="px-6 py-3 rounded-xl font-medium border border-border bg-surface/50 hover:border-border-light transition-all duration-200 text-text-secondary flex items-center gap-2 justify-center"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-16">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors group"
            >
              <Github className="w-4 h-4 group-hover:text-primary transition-colors" />
              <span className="hidden sm:inline">silveiraSoft</span>
            </a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors group"
            >
              <Linkedin className="w-4 h-4 group-hover:text-primary transition-colors" />
              <span className="hidden sm:inline">adalbertosilveiranapoles</span>
            </a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a
              href={`mailto:${PERSONAL.email}`}
              aria-label="Email"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:text-primary transition-colors" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-4 flex flex-col items-center"
              >
                <span className="text-2xl font-bold gradient-text">
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className="text-xs text-text-muted mt-1 text-center">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll to about"
        >
          <span className="text-xs text-text-muted tracking-wider uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
