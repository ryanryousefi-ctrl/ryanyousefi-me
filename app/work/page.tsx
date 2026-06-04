import type { Metadata } from "next";
import Link from "next/link";
import { articles, type ArticleCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Journalism, sports writing, cultural criticism, and more — selected work from Ryan Yousefi's career across Sports Illustrated, Miami New Times, UPROXX, and beyond.",
};

const categories: ArticleCategory[] = [
  "Journalism",
  "Sports",
  "Gaming & Technology",
  "Local News",
  "Opinion & Commentary",
];

export default function Work() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-3xl mb-16 rule-top pt-6">
        <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[--ink-faint] mb-4">
          Selected Work
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-[--ink] leading-tight">
          Stories Worth
          <br />
          Telling
        </h1>
        <p className="font-[family-name:var(--font-cormorant)] text-xl text-[--ink-muted] mt-6 leading-relaxed">
          A selection of journalism, features, and criticism spanning sports,
          culture, technology, and local news.
        </p>
      </div>

      {/* Articles by category */}
      {categories.map((category) => {
        const categoryArticles = articles.filter(
          (a) => a.category === category
        );
        if (categoryArticles.length === 0) return null;

        return (
          <section key={category} className="mb-16">
            <div className="rule-top pt-5 mb-8">
              <h2 className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[--ink-faint]">
                {category}
              </h2>
            </div>

            <div className="space-y-px bg-[--rule]">
              {categoryArticles.map((article) => (
                <article
                  key={article.title}
                  className="article-card bg-[--paper] grid md:grid-cols-12 gap-6 p-8"
                >
                  <div className="md:col-span-2">
                    <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--accent]">
                      {article.publication}
                    </p>
                    {article.year && (
                      <p className="font-[family-name:var(--font-inter)] text-xs text-[--ink-faint] mt-1">
                        {article.year}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[--ink] leading-snug mb-3">
                      {article.title}
                    </h3>
                    <p className="font-[family-name:var(--font-cormorant)] text-base text-[--ink-muted] leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                  <div className="md:col-span-2 flex md:justify-end items-start">
                    <Link
                      href={article.href}
                      className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint] hover:text-[--accent] transition-colors whitespace-nowrap"
                    >
                      Read →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <div className="rule-top-thin pt-12 mt-8 text-center">
        <p className="font-[family-name:var(--font-cormorant)] text-xl text-[--ink-muted] mb-6">
          Interested in working together?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[--ink] text-[--paper] font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase px-7 py-3.5 hover:bg-[--accent] transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
