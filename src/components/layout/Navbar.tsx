"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="container-section flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group focus-visible:outline-none"
          aria-label="Go to top"
        >
          <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center relative overflow-hidden">
            <Code2 className="w-4 h-4 text-white relative z-10" />
          </div>
          <span className="font-semibold text-sm hidden sm:block text-text-primary">
            <span className="gradient-text-primary">Adalberto</span>
            <span className="text-text-muted ml-1 font-normal">Silveira</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                activeSection === link.href
                  ? "text-primary-light"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {activeSection === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-muted hover:text-text-primary transition-colors font-medium"
          >
            GitHub
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="px-4 py-2 text-sm font-medium rounded-lg btn-gradient text-white relative overflow-hidden"
          >
            <span className="relative z-10">Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface transition-all"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-border backdrop-blur-xl bg-background/95 overflow-hidden"
          >
            <div className="container-section py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    activeSection === link.href
                      ? "text-primary-light bg-primary/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface"
                  )}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-3 mt-2 border-t border-border flex flex-col gap-2">
                <a
                  href={PERSONAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-sm text-text-secondary hover:text-text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  GitHub ↗
                </a>
                <a
                  href={`mailto:${PERSONAL.email}`}
                  className="px-4 py-3 text-sm font-medium rounded-lg btn-gradient text-white text-center relative overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">Get in Touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
