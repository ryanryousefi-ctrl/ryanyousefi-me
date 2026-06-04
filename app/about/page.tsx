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
              Ryan Yousefi grew up in South Florida — Miami, his hometown — with
              an encyclopedic knowledge of its sports teams and a habit of
              putting his opinions into words. For years, that habit lived where
              most passions do: on the side, something he did because he loved
              it, while he built a career in the healthcare industry and earned
              his master&rsquo;s degree in business healthcare management.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              The writing was never supposed to be a job. It started as a way
              to stay close to the teams he grew up watching, to process the
              games with the same rigor and care he was applying to everything
              else in his professional life. But something happened along the
              way, as it sometimes does when you are genuinely good at
              something: the hobby became a side gig. The side gig developed an
              audience. The audience demanded more. And life, as it tends to do
              when you listen to it, redirected him entirely.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              By the time storytelling became his full-time occupation, Yousefi
              had already built the instincts that would define his career —
              the ability to find the human angle in any story, to write with
              clarity under deadline, and to understand what an audience actually
              wants to read. Those instincts took him from South Florida to the
              pages of the{" "}
              <em>Miami New Times</em>, where he covered the city&rsquo;s food,
              nightlife, and culture for the publication that had been the
              region&rsquo;s journalistic conscience for decades. He wrote cover
              features. He broke local stories. He developed the kind of
              readership that doesn&rsquo;t just read your byline — it looks
              for it.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              Through Voice Media Group, Yousefi rose from staff writer to
              senior editor, overseeing editorial production across multiple
              markets and mentoring a generation of younger journalists learning
              the trade. He understood, intuitively, that the business of
              journalism was changing — that the platforms were shifting, that
              the economics were brutal, that the readers were still there if
              you knew how to reach them. He contributed to UPROXX during this
              period, taking his sports and culture writing to one of the
              web&rsquo;s most distinctive voices.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              Sports Illustrated came next. For millions of American sports
              fans, that name carries a weight that transcends any individual
              story — it is synonymous with the best the craft has to offer.
              Yousefi reported on professional and college sports, contributed
              features and analysis to SI&rsquo;s digital platforms, and found
              himself in the middle of one of the great reinventions in sports
              media history.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              Then he did something unexpected. He went to Vietnam.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              The move was not a departure from journalism — it was a natural
              extension of it. Da Nang had become one of Southeast Asia&rsquo;s
              most dynamic cities, a hub for the kind of entrepreneurial energy
              and technological experimentation that was reshaping whole
              industries. Yousefi joined Third Time Games and its flagship
              product, Photo Finish LIVE — a blockchain-based horse racing
              simulation that was doing something genuinely novel: building a
              passionate, global community around a sport that most people
              thought was dying.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              As Head of Content and Communications, he built the editorial
              voice of a Web3 company from scratch — applying the same
              principles he learned at alt-weeklies to an audience that
              spanned continents and time zones. He hosted workshops at Solana
              Summer Camp, organized community events, and showed that the
              skills honed in Miami newsrooms translated, with surprising ease,
              to the frontier of decentralized technology.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              He splits his time today between Da Nang and South Florida —
              between a city that is inventing itself and a city that has been
              reinventing itself for a hundred years. He is still a journalist.
              He is also, now, a communications strategist, a content leader,
              and someone who has learned that the best story you can tell is
              always the true one.
            </p>

            <div className="border-l-2 border-[--accent] pl-8 my-12">
              <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[--ink] italic leading-relaxed">
                &ldquo;I didn&rsquo;t plan to become a writer. I just never
                stopped writing — and eventually the world caught up with what
                I already knew I was.&rdquo;
              </p>
            </div>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              Yousefi is available for editorial consulting, communications
              strategy, content leadership, and select writing engagements.
              He&rsquo;s also, occasionally, available for a conversation about
              horse racing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
