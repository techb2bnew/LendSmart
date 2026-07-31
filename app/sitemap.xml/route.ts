const BASE_URL = "https://www.lendsmartmortgages.com.au";

const pages = [
  "",
  "/about-us",
  "/asset-finance",
  "/car-truck-loans",
  "/commercial-loans",
  "/construction-loans",
  "/contact",
  "/personal-loans",
  "/privacy-policy",
  "/residential-loans",
  "/terms-conditions",
];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}