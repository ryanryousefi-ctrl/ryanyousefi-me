import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ryan Yousefi for editorial work, communications consulting, speaking engagements, and media inquiries.",
};

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-3xl mb-20 rule-top pt-6">
        <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[--ink-faint] mb-4">
          Contact
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-[--ink] leading-tight">
          Let&rsquo;s Talk
        </h1>
        <p className="font-[family-name:var(--font-cormorant)] text-xl text-[--ink-muted] mt-6 leading-relaxed max-w-xl">
          Whether you&rsquo;re looking for a writer, an editor, a
          communications strategist, or a speaker — reach out. The best
          conversations start with a simple message.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-16">
        {/* Contact areas */}
        <div className="md:col-span-5 space-y-10">
          {[
            {
              heading: "Editorial & Writing",
              body: "Freelance journalism, feature writing, ghostwriting, and editorial consulting for publications and brands.",
            },
            {
              heading: "Communications Strategy",
              body: "Content strategy, brand voice development, executive communications, and marketing leadership for companies in media, gaming, and technology.",
            },
            {
              heading: "Speaking & Panels",
              body: "Available for keynotes, panel discussions, workshops, and podcast appearances on journalism, storytelling, content, and Web3.",
            },
            {
              heading: "Media Inquiries",
              body: "For press, interviews, and media requests — please include the outlet, topic, and deadline.",
            },
          ].map(({ heading, body }) => (
            <div key={heading} className="rule-top-thin pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[--ink] mb-2">
                {heading}
              </h2>
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-[--ink-muted] leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="md:col-span-7">
          <form
            action="mailto:ryanyousefi@gmail.com"
            method="get"
            encType="text/plain"
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint] mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-[--rule] bg-[--paper] px-4 py-3 font-[family-name:var(--font-cormorant)] text-lg text-[--ink] placeholder-[--rule] focus:outline-none focus:border-[--ink] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint] mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-[--rule] bg-[--paper] px-4 py-3 font-[family-name:var(--font-cormorant)] text-lg text-[--ink] placeholder-[--rule] focus:outline-none focus:border-[--ink] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint] mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="w-full border border-[--rule] bg-[--paper] px-4 py-3 font-[family-name:var(--font-cormorant)] text-lg text-[--ink] placeholder-[--rule] focus:outline-none focus:border-[--ink] transition-colors"
                placeholder="Editorial, Speaking, Consulting, etc."
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="body"
                rows={8}
                required
                className="w-full border border-[--rule] bg-[--paper] px-4 py-3 font-[family-name:var(--font-cormorant)] text-lg text-[--ink] placeholder-[--rule] focus:outline-none focus:border-[--ink] transition-colors resize-none"
                placeholder="Tell me about your project, publication, or inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-[--ink] text-[--paper] font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase px-10 py-4 hover:bg-[--accent] transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Direct contact */}
          <div className="rule-top-thin pt-8 mt-10">
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint] mb-3">
              Or reach out directly
            </p>
            <a
              href="https://www.linkedin.com/in/ryan-yousefi/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-cormorant)] text-xl text-[--ink] hover:text-[--accent] transition-colors"
            >
              linkedin.com/in/ryan-yousefi →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
