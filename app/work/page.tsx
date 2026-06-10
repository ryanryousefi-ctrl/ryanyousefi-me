import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles, type ArticleCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Recent Work",
  description:
    "Sports journalism, local news, and features from Ryan Yousefi - Sports Illustrated, MiamiDolphins.com, Talk Media, and more.",
};

const categories: ArticleCategory[] = [
  "Sports",
  "Local News",
  "Gaming & Technology",
  "Journalism",
  "Opinion & Commentary",
];

const publicationColors: Record<string, string> = {
  "Sports Illustrated": "bg-[#c8102e] text-white",
  "MiamiDolphins.com": "bg-[#008E97] text-white",
  "Talk Media": "bg-[#1a1a1a] text-white",
  "Miami New Times": "bg-[#e63b2e] text-white",
  "UPROXX": "bg-[#000] text-white",
  "Yahoo! Sports": "bg-[#6001D2] text-white",
  "Bleacher Report": "bg-[#f47321] text-white",
  "USA Today": "bg-[#009bff] text-white",
};

function PublicationBadge({ name }: { name: string }) {
  const color = publicationColors[name] ?? "bg-[--ink] text-[--paper]";
  return (
    <span
      className={`inline-block font-[family-name:var(--font-inter)] text-[10px] tracking-widest uppercase px-2.5 py-1 font-semibold ${color}`}
    >
      {name}
    </span>
  );
}

export default function Work() {
  const lead = articles[0];
  const secondary = articles.slice(1, 4);
  const rest = articles.slice(4);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">

      {/* Header */}
      <div className="rule-top pt-5 mb-10 flex items-baseline justify-between">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[--ink]">
          Recent Work
        </h1>
        <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint]">
          Bylines & Features
        </p>
      </div>

      {/* Lead story */}
      {lead && (
        <a
          href={lead.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mb-2"
        >
          <div className="grid md:grid-cols-12 gap-0 border border-[--rule] overflow-hidden hover:border-[--ink] transition-colors">
            <div className="md:col-span-7 relative aspect-[16/9] md:aspect-auto bg-[--paper-warm]">
              {lead.image ? (
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 bg-[--paper-warm]" />
              )}
            </div>
            <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-between bg-[--paper]">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <PublicationBadge name={lead.publication} />
                  {lead.year && (
                    <span className="font-[family-name:var(--font-inter)] text-xs text-[--ink-faint]">
                      {lead.year}
                    </span>
                  )}
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[--ink] leading-snug mb-5 group-hover:text-[--accent] transition-colors">
                  {lead.title}
                </h2>
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-[--ink-muted] leading-relaxed">
                  {lead.summary}
                </p>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--accent] mt-8">
                Read Story →
              </p>
            </div>
          </div>
        </a>
      )}

      {/* Secondary grid — 3 cards */}
      {secondary.length > 0 && (
        <div className="grid md:grid-cols-3 gap-2 mb-2">
          {secondary.map((article) => (
            <a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[--rule] overflow-hidden hover:border-[--ink] transition-colors bg-[--paper]"
            >
              <div className="relative aspect-[16/9] bg-[--paper-warm]">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[--paper-warm]" />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <PublicationBadge name={article.publication} />
                  {article.year && (
                    <span className="font-[family-name:var(--font-inter)] text-xs text-[--ink-faint]">
                      {article.year}
                    </span>
                  )}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[--ink] leading-snug mb-3 group-hover:text-[--accent] transition-colors">
                  {article.title}
                </h3>
                <p className="font-[family-name:var(--font-cormorant)] text-sm text-[--ink-muted] leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Remaining articles — list style */}
      {rest.length > 0 && (
        <div className="border border-[--rule] divide-y divide-[--rule] mb-12">
          {rest.map((article) => (
            <a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-6 p-6 hover:bg-[--paper-warm] transition-colors"
            >
              {article.image && (
                <div className="relative w-28 h-20 flex-shrink-0 overflow-hidden bg-[--paper-warm]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <PublicationBadge name={article.publication} />
                  {article.year && (
                    <span className="font-[family-name:var(--font-inter)] text-xs text-[--ink-faint]">
                      {article.year}
                    </span>
                  )}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-base md:text-lg font-bold text-[--ink] leading-snug group-hover:text-[--accent] transition-colors">
                  {article.title}
                </h3>
                <p className="font-[family-name:var(--font-cormorant)] text-sm text-[--ink-muted] leading-relaxed mt-1 line-clamp-2 hidden md:block">
                  {article.summary}
                </p>
              </div>
              <div className="hidden md:flex items-center flex-shrink-0">
                <span className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint] group-hover:text-[--accent] transition-colors">
                  Read →
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* By category */}
      <div className="rule-top pt-10 mb-10">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[--ink] mb-2">
          Browse by Topic
        </h2>
        <p className="font-[family-name:var(--font-cormorant)] text-lg text-[--ink-muted]">
          Sports, local news, culture, and more.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-[--rule] mb-16">
        {categories.map((category) => {
          const cat = articles.filter((a) => a.category === category);
          if (cat.length === 0) return null;
          return (
            <div key={category} className="bg-[--paper] p-8">
              <h3 className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint] mb-5 pb-3 border-b border-[--rule]">
                {category}
              </h3>
              <ul className="space-y-4">
                {cat.map((article) => (
                  <li key={article.title}>
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3"
                    >
                      <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-wide uppercase text-[--ink-faint] mt-1 flex-shrink-0 w-4">
                        →
                      </span>
                      <span className="font-[family-name:var(--font-playfair)] text-base font-bold text-[--ink] leading-snug group-hover:text-[--accent] transition-colors">
                        {article.title}
                        <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-wide text-[--ink-faint] ml-2 font-normal normal-case">
                          {article.publication}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center rule-top-thin pt-12">
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
