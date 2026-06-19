"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Github, Send, CheckCircle, MapPin, Clock } from "lucide-react";
import { PERSONAL } from "@/lib/data";

type FormData = { name: string; email: string; subject: string; message: string };
type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send (integrate with Formspree / Resend / etc.)
    await new Promise((r) => setTimeout(r, 1200));
    // For now, open mail client as fallback
    window.location.href = `mailto:${PERSONAL.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    setStatus("success");
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full bg-surface/60 border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:bg-surface transition-all hover:border-border-light";

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-surface/30" aria-label="Contact">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
      <div className="orb orb-primary w-96 h-96 -left-20 bottom-0 opacity-10 pointer-events-none" />

      <div ref={ref} className="container-section relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-eyebrow">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Let&apos;s build something{" "}
            <span className="gradient-text">together</span>
          </h2>
          <p className="text-text-secondary max-w-xl text-lg">
            Open to senior / staff engineering roles and technical consulting. Respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 space-y-5"
          >
            {[
              { icon: Mail, label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
              { icon: Linkedin, label: "LinkedIn", value: "adalbertosilveiranapoles", href: PERSONAL.linkedin },
              { icon: Github, label: "GitHub", value: "silveiraSoft", href: PERSONAL.github },
              { icon: MapPin, label: "Location", value: "Hialeah, FL 33015 · Remote", href: null },
              { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-widest mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-text-primary hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-text-primary">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability */}
            <div className="glass-card p-4 border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-400">Currently Available</span>
              </div>
              <p className="text-xs text-text-secondary">
                Open to senior engineering roles and consulting engagements. No sponsorship required. 1-month notice period.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-3"
          >
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-semibold text-text-primary mb-5">Send a Message</h3>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-10"
                >
                  <CheckCircle className="w-12 h-12 text-emerald-400 mb-3" />
                  <h4 className="font-semibold text-text-primary mb-1">Message sent!</h4>
                  <p className="text-sm text-text-secondary">
                    Your email client should have opened. I&apos;ll reply within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-xs text-text-muted mb-1.5 block">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={inputClass}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs text-text-muted mb-1.5 block">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className={inputClass}
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-xs text-text-muted mb-1.5 block">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Senior Engineer opportunity at Acme Corp"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs text-text-muted mb-1.5 block">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the role, project, or collaboration..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 rounded-xl font-semibold text-white btn-gradient shadow-glow relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {status === "sending" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-xs text-text-muted text-center">
                    Or email directly:{" "}
                    <a href={`mailto:${PERSONAL.email}`} className="text-primary hover:underline">
                      {PERSONAL.email}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
