"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight, Layers, Target, Lightbulb, TrendingUp } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data";

function CaseStudyCard({ study, index, inView }: { study: typeof CASE_STUDIES[0]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.15 }}
      className="glass-card overflow-hidden"
    >
      {/* Header — always visible */}
      <button
        className="w-full text-left p-5 md:p-6 flex items-start gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all"
          style={{ backgroundColor: study.color + "1A", border: `1px solid ${study.color}33` }}
        >
          <Layers className="w-5 h-5" style={{ color: study.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-text-muted font-mono">{study.year}</span>
            <span className="text-xs text-text-muted">·</span>
            <span className="text-xs font-medium" style={{ color: study.color }}>{study.company}</span>
          </div>
          <h3 className="font-semibold text-text-primary text-base leading-snug group-hover:text-white transition-colors">
            {study.title}
          </h3>
          <p className="text-xs text-text-muted mt-0.5">{study.subtitle}</p>
        </div>
        <ChevronRight className={`w-4 h-4 text-text-muted shrink-0 mt-1.5 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>

      {/* Expandable content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-6 border-t border-border pt-5 space-y-5">
              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed">{study.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Challenge */}
                <div className="p-4 rounded-xl bg-surface/50 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-red-400" />
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Challenge</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="p-4 rounded-xl bg-surface/50 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Solution</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">{study.solution}</p>
                </div>

                {/* Impact */}
                <div className="p-4 rounded-xl bg-surface/50 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Impact</span>
                  </div>
                  <ul className="space-y-1">
                    {study.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-text-secondary">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Architecture Flow */}
              <div>
                <p className="text-xs text-text-muted uppercase tracking-widest mb-3 font-semibold">Architecture Flow</p>
                <div className="code-block">
                  {study.architecture.map((layer, li) => (
                    <div key={li} className="flex items-start gap-2 py-0.5">
                      <span className="text-primary shrink-0">{li === 0 ? "→" : "  └─"}</span>
                      <span className="text-text-secondary">{layer}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Patterns & Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-widest mb-2 font-semibold">Architecture Patterns</p>
                  <div className="flex flex-wrap gap-1.5">
                    {study.patterns.map((p) => (
                      <span key={p} className="px-2.5 py-1 rounded-md text-xs font-medium border border-violet-500/20 bg-violet-500/10 text-violet-400">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-widest mb-2 font-semibold">Tech Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {study.stack.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ArchitectureCaseStudies() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="architecture" className="relative py-24 md:py-32 bg-background" aria-label="Architecture Case Studies">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
      <div className="orb orb-violet w-80 h-80 left-0 bottom-1/4 opacity-10 pointer-events-none" />

      <div ref={ref} className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-eyebrow">Architecture</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Deep-dive{" "}
            <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-text-secondary max-w-xl text-lg">
            Real production systems — challenges, solutions, architecture patterns, and measurable impact.
          </p>
        </motion.div>

        <div className="space-y-4 max-w-4xl">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
