import type { Metadata } from "next";
import Link from "next/link";
import { publications, articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ryan Yousefi — Journalist, Editor & Communications Executive",
  description:
    "Award-winning journalist, editor, and communications executive. Work featured in Sports Illustrated, Miami New Times, UPROXX, and more.",
};

export default function Home() {
  const featured = articles.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Text */}
          <div className="md:col-span-7 animate-fade-in">
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[--ink-faint] mb-6">
              Journalist · Editor · Storyteller
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold leading-[1.05] text-[--ink] mb-8">
              Ryan
              <br />
              Yousefi
            </h1>
            <div className="w-12 h-0.5 bg-[--accent] mb-8" />
            <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[--ink-muted] leading-relaxed max-w-xl">
              Award-winning journalist, editor, and communications executive
              whose work has appeared in Sports Illustrated, Miami New Times,
              Phoenix New Times, UPROXX, and Voice Media Group publications.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 bg-[--ink] text-[--paper] font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase px-7 py-3.5 hover:bg-[--accent] transition-colors"
              >
                Selected Work
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-[--ink] text-[--ink] font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase px-7 py-3.5 hover:bg-[--ink] hover:text-[--paper] transition-colors"
              >
                About
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="md:col-span-5 animate-fade-in-delay-1">
            <div className="aspect-[3/4] bg-[--paper-warm] border border-[--rule] relative overflow-hidden">
              {/* Placeholder — replace with actual LinkedIn photo at public/ryan-yousefi.jpg */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[--ink-faint]">
                <div className="w-24 h-24 rounded-full border-2 border-[--rule] mb-4 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[--rule]">
                    RY
                  </span>
                </div>
                <p className="font-[family-name:var(--font-inter)] text-xs tracking-wide text-[--rule]">
                  Place headshot at
                </p>
                <p className="font-[family-name:var(--font-inter)] text-xs tracking-wide text-[--rule]">
                  public/ryan-yousefi.jpg
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications bar */}
      <section className="border-y border-[--rule] bg-[--paper-warm] py-8 animate-fade-in-delay-2">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[--ink-faint] text-center mb-6">
            Work featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {publications.map((pub) => (
              <span
                key={pub.name}
                className="font-[family-name:var(--font-playfair)] text-sm md:text-base font-semibold text-[--ink-muted] tracking-wide"
              >
                {pub.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between mb-10 rule-top pt-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[--ink]">
            Recent Work
          </h2>
          <Link
            href="/work"
            className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint] hover:text-[--ink] transition-colors"
          >
            All Work →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[--rule]">
          {featured.map((article) => (
            <article
              key={article.title}
              className="article-card bg-[--paper] p-8 flex flex-col gap-4"
            >
              <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--accent]">
                {article.publication}
              </p>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[--ink] leading-snug">
                {article.title}
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-base text-[--ink-muted] leading-relaxed flex-1">
                {article.summary}
              </p>
              <Link
                href={article.href}
                className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint] hover:text-[--accent] transition-colors mt-auto"
              >
                Read →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Intro pull quote */}
      <section className="bg-[--ink] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="font-[family-name:var(--font-cormorant)] text-2xl md:text-4xl text-[--paper] leading-relaxed font-light italic">
            &ldquo;Every story worth telling has a human being at its center.
            My job is to find that person and get out of their way.&rdquo;
          </blockquote>
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--paper] opacity-50 mt-8">
            — Ryan Yousefi
          </p>
        </div>
      </section>

      {/* Career snapshot */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 rule-top pt-6">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[--ink] mb-2">
              10+
            </p>
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint]">
              Years in Journalism & Media
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[--ink] mb-2">
              6+
            </p>
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint]">
              Major Publications
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[--ink] mb-2">
              3
            </p>
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint]">
              Industries: Media, Gaming, Web3
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/career"
            className="font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase text-[--ink] border-b border-[--ink] pb-0.5 hover:text-[--accent] hover:border-[--accent] transition-colors"
          >
            View Full Career →
          </Link>
        </div>
      </section>
    </>
  );
}
