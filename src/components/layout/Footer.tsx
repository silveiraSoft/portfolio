import { Github, Linkedin, Mail, Code2, ExternalLink } from "lucide-react";
import { PERSONAL, NAV_LINKS } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container-section py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-text-primary">Adalberto Silveira Napoles</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              Senior Software Engineer crafting cloud-native systems, event-driven architectures, and AI-powered solutions with 18+ years of experience.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Work */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Featured Projects</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://github.com/silveiraSoft/aws-monitor`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors group"
                >
                  <span>AWS Monitor Agent</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={`https://github.com/silveiraSoft/agent-linkedin-candidate`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors group"
                >
                  <span>JobHunter AI Agent</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/silveiraSoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors group"
                >
                  <span>All Projects on GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-xs text-text-muted">
                📍 Hialeah, FL 33015 · Remote preferred
              </p>
              <p className="text-xs text-text-muted mt-1">
                🌐 EN · ES · PT
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            © {year} Adalberto Silveira Napoles. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Built with{" "}
            <span className="text-primary">Next.js 15</span> ·{" "}
            <span className="text-violet-400">TypeScript</span> ·{" "}
            <span className="text-cyan-400">Tailwind CSS</span> ·{" "}
            <span className="text-emerald-400">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
