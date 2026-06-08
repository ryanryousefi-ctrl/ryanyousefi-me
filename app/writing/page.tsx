import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing Philosophy",
  description:
    "Ryan Yousefi on sports storytelling, athlete-first journalism, and what it means to communicate with clarity in a world drowning in content.",
};

const principles = [
  {
    number: "01",
    heading: "Sports are the toy department of life",
    body: "Dan LeBatard, the longtime Miami Herald columnist and sports radio pioneer, has a line he comes back to often: sports are the toy department of life. I've carried that with me through every press box, every locker room, every deadline. Sports exist to entertain us. They're not foreign policy. They're not the cure for cancer. They're the thing that makes a city hold its breath together, that gives a kid a reason to stay up past bedtime, that connects generations of families around something that doesn't require any explanation. That's not a small thing. But it does mean the tone should match the stakes, and the stakes are meant to be fun.",
  },
  {
    number: "02",
    heading: "Playful doesn't mean shallow",
    body: "I've written thousands of articles for the Miami New Times, where sports coverage lives alongside nightlife, crime, food, and the general beautiful chaos of South Florida. One of those stories broke the news that Hard Rock Stadium, home of the Miami Dolphins, is built on a Native American burial ground. Yes, really. That story was serious. It was also, in the way only Miami can produce, completely absurd. You can hold both things at once. The best sports writing always does.",
  },
  {
    number: "03",
    heading: "Informative and entertaining are not opposites",
    body: "When I write for Sports Illustrated, I'm covering real angles with real stakes - roster decisions, player development, franchise direction. But I've never believed that serious subjects require a serious face. A piece about why the Dolphins won't hold the No. 1 pick in the 2027 draft can be analytically rigorous and still wink at the reader. Sports fans are smart. They follow advanced metrics and fantasy waiver wires and three-team trade proposals. They can handle nuance. They just don't want to be bored while they absorb it.",
  },
  {
    number: "04",
    heading: "The athlete is never just the stats",
    body: "Numbers tell you what happened. People tell you why it matters. I've built my career on finding the person behind the performance, whether that's a linebacker mentoring the rookie who might take his job, or a second-year running back quietly reinventing his offseason routine. Those stories require access, and access requires trust, and trust is earned by showing up consistently and treating athletes like human beings rather than content opportunities. I've been in this market for over a decade. The relationships are the job.",
  },
  {
    number: "05",
    heading: "Every deadline is a story about priorities",
    body: "Sports journalism runs on deadlines that don't negotiate. A game ends at 11pm and something has to be published by midnight. I've filed thousands of stories in that window and what I've learned is that speed and quality aren't opposites if you've done the preparation. Know the team. Know the history. Know what matters. And know, always, that the person reading it has a choice about how to spend their time. Make it worth their while. Keep it a little fun. That's the job.",
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
          On Sports,
          <br />
          Storytelling &<br />
          Communication
        </h1>
        <p className="font-[family-name:var(--font-cormorant)] text-xl text-[--ink-muted] mt-6 leading-relaxed">
          What I believe about covering athletes, serving fans, and the craft
          of sports journalism done right.
        </p>
      </div>

      {/* Pull quote */}
      <div className="border-l-4 border-[--accent] pl-8 mb-20 max-w-3xl">
        <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[--ink] italic leading-relaxed">
          &ldquo;Sports are the toy department of life. Which means covering them
          well requires the same thing playing with toys does: take it seriously,
          but never forget it&rsquo;s supposed to be fun.&rdquo;
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
          I staked my niche on covering sports with personality. From breaking
          the story that Hard Rock Stadium sits on a Native American burial
          ground in the pages of the Miami New Times, to writing Dolphins
          features for Sports Illustrated with one eyebrow raised and both eyes
          open - the through line has always been the same. Be accurate. Be
          fair. Make it worth reading. And for the love of everything, don&rsquo;t
          make it boring. Dan LeBatard was right. This is the toy department.
          Act like it.
        </p>
        <Link
          href="/work"
          className="font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase text-[--ink] border-b border-[--ink] pb-0.5 hover:text-[--accent] hover:border-[--accent] transition-colors"
        >
          See Recent Work →
        </Link>
      </div>
    </div>
  );
}
