"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Server, Cloud, Brain, Monitor, Database, Layers } from "lucide-react";
import { SKILLS } from "@/lib/data";

const ICONS: Record<string, React.ElementType> = {
  Server, Cloud, Brain, Monitor, Database, Layers,
};

const COLOR_MAP: Record<string, { bg: string; text: string; border: string; bar: string }> = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary-light",
    border: "border-primary/20",
    bar: "from-primary to-violet-500",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/20",
    bar: "from-cyan-500 to-blue-500",
  },
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    border: "border-violet-500/20",
    bar: "from-violet-500 to-primary",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    bar: "from-emerald-500 to-teal-500",
  },
};

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const c = COLOR_MAP[color] || COLOR_MAP.primary;

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{name}</span>
        <span className={`text-xs font-mono font-semibold ${c.text}`}>{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className={`skill-bar-fill bg-gradient-to-r ${c.bar}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.0, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

export function TechnicalSkills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displaySkills = activeCategory
    ? SKILLS.filter((s) => s.category === activeCategory)
    : SKILLS;

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-background" aria-label="Technical Skills">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="orb orb-violet w-80 h-80 -left-20 top-1/3 opacity-10 pointer-events-none" />

      <div ref={ref} className="container-section relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-eyebrow">Technical Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            18 years of{" "}
            <span className="gradient-text">hands-on craft</span>
          </h2>
          <p className="text-text-secondary max-w-xl text-lg">
            From low-level SQL optimization to cloud-native microservices and AI agents.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
              !activeCategory
                ? "bg-primary/20 border-primary/40 text-primary-light"
                : "border-border text-text-muted hover:border-border-light hover:text-text-secondary"
            }`}
          >
            All
          </button>
          {SKILLS.map((s) => {
            const Icon = ICONS[s.icon] || Server;
            return (
              <button
                key={s.category}
                onClick={() => setActiveCategory(activeCategory === s.category ? null : s.category)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  activeCategory === s.category
                    ? "bg-primary/20 border-primary/40 text-primary-light"
                    : "border-border text-text-muted hover:border-border-light hover:text-text-secondary"
                }`}
              >
                <Icon className="w-3 h-3" />
                {s.category}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {displaySkills.map((skillGroup, gi) => {
            const Icon = ICONS[skillGroup.icon] || Server;
            const c = COLOR_MAP[skillGroup.color] || COLOR_MAP.primary;

            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + gi * 0.1 }}
                className="glass-card p-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center`}>
                    <Icon className={`w-4.5 h-4.5 ${c.text}`} />
                  </div>
                  <h3 className="font-semibold text-text-primary">{skillGroup.category}</h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-3">
                  {skillGroup.items.map((item, ii) => (
                    <SkillBar
                      key={item.name}
                      name={item.name}
                      level={item.level}
                      color={skillGroup.color}
                      delay={0.2 + gi * 0.1 + ii * 0.04}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Badge Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <p className="text-xs text-text-muted uppercase tracking-widest mb-4">Also worked with</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Remix", "Angular", "jQuery", "PHP 8", "Laravel", "SLIM",
              "Splunk", "SLF4J", "VisualVM", "IntelliJ Profiler",
              "Azure AD (MSAL)", "reCAPTCHA", "ModelMapper", "Swagger/OpenAPI",
              "Maven", "Gradle", "SFTP", "gRPC", "SOAP", "Postman",
            ].map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
