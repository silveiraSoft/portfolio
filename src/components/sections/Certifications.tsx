"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Clock, CheckCircle, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";

export function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="certifications" className="relative py-20 md:py-28 bg-surface/50" aria-label="Certifications">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div ref={ref} className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="section-eyebrow">Certifications</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            AWS{" "}
            <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-text-secondary max-w-xl">
            AWS-credentialed with two active accreditations and two associate-level certifications in progress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className={`glass-card p-5 relative overflow-hidden group ${
                cert.status === "in-progress" ? "opacity-80" : ""
              }`}
            >
              {/* Status indicator */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-400" />
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                    cert.status === "active"
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                      : "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                  }`}
                >
                  {cert.status === "active" ? (
                    <CheckCircle className="w-3 h-3" />
                  ) : (
                    <Clock className="w-3 h-3" />
                  )}
                  {cert.status === "active" ? "Active" : "In Progress"}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-text-primary mb-1 leading-snug">
                {cert.name}
              </h3>
              <p className="text-xs text-text-muted mb-3">{cert.issuer}</p>

              {cert.status === "in-progress" && (
                <div className="skill-bar-bg">
                  <motion.div
                    className="skill-bar-fill bg-gradient-to-r from-amber-500 to-yellow-400"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "60%" } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                  />
                </div>
              )}

              {/* AWS Badge gradient hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* AWS Partner link */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-8 flex items-center justify-center"
        >
          <a
            href="https://aws.amazon.com/partners/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors group"
          >
            <span>AWS Partner Network member</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
