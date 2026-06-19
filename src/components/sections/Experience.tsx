"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, ChevronDown, ExternalLink } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import { cn } from "@/lib/utils";

function ExperienceCard({ job, index, inView }: { job: typeof EXPERIENCE[0]; index: number; inView: boolean }) {
  const [expanded, setExpanded] = useState(index < 2);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline connector */}
      {index < EXPERIENCE.length - 1 && (
        <div className="absolute left-[14px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-border to-transparent" />
      )}

      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1 w-7 h-7 rounded-full border-2 border-background flex items-center justify-center"
        style={{ backgroundColor: job.color + "33", borderColor: job.color + "66" }}
      >
        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: job.color }} />
        {job.current && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: job.color }} />
        )}
      </div>

      {/* Card */}
      <div className="glass-card p-5 md:p-6 hover:shadow-card-hover">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="font-semibold text-text-primary">{job.role}</h3>
              {job.current && (
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                  Current
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <a
                href={job.website || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary transition-colors flex items-center gap-1 group"
                style={{ color: job.color }}
              >
                {job.company}
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <span className="text-text-muted">·</span>
              <span className="text-text-muted text-xs">{job.location}</span>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
            <span className="text-xs text-text-muted font-mono">{job.period}</span>
            <span className="text-xs text-text-muted">{job.duration}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary mb-3 leading-relaxed">{job.description}</p>

        {/* Toggle highlights */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-text-muted hover:text-primary transition-colors mb-3"
          aria-expanded={expanded}
        >
          <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", expanded && "rotate-180")} />
          {expanded ? "Hide details" : "Show highlights"}
        </button>

        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-1.5 mb-4"
          >
            {job.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: job.color }} />
                {h}
              </li>
            ))}
          </motion.ul>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
          {job.tech.map((t) => (
            <span key={t} className="tech-badge text-xs">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-background" aria-label="Experience">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
      <div className="orb orb-primary w-80 h-80 -right-20 bottom-1/3 opacity-10 pointer-events-none" />

      <div ref={ref} className="container-section relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-eyebrow">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Professional{" "}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-text-secondary max-w-xl text-lg">
            18 years across financial services, identity platforms, academic systems, and open-source AI tooling.
          </p>
        </motion.div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12 p-4 glass rounded-xl border border-border"
        >
          {[
            { icon: Briefcase, label: "Total Experience", value: "18+ Years" },
            { icon: Briefcase, label: "Companies", value: "5+" },
            { icon: Briefcase, label: "Countries", value: "4" },
            { icon: Briefcase, label: "Sectors", value: "Finance · EdTech · Gov" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-base font-bold gradient-text">{s.value}</p>
              <p className="text-xs text-text-muted">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {EXPERIENCE.map((job, i) => (
            <ExperienceCard key={job.company + job.period} job={job} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
