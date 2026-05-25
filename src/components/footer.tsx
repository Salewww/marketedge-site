import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[#7C8CF0] flex items-center justify-center text-white font-bold text-xs">M</div>
              <span className="font-bold text-[var(--foreground)]">MarketEdge</span>
            </div>
            <p className="text-xs text-[var(--foreground-muted)]">Market intelligence for teams that can&apos;t afford enterprise pricing.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-3">Product</h4>
            <div className="space-y-2">
              <Link href="/features" className="block text-xs text-[var(--foreground-muted)] hover:text-[var(--foreground)]">Features</Link>
              <Link href="/pricing" className="block text-xs text-[var(--foreground-muted)] hover:text-[var(--foreground)]">Pricing</Link>
              <Link href="/blog" className="block text-xs text-[var(--foreground-muted)] hover:text-[var(--foreground)]">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-3">Company</h4>
            <div className="space-y-2">
              <Link href="/blog" className="block text-xs text-[var(--foreground-muted)] hover:text-[var(--foreground)]">Blog</Link>
              <a href="mailto:hello@marketedge.ai" className="block text-xs text-[var(--foreground-muted)] hover:text-[var(--foreground)]">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-3">Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-xs text-[var(--foreground-muted)] hover:text-[var(--foreground)]">Privacy</a>
              <a href="#" className="block text-xs text-[var(--foreground-muted)] hover:text-[var(--foreground)]">Terms</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--foreground-muted)]">
          © 2026 MarketEdge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
