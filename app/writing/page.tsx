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
    heading: "The athlete is never just the stats",
    body: "I grew up watching the Dolphins in a city that lives and breathes its sports teams. What I learned early - and what every good sports story has confirmed - is that the numbers are never the story. The story is always the person carrying them. What drives a linebacker to mentor the rookie who might take his job? What does a second-year running back do differently in the weight room when he knows the whole season is riding on him? That's the story. I write toward that every time.",
  },
  {
    number: "02",
    heading: "Context is what separates journalism from content",
    body: "Anyone can report what happened. The job of a sports journalist is to explain why it matters - to the team, to the city, to the fan who has been showing up for thirty years. When I write about the Dolphins, I'm writing for the person who watched Dan Marino and is now watching their kid grow up with a new quarterback. That context isn't background noise. It's the whole point.",
  },
  {
    number: "03",
    heading: "Access means nothing without trust",
    body: "The best sports stories I've written came from athletes who chose to be honest because they believed I'd treat them fairly. That trust isn't given - it's earned by showing up consistently, asking real questions, and never burning a source for a headline. I've been covering South Florida sports for over a decade. The relationships I've built in that time are the most valuable thing I have as a reporter.",
  },
  {
    number: "04",
    heading: "Great sports communication moves fans, not just reporters",
    body: "I've worked on both sides - as the journalist asking the questions and as the communications professional shaping the message. The lesson is the same from both chairs: fans are smart, they're emotionally invested, and they can tell when they're being handled. The best team communications I've been part of treated fans like the stakeholders they are. That's not a PR strategy. That's just respect.",
  },
  {
    number: "05",
    heading: "Every deadline is a story about priorities",
    body: "Sports journalism runs on deadlines that don't negotiate. A game ends at 11pm and something has to be published by midnight. I've written thousands of news stories in that window - across sports, crime, breaking news - and what I've learned is that speed and quality aren't opposites if you've done the preparation. Know the team. Know the history. Know what matters. Then you can write fast and write well.",
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
          &ldquo;The box score tells you who won. The story tells you what it
          meant. My job has always been the second part.&rdquo;
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
          I started writing about sports because I loved the games. I kept
          writing because I loved the people inside them - the ones the cameras
          follow and the ones they don&rsquo;t. That hasn&rsquo;t changed. What
          has changed is that I now understand how to bring that same commitment
          to every kind of sports communication, from a breaking news brief to
          a longform franchise feature to a team&rsquo;s brand voice. The work
          is different. The standard is the same.
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
