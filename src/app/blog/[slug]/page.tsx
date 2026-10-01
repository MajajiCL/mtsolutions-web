import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Tag,
  Share2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  getArticleSchema,
  getBreadcrumbSchema,
  SITE_URL,
} from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Artículo no encontrado" };
  }

  return {
    title: `${post.title} | MT Solutions Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumb = getBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    authorName: post.author,
  });

  return (
    <div className="pt-28 pb-24 bg-[#090e17] min-h-screen">
      <JsonLd data={[breadcrumb, articleSchema]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <Link href="/blog" className="hover:text-cyan-400 transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-cyan-400 font-semibold truncate max-w-xs">
            {post.title}
          </span>
        </nav>

        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al listado de artículos</span>
        </Link>

        {/* Article Header */}
        <header className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.publishedAt}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-slate-400 pt-2 border-t border-slate-800">
            <User className="w-4 h-4 text-cyan-400" />
            <span>Por <strong className="text-slate-200">{post.author}</strong></span>
          </div>
        </header>

        {/* Article Body */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-slate-700/80 shadow-2xl mb-12">
          <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-6 text-sm sm:text-base">
            {post.content.split("\n\n").map((paragraph, idx) => {
              const text = paragraph.trim();
              if (text.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-2xl font-bold text-white pt-4">
                    {text.replace("### ", "")}
                  </h3>
                );
              }
              if (text.startsWith("#### ")) {
                return (
                  <h4 key={idx} className="text-lg font-bold text-cyan-400 pt-2">
                    {text.replace("#### ", "")}
                  </h4>
                );
              }
              if (text.startsWith("- ")) {
                const items = text.split("\n").map((line) => line.replace("- ", ""));
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-1.5 text-slate-300">
                    {items.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="text-slate-300 leading-relaxed">
                  {text}
                </p>
              );
            })}
          </div>
        </div>

        {/* Bottom Conversion Box */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-cyan-500/30 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            ¿Quieres aplicar estas mejoras en tu planta?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-6">
            Nuestros especialistas pueden realizar un diagnóstico preliminar de tu piso de planta sin costo.
          </p>
          <Link
            href="/contacto"
            className="px-6 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 hover:from-cyan-300 transition-all inline-block"
          >
            Solicitar Demostración en Vivo
          </Link>
        </div>
      </div>
    </div>
  );
}
