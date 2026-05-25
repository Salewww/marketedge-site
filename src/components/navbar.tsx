"use client";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-deep)]/80 backdrop-blur-xl border-b border-[var(--border)]">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[#7C8CF0] flex items-center justify-center text-white font-bold text-sm">M</div>
          <span className="text-lg font-bold text-[var(--foreground)]">MarketEdge</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">Features</Link>
          <Link href="/pricing" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">Pricing</Link>
          <Link href="/blog" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">Blog</Link>
          <Link href="/pricing" className="cta-button text-sm !py-2.5 !px-5">Get Started</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-[var(--foreground-muted)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-base)] p-4 space-y-3">
          <Link href="/features" className="block text-sm text-[var(--foreground-muted)]" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/pricing" className="block text-sm text-[var(--foreground-muted)]" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/blog" className="block text-sm text-[var(--foreground-muted)]" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/pricing" className="cta-button text-sm !py-2.5 !px-5 block text-center" onClick={() => setOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
}
