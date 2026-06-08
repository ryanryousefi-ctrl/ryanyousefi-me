"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Recent Work" },
  { href: "/career", label: "Career" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[--rule] bg-[--paper] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-lg font-bold tracking-tight text-[--ink] hover:text-[--accent] transition-colors"
        >
          Ryan Yousefi
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase text-[--ink-muted] hover:text-[--ink] transition-colors ${
                pathname === href ? "text-[--ink] font-medium" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[--ink] transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[--ink] transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[--ink] transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-[--rule] bg-[--paper]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase border-b border-[--rule] text-[--ink-muted] hover:text-[--ink] hover:bg-[--paper-warm] transition-colors ${
                pathname === href ? "text-[--ink] bg-[--paper-warm]" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
