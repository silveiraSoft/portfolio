"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Briefcase, GraduationCap, Languages, CheckCircle } from "lucide-react";
import { PERSONAL } from "@/lib/data";

const highlights = [
  "18+ years across full SDLC: analysis, architecture, coding, testing, deployment",
  "Specialized in Java 8–25, Spring Boot, Spring WebFlux, Project Reactor",
  "Production financial systems: 50,000+ daily transactions at 99.9% uptime",
  "Active AI practitioner: Amazon Bedrock Agents, Claude API, autonomous systems",
  "Full-stack: React, Next.js, TypeScript on Node.js 22",
  "AWS-credentialed + 2 certifications in progress",
  "Authorized to work in the USA — no sponsorship required",
];

const cards = [
  { icon: MapPin, label: "Location", value: "Hialeah, FL 33015", sub: "Remote preferred · Open to 28mi radius" },
  { icon: Briefcase, label: "Status", value: "Available for Work", sub: "1-month notice period" },
  { icon: GraduationCap, label: "Education", value: "M.Sc. Business Informatics", sub: "B.Sc. Computer Sciences — CUJAE & USC" },
  { icon: Languages, label: "Languages", value: "English · Spanish · Portuguese", sub: "Fluent in all three" },
];

export function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-surface/30" aria-label="About">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="orb orb-primary w-96 h-96 -right-32 top-1/4 pointer-events-none opacity-10" />

      <div ref={ref} className="container-section relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-eyebrow">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Building systems that{" "}
            <span className="gradient-text">scale and last</span>
          </h2>
          <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
            Senior engineer with deep roots in distributed systems, financial platforms, and AI-assisted development — fluent in Java, reactive programming, and cloud-native architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-text-secondary leading-relaxed text-[15px]">
              I&apos;m <span className="text-text-primary font-medium">Adalberto Silveira Napoles</span>, a Senior Software Engineer with over 18 years of experience designing and delivering enterprise-grade, cloud-native applications across the full SDLC.
            </p>
            <p className="text-text-secondary leading-relaxed text-[15px]">
              At <span className="text-text-primary font-medium">3HTP Cloud Services</span> I architect financial and identity-validation platforms handling 50,000+ daily transactions — including a voice-biometric authentication system for banking, a distributed Complaints Management System with 3 Spring WebFlux microservices over SNS/SQS, and a 100%-digital savings platform serving 200,000+ users.
            </p>
            <p className="text-text-secondary leading-relaxed text-[15px]">
              I&apos;m an active AI practitioner: I built an{" "}
              <span className="text-primary font-medium">autonomous job-application agent</span> using Claude/Anthropic API and an{" "}
              <span className="text-cyan-400 font-medium">AWS infrastructure monitor powered by Amazon Bedrock</span> with natural-language incident summaries — both live on GitHub.
            </p>

            {/* Highlights */}
            <div className="pt-2">
              <ul className="space-y-2.5">
                {highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {h}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4"
          >
            {cards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <card.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-widest mb-1">{card.label}</p>
                    <p className="text-sm font-semibold text-text-primary">{card.value}</p>
                    <p className="text-xs text-text-muted mt-0.5">{card.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Avatar / Profile visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.55 }}
              className="glass-card p-5 flex flex-col items-center text-center"
            >
              <div className="relative mb-3">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl font-bold shadow-glow">
                  AS
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-surface flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                </span>
              </div>
              <p className="text-xs font-semibold text-text-primary">Adalberto Silveira Napoles</p>
              <p className="text-xs text-text-muted">Senior Software Engineer</p>
              <div className="mt-3 pt-3 border-t border-border w-full">
                <div className="flex justify-around text-center">
                  <div>
                    <p className="text-sm font-bold gradient-text">18+</p>
                    <p className="text-xs text-text-muted">Years</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold gradient-text">60+</p>
                    <p className="text-xs text-text-muted">GitHub Repos</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold gradient-text">EN·ES·PT</p>
                    <p className="text-xs text-text-muted">Languages</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
