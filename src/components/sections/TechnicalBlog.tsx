"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, Tag, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";

export function TechnicalBlog() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="blog" className="relative py-24 md:py-32 bg-surface/30" aria-label="Technical Blog">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
      <div className="orb orb-cyan w-80 h-80 -right-20 top-1/3 opacity-10 pointer-events-none" />

      <div ref={ref} className="container-section relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-eyebrow">Technical Blog</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Sharing what I{" "}
            <span className="gradient-text">learn building</span>
          </h2>
          <p className="text-text-secondary max-w-xl text-lg">
            Deep dives into AI agents, reactive programming, event-driven architecture, and cloud-native patterns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
            <Link href={`/blog/${post.slug}`} className="block glass-card p-5 md:p-6 group cursor-pointer hover:border-white/20 transition-colors">
              {/* Gradient top border */}
              <div className="h-[2px] w-full rounded-full mb-5" style={{ background: `linear-gradient(90deg, ${post.color}, transparent)` }} />

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center gap-1 text-xs text-text-muted">
                  <Clock className="w-3 h-3" />
                  {post.readTime} read
                </span>
                <span className="text-text-muted">·</span>
                <span className="text-xs text-text-muted">{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-text-primary text-base leading-snug mb-2 group-hover:text-white transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{post.excerpt}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 tech-badge">
                    <Tag className="w-2.5 h-2.5" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Read article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            </motion.article>
          ))}
        </div>

        {/* Blog CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="http://adalbertosilveira.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm text-text-secondary hover:text-text-primary hover:border-border-light transition-all group"
          >
            <BookOpen className="w-4 h-4" />
            <span>View all posts on blog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
