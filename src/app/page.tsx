import Link from "next/link";

const features = [
  { icon: "🎯", title: "Competitor Tracking", desc: "Monitor competitor pricing, positioning, and changes in real-time. Know before your customers do." },
  { icon: "🤖", title: "AI Citations Tracking", desc: "See what AI tools (ChatGPT, Claude, Perplexity) say about your brand vs competitors. Zero competition in this space." },
  { icon: "📊", title: "Market Signals", desc: "Automated intelligence reports on market movements, new entrants, and industry shifts." },
  { icon: "🔔", title: "Real-Time Alerts", desc: "Get notified the moment a competitor changes pricing, launches a feature, or gets mentioned." },
  { icon: "📈", title: "AI Visibility Score", desc: "Track your share of voice across AI platforms. Are you winning or losing?" },
  { icon: "🔌", title: "API Access", desc: "Integrate MarketEdge data into your existing workflows and dashboards." },
];

const steps = [
  { num: "1", title: "Connect", desc: "Add your competitors and brand keywords. Takes 2 minutes." },
  { num: "2", title: "Monitor", desc: "Our AI scans the web, tracks changes, and monitors AI citations 24/7." },
  { num: "3", title: "Act", desc: "Get alerts and reports. Make data-driven decisions before competitors." },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[var(--accent)]/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[80px]" />
        </div>
        <div className="container relative z-10 text-center max-w-4xl">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)] animate-pulse" />
              <span className="text-xs text-[var(--accent)] font-medium">Now tracking AI citations — zero competition</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Market intelligence for teams that<br />
              <span className="gradient-text">can&apos;t afford $50K/yr</span>
            </h1>
            <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
              Track competitors, monitor market signals, and see what AI says about your brand.
              10x cheaper than Crayon, Klue, or Contify. Start in 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="cta-button">
                Start Free Trial →
              </Link>
              <Link href="/features" className="px-8 py-3.5 rounded-xl border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors font-medium">
                See Features
              </Link>
            </div>
            <p className="text-xs text-[var(--foreground-muted)] mt-4">No credit card required · 14-day free trial · Cancel anytime</p>
          </div>

          {/* Social proof */}
          <div className="mt-16 animate-slide-up animate-delay-2">
            <p className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider mb-4">Trusted by growth teams at</p>
            <div className="flex items-center justify-center gap-8 opacity-40">
              {["Startup Inc", "Growth Co", "Scale Labs", "DataFlow"].map((name) => (
                <span key={name} className="text-sm font-semibold text-[var(--foreground-muted)]">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section border-t border-[var(--border)]">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise tools are broken.</h2>
          <p className="text-lg text-[var(--foreground-muted)] mb-8">
            Crayon costs $50,000/year. Klue is enterprise-only. Contify requires a sales call just to see pricing.
            If you&apos;re a startup or small team, you&apos;re out of luck.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { tool: "Crayon", price: "$50K+/yr", tag: "Enterprise only" },
              { tool: "Klue", price: "Custom", tag: "Enterprise only" },
              { tool: "Contify", price: "Custom", tag: "Enterprise only" },
            ].map((c) => (
              <div key={c.tool} className="glass-card p-4 opacity-60">
                <div className="text-sm font-semibold text-[var(--foreground)]">{c.tool}</div>
                <div className="text-lg font-bold text-red-400 mt-1">{c.price}</div>
                <div className="text-[10px] text-[var(--foreground-muted)] mt-1">{c.tag}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="inline-block glass-card p-4 border-[var(--accent)]/30">
              <div className="text-sm font-semibold text-[var(--foreground)]">MarketEdge</div>
              <div className="text-lg font-bold text-[var(--accent-secondary)] mt-1">$29/mo</div>
              <div className="text-[10px] text-[var(--foreground-muted)] mt-1">Start immediately</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section border-t border-[var(--border)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need. Nothing you don&apos;t.</h2>
            <p className="text-[var(--foreground-muted)] max-w-xl mx-auto">Built for teams that need enterprise-grade intelligence without the enterprise price tag.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-6">
                <span className="text-2xl mb-3 block">{f.icon}</span>
                <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--foreground-muted)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section border-t border-[var(--border)]">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start in 2 minutes</h2>
          </div>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.num} className="glass-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] font-bold shrink-0">
                  {s.num}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--foreground)] mb-1">{s.title}</h3>
                  <p className="text-sm text-[var(--foreground-muted)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-[var(--border)]">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to stop flying blind?</h2>
          <p className="text-[var(--foreground-muted)] mb-8">First 10 clients lock in 50% off forever. Don&apos;t miss out.</p>
          <Link href="/pricing" className="cta-button text-lg">
            Get Started Now →
          </Link>
          <p className="text-xs text-[var(--foreground-muted)] mt-4">14-day free trial · No credit card · Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}
