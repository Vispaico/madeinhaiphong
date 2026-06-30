export const prerender = true;

const pages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/authority', changefreq: 'monthly', priority: '0.8' },
  { path: '/presence', changefreq: 'monthly', priority: '0.8' },
  { path: '/influence', changefreq: 'monthly', priority: '0.8' },
  { path: '/growth', changefreq: 'monthly', priority: '0.8' },
  { path: '/pricing', changefreq: 'monthly', priority: '0.9' },
  { path: '/faq', changefreq: 'weekly', priority: '0.9' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
  // SEO FAQ pages
  { path: '/faq/seo/is-aeo-replacing-seo', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/seo/is-seo-dying-due-to-ai', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/seo/which-3-jobs-will-survive-ai', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/seo/is-seo-still-worth-it-in-2026', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/seo/what-are-the-4-types-of-digital-marketing', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/seo/is-seo-being-phased-out', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/seo/can-i-learn-seo-in-10-days', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/seo/will-seo-exist-in-5-years', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/seo/what-5-jobs-will-ai-not-replace', changefreq: 'monthly', priority: '0.7' },
  // Meta Ads FAQ pages
  { path: '/faq/meta-ads/what-are-meta-ads', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/how-much-do-meta-ads-cost', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/what-is-meta-ad-controversy', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/are-meta-ads-free-or-paid', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/big-3-of-online-advertising', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/meta-ads-vs-facebook-ads', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/4-types-of-advertising', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/why-meta-ads-expensive', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/primary-goal-of-meta-ads', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/cost-of-1000-facebook-clicks', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/value-of-100000-facebook-views', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/is-25-a-day-good-for-facebook-ads', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/facebook-payment-for-50000-views', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/best-days-to-run-facebook-ads', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/cost-to-reach-100000-people-facebook', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq/meta-ads/common-meta-ads-mistakes', changefreq: 'monthly', priority: '0.7' },
];

export async function GET() {
  const baseUrl = 'https://www.made-in-haiphong.com';

  const urls = pages
    .map(
      (page) => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600',
    },
  });
}
