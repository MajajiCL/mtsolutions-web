import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  User,
} from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";
import { JsonLd } from "@/components/ui/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog & Recursos - Eficiencia Operacional, OEE e Industria 4.0",
  description:
    "Artículos técnicos, guías de implementación de OEE, control de paradas de planta, eficiencia energética y casos de éxito reales.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Blog & Recursos", url: "/blog" },
  ]);

  return (
    <div className="pt-32 pb-24 bg-[#090e17] min-h-screen">
      <JsonLd data={breadcrumb} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Conocimiento & Casos de Estudio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Noticias sobre Eficiencia y OEE
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Consejos de expertos, metodologías Lean, reducción de tiempos muertos
            y mejores prácticas para directores de planta e ingenieros de manufactura.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="p-8 rounded-3xl glass-card border border-slate-700/80 hover:border-cyan-500/50 transition-all flex flex-col justify-between group shadow-xl hover:translate-y-[-3px]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>{post.author}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Leer artículo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
