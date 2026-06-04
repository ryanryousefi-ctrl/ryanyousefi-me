import type { Metadata } from "next";
import Link from "next/link";
import { speakingItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Speaking & Media",
  description:
    "Ryan Yousefi on panels, podcasts, workshops, and conferences — speaking on journalism, content strategy, Web3, and storytelling.",
};

const formatColors: Record<string, string> = {
  Workshop: "bg-[--paper-warm] text-[--ink-muted]",
  "Panel Discussion": "bg-[--paper-warm] text-[--ink-muted]",
  Keynote: "bg-[--ink] text-[--paper]",
  "Podcast / Radio": "bg-[--paper-warm] text-[--ink-muted]",
};

export default function Speaking() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-3xl mb-16 rule-top pt-6">
        <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[--ink-faint] mb-4">
          Speaking & Media
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-[--ink] leading-tight">
          On Stage &
          <br />
          On the Record
        </h1>
        <p className="font-[family-name:var(--font-cormorant)] text-xl text-[--ink-muted] mt-6 leading-relaxed">
          Panels, workshops, keynotes, and media appearances on journalism,
          storytelling, content strategy, and the future of media.
        </p>
      </div>

      {/* Speaking items */}
      <div className="space-y-px bg-[--rule] mb-20">
        {speakingItems.map((item) => (
          <div key={item.title} className="bg-[--paper] p-8 md:p-10">
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-2">
                <p className="font-[family-name:var(--font-inter)] text-xs text-[--ink-faint] mb-3">
                  {item.year}
                </p>
                <span
                  className={`inline-block font-[family-name:var(--font-inter)] text-[10px] tracking-widest uppercase px-2.5 py-1 ${
                    formatColors[item.format] ||
                    "bg-[--paper-warm] text-[--ink-muted]"
                  }`}
                >
                  {item.format}
                </span>
              </div>
              <div className="md:col-span-10">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[--ink] leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--accent] mb-4">
                  {item.event}
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-[--ink-muted] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Invite section */}
      <div className="bg-[--paper-warm] border border-[--rule] p-10 md:p-14">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[--ink] mb-4">
            Invite Ryan to Speak
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[--ink-muted] leading-relaxed mb-8">
            Ryan is available for panels, keynotes, workshops, and podcast
            appearances on topics spanning journalism, content strategy,
            storytelling, Web3, and the future of media. He brings a
            practitioner&rsquo;s perspective shaped by more than a decade of
            reporting, editing, and communications leadership.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {[
              "Journalism & Reporting",
              "Content Strategy",
              "Storytelling",
              "Web3 & Gaming",
              "Sports Media",
              "Editorial Leadership",
            ].map((topic) => (
              <span
                key={topic}
                className="font-[family-name:var(--font-inter)] text-xs tracking-wide uppercase border border-[--rule] px-4 py-2 text-[--ink-muted]"
              >
                {topic}
              </span>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[--ink] text-[--paper] font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase px-7 py-3.5 hover:bg-[--accent] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
