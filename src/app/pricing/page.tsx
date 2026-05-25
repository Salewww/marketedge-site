import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: 29,
    desc: "For solo marketers and freelancers",
    features: ["3 competitors tracked", "Weekly intelligence reports", "Basic alerts", "1 user"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: 79,
    desc: "For small teams (2-10 people)",
    features: ["10 competitors tracked", "Daily intelligence reports", "AI citations tracking", "Real-time alerts", "5 users", "API access"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Pro",
    price: 149,
    desc: "For growing companies",
    features: ["Unlimited competitors", "Real-time monitoring", "AI citations tracking", "Instant alerts", "Unlimited users", "API access", "White-label reports", "Priority support"],
    cta: "Start Free Trial",
    popular: false,
  },
];

const faqs = [
  { q: "Is there a free trial?", a: "Yes! 14-day free trial on all plans. No credit card required." },
  { q: "What's the founder pricing?", a: "First 10 clients get 50% off lifetime. That's $15/$40/$75/mo instead of $29/$79/$149." },
  { q: "Can I cancel anytime?", a: "Yes. No contracts, no cancellation fees. Cancel with one click." },
  { q: "How is this different from Crayon?", a: "Same core features, 10x cheaper. Crayon costs $50K/yr. We start at $29/mo. We also track AI citations — something Crayon doesn't do." },
  { q: "Do you offer refunds?", a: "Yes. 30-day money-back guarantee, no questions asked." },
];

export default function Pricing() {
  return (
    <div className="pt-16">
      {/* Founder banner */}
      <div className="bg-gradient-to-r from-[var(--accent)]/20 to-emerald-500/10 border-b border-[var(--border)]">
        <div className="container py-3 text-center">
          <span className="text-sm text-[var(--foreground)]">🔥 <strong>Founder Pricing:</strong> First 10 clients lock in 50% off forever. <Link href="/pricing" className="text-[var(--accent)] underline">Claim your spot →</Link></span>
        </div>
      </div>

      <section className="section">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h1>
            <p className="text-[var(--foreground-muted)]">No hidden fees. No enterprise sales calls. Start in 2 minutes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-card p-6 relative flex flex-col ${plan.popular ? "border-[var(--accent)]/40 ring-1 ring-[var(--accent)]/20" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-[var(--foreground)]">{plan.name}</h3>
                  <p className="text-xs text-[var(--foreground-muted)] mt-1">{plan.desc}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[var(--foreground)]">${plan.price}</span>
                  <span className="text-sm text-[var(--foreground-muted)]">/mo</span>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[var(--foreground-muted)]">
                      <span className="text-[var(--accent-secondary)] mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                    plan.popular
                      ? "bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white"
                      : "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--surface)]"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Competitor comparison */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">How we compare</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left py-3 px-4 text-[var(--foreground-muted)] font-medium">Feature</th>
                    <th className="py-3 px-4 text-[var(--accent)] font-bold">MarketEdge</th>
                    <th className="py-3 px-4 text-[var(--foreground-muted)] font-medium">Crayon</th>
                    <th className="py-3 px-4 text-[var(--foreground-muted)] font-medium">Klue</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Starting price", "$29/mo", "$50K/yr", "Custom"],
                    ["Setup time", "2 minutes", "Weeks", "Weeks"],
                    ["AI citations tracking", "✅", "❌", "❌"],
                    ["Free trial", "14 days", "❌", "❌"],
                    ["No credit card", "✅", "❌", "❌"],
                    ["API access", "✅ (Growth+)", "✅", "✅"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-[var(--border)]/50">
                      <td className="py-3 px-4 text-[var(--foreground)]">{row[0]}</td>
                      <td className="py-3 px-4 text-[var(--accent-secondary)] text-center">{row[1]}</td>
                      <td className="py-3 px-4 text-[var(--foreground-muted)] text-center">{row[2]}</td>
                      <td className="py-3 px-4 text-[var(--foreground-muted)] text-center">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-[var(--border)]">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-5">
                <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--foreground-muted)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section border-t border-[var(--border)]">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stop overpaying for market intelligence</h2>
          <p className="text-[var(--foreground-muted)] mb-8">First 10 clients get 50% off lifetime. That&apos;s $15/mo instead of $29.</p>
          <Link href="#" className="cta-button text-lg">Start Your Free Trial →</Link>
        </div>
      </section>
    </div>
  );
}
