import type { Metadata } from "next";

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
            <div className="aspect-square bg-[--paper-warm] border border-[--rule] flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-[--rule] flex items-center justify-center mb-3">
                <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[--rule]">
                  RY
                </span>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-wide text-[--rule] text-center px-4">
                public/ryan-yousefi.jpg
              </p>
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
              Ryan Yousefi has spent more than a decade asking the questions
              that matter — to the people who matter, in the publications where
              that matters most. He started where most serious journalists
              start: at an alt-weekly, on a beat that nobody else wanted, in a
              city that rewarded the curious and punished the careless.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              That city was Phoenix. The publication was the{" "}
              <em>Phoenix New Times</em>, part of Voice Media Group&rsquo;s
              storied network of alternative newspapers. It was the kind of
              place where you learned to report fast and write clean, where the
              story was never as simple as it looked from the outside, and where
              a restaurant review could double as a dispatch from the front
              lines of a neighborhood in transition. He was good at it. He moved
              to Miami.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-xl leading-loose text-[--ink]">
              South Florida is a particular kind of place to be a journalist.
              The <em>Miami New Times</em> had been covering the city&rsquo;s
              outsized personalities, its corrupt officials, its extraordinary
              food scene, and its impossible nightlife since 1987. Yousefi fit
              right in. He wrote cover features. He broke local stories. He
              developed the kind of readership that doesn&rsquo;t just read
              your byline — it looks for it. His work at the New Times earned
              recognition and built the foundation for what came next.
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
                &ldquo;The alt-weekly tradition taught me that the best
                journalism lives at the intersection of the hyper-local and the
                universally human. I&rsquo;ve tried to carry that with me
                everywhere.&rdquo;
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
