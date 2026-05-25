import Link from "next/link";

const features = [
  {
    icon: "🎯",
    title: "Competitor Tracking",
    desc: "Monitor up to 100+ competitors simultaneously. Track pricing changes, new features, hiring, content updates, and market positioning — all automated.",
    details: ["Pricing change detection", "Feature launch tracking", "Content updates", "Job posting monitoring"],
  },
  {
    icon: "🤖",
    title: "AI Citations Tracking",
    desc: "The first tool to track what AI says about your brand. See when ChatGPT, Claude, Perplexity, or Gemini mention you or your competitors.",
    details: ["ChatGPT monitoring", "Claude tracking", "Perplexity citations", "Visibility scoring"],
  },
  {
    icon: "📊",
    title: "Market Intelligence Reports",
    desc: "Automated daily or weekly reports delivered to your inbox. Know what's happening in your market without lifting a finger.",
    details: ["Custom report frequency", "Competitor comparison", "Market trend analysis", "PDF delivery"],
  },
  {
    icon: "🔔",
    title: "Real-Time Alerts",
    desc: "Get pinged the moment something matters. Competitor price drop? New product launch? AI mentions them but not you? You'll know first.",
    details: ["Slack integration", "Email alerts", "Webhook support", "Custom triggers"],
  },
  {
    icon: "📈",
    title: "AI Visibility Score",
    desc: "A single metric that shows how visible your brand is across AI platforms. Track it over time and watch it grow.",
    details: ["Historical tracking", "Competitor benchmarking", "Improvement suggestions", "Share of voice"],
  },
  {
    icon: "🔌",
    title: "API & Integrations",
    desc: "Pull MarketEdge data into your existing workflows. CRM, dashboards, Slack — we integrate with your stack.",
    details: ["REST API", "Webhook support", "Zapier ready", "Custom integrations"],
  },
];

export default function Features() {
  return (
    <div className="pt-16">
      <section className="section">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise features.<br /><span className="gradient-text">Startup price.</span></h1>
          <p className="text-[var(--foreground-muted)] max-w-xl mx-auto">Everything you need to track competitors, monitor market moves, and stay ahead. No bloat, no complexity.</p>
        </div>
      </section>

      <section className="section border-t border-[var(--border)]">
        <div className="container max-w-5xl">
          <div className="space-y-8">
            {features.map((f, i) => (
              <div key={f.title} className={`glass-card p-8 flex flex-col md:flex-row gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <span className="text-3xl mb-4 block">{f.icon}</span>
                  <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3">{f.title}</h2>
                  <p className="text-[var(--foreground-muted)] mb-4">{f.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {f.details.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
                        <span className="text-[var(--accent-secondary)]">✓</span> {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--border)]">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-[var(--foreground-muted)] mb-8">14-day free trial. No credit card. First 10 clients get 50% off forever.</p>
          <Link href="/pricing" className="cta-button text-lg">View Pricing →</Link>
        </div>
      </section>
    </div>
  );
}
