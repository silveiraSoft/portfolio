"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Star, ChevronDown, ChevronUp } from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";

function ProjectCard({ project, index, inView }: { project: typeof FEATURED_PROJECTS[0]; index: number; inView: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.1 }}
      className={cn(
        "glass-card overflow-hidden relative group",
        isFeatured ? "md:col-span-2" : "md:col-span-1"
      )}
    >
      {/* Top gradient line */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${project.color}`} />

      <div className="p-6">
        {/* Badges */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-2xl">{project.icon}</span>
            {isFeatured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/15 text-primary-light border border-primary/25">
                <Star className="w-3 h-3" />
                Featured
              </span>
            )}
            {!isFeatured && project.badge && project.badge !== "Open Source" && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                {project.badge}
              </span>
            )}
            <span className="text-xs text-text-muted font-mono">{project.year}</span>
          </div>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 transition-all"
                aria-label={`GitHub: ${project.title}`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                aria-label={`Demo: ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className={cn("font-bold text-text-primary mb-1", isFeatured ? "text-xl" : "text-base")}>
          {project.title}
        </h3>
        <p className="text-xs text-text-muted mb-3 font-medium tracking-wide uppercase">{project.subtitle}</p>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4">{project.description}</p>

        {/* Metrics (featured only) */}
        {isFeatured && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 p-3 bg-surface/50 rounded-xl border border-border">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-sm font-bold gradient-text">{m.value}</p>
                <p className="text-xs text-text-muted">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Highlights */}
        {isFeatured && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors mb-3"
              aria-expanded={expanded}
            >
              {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              {expanded ? "Less detail" : "Architecture & highlights"}
            </button>
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 space-y-2"
                >
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </div>
                  ))}
                  {project.architecture && (
                    <div className="mt-3 p-3 bg-black/30 rounded-lg border border-border font-mono text-xs">
                      <p className="text-text-muted mb-2 font-sans font-medium text-xs uppercase tracking-widest">Architecture Flow</p>
                      {project.architecture.layers.map((layer, li) => (
                        <div key={li} className="text-text-secondary leading-relaxed">
                          {li > 0 && <span className="text-text-muted">  └─ </span>}
                          {layer}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Non-featured highlights */}
        {!isFeatured && (
          <ul className="space-y-1 mb-4">
            {project.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                <span className="mt-1 w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
          {project.stack.slice(0, isFeatured ? 20 : 5).map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
          {!isFeatured && project.stack.length > 5 && (
            <span className="tech-badge">+{project.stack.length - 5}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = FEATURED_PROJECTS.filter((p) => p.featured);
  const otherProjects = FEATURED_PROJECTS.filter((p) => !p.featured);
  const visibleOthers = showAll ? otherProjects : otherProjects.slice(0, 2);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-surface/30" aria-label="Projects">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="orb orb-cyan w-96 h-96 right-0 top-1/4 opacity-10 pointer-events-none" />

      <div ref={ref} className="container-section relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-eyebrow">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Featured{" "}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-text-secondary max-w-xl text-lg">
            Personal projects and open-source contributions — emphasis on AI agents and cloud-native systems.
          </p>
        </motion.div>

        {/* Featured Projects — 2-col span */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-sm font-semibold text-text-muted uppercase tracking-widest mb-4"
        >
          More Projects
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
          {visibleOthers.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={featuredProjects.length + i} inView={inView} />
          ))}
        </div>

        {/* Show more */}
        {otherProjects.length > 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-6 flex justify-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm text-text-secondary hover:text-text-primary hover:border-border-light transition-all"
            >
              {showAll ? (
                <><ChevronUp className="w-4 h-4" /> Show less</>
              ) : (
                <><ChevronDown className="w-4 h-4" /> Show {otherProjects.length - 2} more projects</>
              )}
            </button>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/silveiraSoft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors group"
          >
            <Github className="w-4 h-4" />
            <span>View all 60+ repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
