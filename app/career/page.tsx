import type { Metadata } from "next";
import Link from "next/link";
import { timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "Career",
  description:
    "The career arc of Ryan Yousefi — from alt-weekly reporter to senior editor to communications executive across journalism, sports media, and Web3 gaming.",
};

export default function Career() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-3xl mb-16 rule-top pt-6">
        <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[--ink-faint] mb-4">
          Career
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-[--ink] leading-tight">
          Over a Decade in
          <br />
          Words & Strategy
        </h1>
        <p className="font-[family-name:var(--font-cormorant)] text-xl text-[--ink-muted] mt-6 leading-relaxed">
          From alt-weekly newsrooms to Sports Illustrated to the frontier of
          Web3 gaming — the story of a journalist who followed the story.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl">
        <div className="relative border-l border-[--rule] ml-4 md:ml-0 md:border-l-0">
          {timeline.map((item, i) => (
            <div
              key={item.company}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-12 md:gap-12 mb-16 last:mb-0"
            >
              {/* Period */}
              <div className="md:col-span-3 md:text-right">
                <div className="absolute left-0 md:relative md:left-auto top-1.5 md:top-0 w-2 h-2 rounded-full bg-[--ink] border-2 border-[--paper] md:hidden" />
                <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint] mb-1 md:mb-0 md:pt-1">
                  {item.period}
                </p>
              </div>

              {/* Divider dot (desktop) */}
              <div className="hidden md:flex md:col-span-1 justify-center">
                <div className="relative flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-[--ink] mt-1.5 flex-shrink-0" />
                  {i < timeline.length - 1 && (
                    <div className="flex-1 w-px bg-[--rule] mt-2" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[--ink] leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--accent] mb-4">
                  {item.company}
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-[--ink-muted] leading-relaxed mb-4">
                  {item.description}
                </p>
                {item.authorPage && (
                  <a
                    href={item.authorPage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint] hover:text-[--accent] transition-colors"
                  >
                    Author Page →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-20 rule-top pt-12">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[--ink] mb-8">
          Areas of Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-[--rule]">
          {[
            {
              heading: "Editorial",
              items: [
                "Long-form journalism",
                "Feature writing",
                "Sports coverage",
                "Cultural criticism",
                "Copy editing",
                "Editorial strategy",
              ],
            },
            {
              heading: "Communications",
              items: [
                "Content strategy",
                "Brand voice",
                "Executive communications",
                "Community building",
                "Crisis communications",
                "Marketing copywriting",
              ],
            },
            {
              heading: "Industry Knowledge",
              items: [
                "Sports media",
                "Alt-weekly journalism",
                "Web3 & blockchain",
                "Gaming communities",
                "Digital publishing",
                "Southeast Asia markets",
              ],
            },
          ].map(({ heading, items }) => (
            <div key={heading} className="bg-[--paper] p-8">
              <h3 className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint] mb-5">
                {heading}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="font-[family-name:var(--font-cormorant)] text-lg text-[--ink]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border border-[--ink] text-[--ink] font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase px-7 py-3.5 hover:bg-[--ink] hover:text-[--paper] transition-colors"
        >
          Work Together →
        </Link>
      </div>
    </div>
  );
}
