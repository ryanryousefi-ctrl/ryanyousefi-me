import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing Philosophy",
  description:
    "Ryan Yousefi on the craft of storytelling, the discipline of journalism, and why good writing always starts with genuine curiosity.",
};

const principles = [
  {
    number: "01",
    heading: "Start with the person",
    body: "Every story worth telling has a human being at its center. Not a data point. Not a trend. A person — with contradictions, with history, with something to lose. I learned this at alt-weeklies, where the story was never the thing itself but always the people inside it. A restaurant review was really about a family's first attempt at the American dream. A sports profile was really about what happens to an athlete after the cameras stop rolling. Find the person. Everything else follows.",
  },
  {
    number: "02",
    heading: "Respect the reader's time",
    body: "The reader owes you nothing. They have a thousand other things to read, to watch, to do. If you want their attention, you have to earn it in the first sentence, defend it in the first paragraph, and justify it in every line after that. This is not a reason to dumb things down — it is a reason to write with precision, to cut what doesn't earn its place, to say the complicated thing simply without making it simple.",
  },
  {
    number: "03",
    heading: "Curiosity is non-negotiable",
    body: "The best journalists I know are pathologically curious. Not just about their beat — about everything. About how things work, why people do what they do, what the numbers mean, what the silence means. I have covered horse racing in the age of blockchain and restaurant criticism in the age of Yelp, and the common thread in both is that you have to actually want to know. Performed curiosity produces bad journalism. Real curiosity produces everything else.",
  },
  {
    number: "04",
    heading: "The edit is the work",
    body: "First drafts are for the writer. Final drafts are for the reader. The gap between those two things is where the real work happens — in the cuts, the restructuring, the word you finally find after the five words you were settling for. I spent years as an editor before I fully understood this, and what I understood was: the edit is not a concession to failure. The edit is the craft.",
  },
  {
    number: "05",
    heading: "Good writing travels",
    body: "I spent years in alt-weekly journalism, and then I spent time in Web3. The content leadership skills I built in newsrooms translated — to a gaming company's community, to a blockchain project's communications, to a startup's brand voice. The reason is that good writing is not about the subject matter. It is about clarity, empathy, and the discipline of saying what you mean. Those things travel. They always have.",
  },
];

export default function Writing() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-3xl mb-16 rule-top pt-6">
        <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[--ink-faint] mb-4">
          Writing Philosophy
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-[--ink] leading-tight">
          On the Craft
        </h1>
        <p className="font-[family-name:var(--font-cormorant)] text-xl text-[--ink-muted] mt-6 leading-relaxed">
          What I believe about storytelling, journalism, and the responsibility
          that comes with putting words in front of readers.
        </p>
      </div>

      {/* Pull quote */}
      <div className="border-l-4 border-[--accent] pl-8 mb-20 max-w-3xl">
        <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[--ink] italic leading-relaxed">
          &ldquo;A story is a contract between writer and reader. The writer
          promises to tell the truth. The reader promises to pay attention. If
          either side breaks that contract, the story fails.&rdquo;
        </p>
      </div>

      {/* Principles */}
      <div className="max-w-4xl space-y-0 divide-y divide-[--rule]">
        {principles.map((p) => (
          <div key={p.number} className="py-12 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-2">
              <span className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[--rule]">
                {p.number}
              </span>
            </div>
            <div className="md:col-span-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[--ink] mb-5">
                {p.heading}
              </h2>
              <p className="font-[family-name:var(--font-cormorant)] text-xl text-[--ink-muted] leading-relaxed">
                {p.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Closing */}
      <div className="rule-top pt-16 mt-8 max-w-3xl">
        <p className="font-[family-name:var(--font-cormorant)] text-xl text-[--ink-muted] leading-relaxed mb-8">
          These are the principles I have carried from newsrooms to editorial
          offices to gaming companies in Southeast Asia. They are not rules —
          rules break when the story demands it. They are orientations: the
          things I return to when the draft is failing and I need to remember
          why the writing matters.
        </p>
        <Link
          href="/work"
          className="font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase text-[--ink] border-b border-[--ink] pb-0.5 hover:text-[--accent] hover:border-[--accent] transition-colors"
        >
          See the Work →
        </Link>
      </div>
    </div>
  );
}
