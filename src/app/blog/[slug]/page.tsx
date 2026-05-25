import Link from "next/link";

const articles: Record<string, { title: string; date: string; category: string; readTime: string; content: string }> = {
  "best-market-intelligence-tools-2026": {
    title: "Best Market Intelligence Tools 2026 (That Don't Cost $50K)",
    date: "2026-05-26",
    category: "Comparisons",
    readTime: "6 min",
    content: `<p>If you've ever searched for "market intelligence tools," you've probably experienced sticker shock. Most enterprise platforms cost $10,000-$50,000 per year.</p>

<h2>The Enterprise Giants</h2>

<h3>Crayon — $50,000+/year</h3>
<p>Comprehensive tracking, excellent UI, great support. But extremely expensive, requires weeks to implement, and is overkill for small teams.</p>

<h3>Klue — Custom enterprise pricing</h3>
<p>Great integrations and strong analytics. But no self-serve option — requires a sales call just to see pricing.</p>

<h3>Contify — Custom enterprise pricing</h3>
<p>Comprehensive coverage but enterprise-only with no transparent pricing.</p>

<h2>The New Generation</h2>

<h3>MarketEdge — $29-$149/mo</h3>
<p>10x cheaper than enterprise tools. Includes AI citations tracking (a unique feature no competitor offers). 2-minute setup, no credit card required. Perfect for startups, small teams, and growth marketers.</p>

<h3>Semrush — $130-$450/mo</h3>
<p>Good SEO + market intelligence combo. But market intelligence is a secondary feature, not as deep as dedicated tools.</p>

<h2>The Verdict</h2>

<table>
<tr><th>Need</th><th>Best Tool</th></tr>
<tr><td>Enterprise CI team</td><td>Crayon or Klue</td></tr>
<tr><td>Startup on a budget</td><td>MarketEdge</td></tr>
<tr><td>SEO + market intel</td><td>Semrush</td></tr>
<tr><td>AI citations tracking</td><td>MarketEdge (only option)</td></tr>
</table>

<h2>The Bottom Line</h2>
<p>If you're a startup or small team, <strong>MarketEdge</strong> is the clear winner. At $29/mo, you get competitor tracking, market signals, and AI citations tracking — features that cost $50K+ from enterprise vendors.</p>`,
  },
};

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    return (
      <div className="pt-16 section">
        <div className="container max-w-3xl text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link href="/blog" className="cta-button">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <section className="section">
        <div className="container max-w-3xl">
          <Link href="/blog" className="text-sm text-[var(--accent)] hover:underline mb-6 inline-block">← Back to Blog</Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">{article.category}</span>
            <span className="text-[10px] text-[var(--foreground-muted)]">{article.date}</span>
            <span className="text-[10px] text-[var(--foreground-muted)]">· {article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-8">{article.title}</h1>
          <div
            className="prose prose-invert max-w-none text-[var(--foreground-muted)] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>
    </div>
  );
}
