"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, FileText, Eye, Sparkles } from "lucide-react";
import { PERSONAL } from "@/lib/data";

export function ResumeDownload() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="resume" className="relative py-20 md:py-28 bg-background overflow-hidden" aria-label="Resume Download">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
      <div className="orb orb-primary w-96 h-96 left-1/4 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none" />
      <div className="orb orb-violet w-80 h-80 right-1/4 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none" />

      <div ref={ref} className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl btn-gradient flex items-center justify-center shadow-glow">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>

          <p className="section-eyebrow justify-center">Resume</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Download my{" "}
            <span className="gradient-text">Full Resume</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            ATS-optimized resume with 18 years of experience in Java, Spring Boot, AWS, and AI engineering. Available in PDF format.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="/adalberto-silveira-resume-2026.pdf"
              download="SilveiraNapoles-Adalberto-Resume-2026.pdf"
              className="px-8 py-3.5 rounded-xl font-semibold text-white btn-gradient shadow-glow relative overflow-hidden group flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </span>
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl font-semibold border border-border bg-surface/50 hover:border-primary/40 hover:bg-primary/10 hover:text-primary text-text-secondary transition-all flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View on LinkedIn
            </a>
          </div>

          {/* Resume highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 glass rounded-2xl border border-border text-left">
            {[
              { icon: Sparkles, label: "ATS Optimized", desc: "Passes AI screening systems" },
              { icon: FileText, label: "2026 Updated", desc: "Includes all recent projects" },
              { icon: Eye, label: "Clean Format", desc: "Single-column, WCAG-compliant" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-text-primary">{label}</p>
                  <p className="text-xs text-text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
