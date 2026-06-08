import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ryan Yousefi is an award-winning journalist, editor, and communications executive with more than a decade of experience across print, digital, and emerging media.",
};

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-3xl mb-16 rule-top pt-6">
        <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[--ink-faint] mb-4">
          About
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-[--ink] leading-tight">
          The Long Version
        </h1>
      </div>

      <div className="grid md:grid-cols-12 gap-16">
        {/* Sidebar */}
        <aside className="md:col-span-3 order-2 md:order-1">
          <div className="sticky top-24 space-y-8">
            {/* Portrait placeholder */}
            <div className="aspect-square bg-[--paper-warm] border border-[--rule] relative overflow-hidden">
              <Image
                src="/ryan-yousefi.jpg"
                alt="Ryan Yousefi"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="rule-top-thin pt-6 space-y-4">
              <div>
                <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-widest uppercase text-[--ink-faint] mb-1">
                  Based in
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-base text-[--ink]">
                  Da Nang, Vietnam
                  <br />& South Florida
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-widest uppercase text-[--ink-faint] mb-1">
                  Currently
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-base text-[--ink]">
                  Head of Content,
                  <br />
                  Third Time Games
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-widest uppercase text-[--ink-faint] mb-1">
                  Work featured in
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-base text-[--ink] leading-relaxed">
                  Sports Illustrated
                  <br />
                  Miami New Times
                  <br />
                  MiamiDolphins.com
                  <br />
                  Phoenix New Times
                  <br />
                  UPROXX
                  <br />
                  Voice Media Group
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Bio */}
        <div className="md:col-span-9 order-1 md:order-2">
          <div className="prose-editorial max-w-none">
            <p className="drop-cap font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              I grew up in Miami - born and raised in South Florida, where the
              sports teams are your religion and the humidity is non-negotiable.
              For a long time, writing about those teams was just something I
              did because I loved it, a way to stay close to the games while I
              built a career in the healthcare industry and worked toward my
              master&rsquo;s degree in business healthcare management.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              I never planned for it to become a profession. That&rsquo;s not
              how it works, usually. The hobby becomes a side gig. The side gig
              finds an audience. The audience keeps showing up. And eventually
              you have to make a decision about what kind of life you actually
              want to live. I chose the words.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              That decision brought me to the{" "}
              <em>Miami New Times</em> - the publication that has been covering
              this city&rsquo;s food, nightlife, culture, and chaos since before
              I was old enough to read it. I&rsquo;ve been contributing there
              since 2013. I&rsquo;ve written cover features and broken local
              stories, covered restaurants and crime scenes, nightlife and
              neighborhood politics. Miami is a complicated, beautiful, maddening
              city, and I have never gotten tired of writing about it.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              Along the way I picked up a stint at the{" "}
              <em>Phoenix New Times</em> - same alt-weekly DNA, different desert
              energy - and found a long home at Talk Media, where I&rsquo;ve
              written thousands of news stories spanning sports, crime, food,
              culture, and breaking news. Through Voice Media Group, I moved
              from staff writer to senior editor, overseeing editorial across
              multiple markets. I contributed to UPROXX, bringing sports and
              culture writing to one of the web&rsquo;s sharpest platforms.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              Sports Illustrated is a name that carries weight - it means
              something to anyone who grew up with a copy on the coffee table.
              Getting to contribute there has been one of the genuine honors of
              my career. I cover professional and college sports, write features
              and analysis, and try to bring the same curiosity I developed in
              alt-weekly newsrooms to one of the biggest stages in American
              sports media.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              Then I did something unexpected. I went to Vietnam.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              Da Nang turned out to be the right place at the right time. I
              joined Third Time Games and its flagship product, Photo Finish
              LIVE - a blockchain-based horse racing simulation with a genuinely
              passionate global community - as Head of Content and
              Communications. I built the editorial voice from scratch, hosted
              workshops at Solana Summer Camp, managed community events, and
              discovered that the skills I developed in Miami newsrooms
              translated, with surprising ease, to the frontier of Web3 gaming.
              Before that I was Director of Content at Virtual Human Studios,
              one of the original juggernauts in blockchain gaming, where I
              learned what it means to tell stories for a community that
              doesn&rsquo;t yet have the vocabulary for what it&rsquo;s building.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              I split my time today between Da Nang and South Florida - between
              a city that is inventing itself and the city that made me. I am
              still a journalist. I am also a communications strategist, a
              content leader, and someone who has learned that the best story
              you can tell is always the true one.
            </p>

            <div className="border-l-2 border-[--accent] pl-8 my-12">
              <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[--ink] italic leading-relaxed">
                &ldquo;I didn&rsquo;t plan to become a writer. I just never
                stopped writing - and eventually the world caught up with what
                I already knew I was.&rdquo;
              </p>
            </div>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              I&rsquo;m available for editorial consulting, communications
              strategy, content leadership, and select writing engagements.
              I&rsquo;m also, occasionally, available for a conversation about
              horse racing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
