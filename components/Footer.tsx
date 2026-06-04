import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[--ink] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[--ink]">
              Ryan Yousefi
            </p>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[--ink-faint] mt-1 tracking-wide">
              Journalist · Editor · Storyteller
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { href: "/about", label: "About" },
              { href: "/work", label: "Work" },
              { href: "/career", label: "Career" },
              { href: "/writing", label: "Writing" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-muted] hover:text-[--ink] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-[--rule] mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[--ink-faint]">
            © {new Date().getFullYear()} Ryan Yousefi. All rights reserved.
          </p>
          <a
            href="https://www.linkedin.com/in/ryan-yousefi/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[--ink-faint] hover:text-[--ink] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
