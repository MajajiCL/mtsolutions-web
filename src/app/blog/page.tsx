import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  ArrowRight,
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
    <div className="pt-32 pb-24 bg-[#f8fafc] min-h-screen">
      <JsonLd data={breadcrumb} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Conocimiento & Casos de Estudio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Noticias sobre Eficiencia y OEE
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Consejos de expertos, metodologías Lean, reducción de tiempos muertos
            y mejores prácticas para directores de planta e ingenieros de manufactura.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1.5">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>{post.author}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
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
