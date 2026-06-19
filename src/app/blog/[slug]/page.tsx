import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, PERSONAL } from "@/lib/data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Adalberto Silveira Napoles`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

function renderContent(markdown: string) {
  const lines = markdown.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // Code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <div key={key++} className="my-5 rounded-xl overflow-hidden border border-white/10">
          {lang && (
            <div className="px-4 py-1.5 bg-white/5 text-xs text-slate-400 font-mono border-b border-white/10">
              {lang}
            </div>
          )}
          <pre className="p-4 overflow-x-auto bg-black/40 text-sm leading-relaxed">
            <code className="text-slate-200 font-mono">{codeLines.join("\n")}</code>
          </pre>
        </div>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph — inline markdown (bold, italic, inline code, links)
    const renderInline = (text: string): React.ReactNode => {
      const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);
      return parts.map((part, idx) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return <code key={idx} className="px-1.5 py-0.5 rounded bg-white/10 text-indigo-300 font-mono text-sm">{part.slice(1, -1)}</code>;
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={idx} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={idx} className="text-slate-300 italic">{part.slice(1, -1)}</em>;
        }
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          return <a key={idx} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">{linkMatch[1]}</a>;
        }
        return part;
      });
    };

    elements.push(
      <p key={key++} className="text-slate-300 leading-relaxed mb-4 text-[1.0625rem]">
        {renderInline(line)}
      </p>
    );
    i++;
  }
  return elements;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post || !post.content) notFound();

  const postIndex = BLOG_POSTS.indexOf(post);
  const prev = BLOG_POSTS[postIndex + 1] ?? null;
  const next = BLOG_POSTS[postIndex - 1] ?? null;

  return (
    <div className="min-h-screen bg-background text-text-primary pt-16 md:pt-[72px]">
      {/* Top gradient accent */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${post.color}, transparent)` }} />

      {/* Back nav */}
      <div className="container-section pt-8 pb-0">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to portfolio
        </Link>
      </div>

      {/* Article */}
      <article className="container-section py-12 max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium border"
                style={{ color: post.color, borderColor: post.color + "40", backgroundColor: post.color + "15" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              {post.readTime} read
            </span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span className="text-white font-medium">Adalberto Silveira Napoles</span>
          </div>

          <p className="mt-5 text-lg text-slate-300 leading-relaxed border-l-2 pl-4" style={{ borderColor: post.color }}>
            {post.excerpt}
          </p>
        </header>

        {/* Content */}
        <div className="prose-custom">
          {renderContent(post.content)}
        </div>

        {/* Author card */}
        <div className="mt-14 p-6 glass-card rounded-xl border border-white/10 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full btn-gradient flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">
            A
          </div>
          <div>
            <p className="font-semibold text-white">Adalberto Silveira Napoles</p>
            <p className="text-sm text-slate-400 mt-0.5">Senior Software Engineer · 18+ years · Java, Spring Boot, AWS, AI</p>
            <div className="flex gap-3 mt-2">
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-400 hover:text-indigo-300">GitHub</a>
              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-400 hover:text-indigo-300">LinkedIn</a>
              <a href={`mailto:${PERSONAL.email}`} className="text-xs text-indigo-400 hover:text-indigo-300">Email</a>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        {(prev || next) && (
          <nav className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev && (
              <Link href={`/blog/${prev.slug}`} className="glass-card p-4 rounded-xl hover:border-white/20 transition-colors group">
                <p className="text-xs text-slate-500 mb-1">← Previous</p>
                <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors line-clamp-2">{prev.title}</p>
              </Link>
            )}
            {next && (
              <Link href={`/blog/${next.slug}`} className="glass-card p-4 rounded-xl hover:border-white/20 transition-colors group sm:text-right sm:ml-auto">
                <p className="text-xs text-slate-500 mb-1">Next →</p>
                <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors line-clamp-2">{next.title}</p>
              </Link>
            )}
          </nav>
        )}
      </article>
    </div>
  );
}
