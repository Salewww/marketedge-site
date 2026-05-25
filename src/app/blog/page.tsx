import Link from "next/link";

const articles = [
  {
    slug: "ai-citations-tracking-guide",
    title: "What Is AI Citations Tracking? The Complete Guide",
    excerpt: "Learn how to track what AI tools say about your brand vs competitors. The definitive guide to AI visibility monitoring.",
    date: "2026-05-25",
    category: "AI & SEO",
    readTime: "8 min",
  },
  {
    slug: "best-market-intelligence-tools-2026",
    title: "Best Market Intelligence Tools 2026 (That Don't Cost $50K)",
    excerpt: "An honest comparison of market intelligence tools. From enterprise giants to affordable alternatives for startups.",
    date: "2026-05-26",
    category: "Comparisons",
    readTime: "6 min",
  },
  {
    slug: "crayon-alternatives",
    title: "Crayon Alternatives: 7 Affordable Options Compared",
    excerpt: "Crayon is powerful but costs $50K+/year. Here are 7 alternatives that won't break the bank.",
    date: "2026-05-27",
    category: "Alternatives",
    readTime: "7 min",
  },
  {
    slug: "competitive-intelligence-budget",
    title: "Competitive Intelligence on a Budget: Complete Guide",
    excerpt: "How to set up competitive intelligence for your startup without enterprise tools or enterprise budgets.",
    date: "2026-05-28",
    category: "Strategy",
    readTime: "5 min",
  },
  {
    slug: "klue-alternatives-startups",
    title: "Klue Alternatives for Startups and Small Teams",
    excerpt: "Klue is enterprise-only. Here are alternatives that actually work for startups and small teams.",
    date: "2026-05-29",
    category: "Alternatives",
    readTime: "6 min",
  },
  {
    slug: "track-ai-brand-mentions",
    title: "How to Track What AI Says About Your Brand",
    excerpt: "AI tools like ChatGPT and Perplexity are becoming the new search. Here's how to monitor your brand across them.",
    date: "2026-05-30",
    category: "AI & SEO",
    readTime: "5 min",
  },
  {
    slug: "market-intelligence-2026",
    title: "The State of Market Intelligence in 2026",
    excerpt: "How AI is transforming competitive intelligence and what it means for your business.",
    date: "2026-06-01",
    category: "Industry",
    readTime: "7 min",
  },
];

export default function Blog() {
  return (
    <div className="pt-16">
      <section className="section">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">MarketEdge Blog</h1>
          <p className="text-[var(--foreground-muted)] mb-8">Market intelligence, competitive analysis, and AI visibility insights.</p>

          <div className="space-y-4">
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="glass-card p-6 block">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">{article.category}</span>
                  <span className="text-[10px] text-[var(--foreground-muted)]">{article.date}</span>
                  <span className="text-[10px] text-[var(--foreground-muted)]">· {article.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold text-[var(--foreground)] mb-2">{article.title}</h2>
                <p className="text-sm text-[var(--foreground-muted)]">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
