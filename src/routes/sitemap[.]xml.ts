import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { absoluteUrl } from "@/lib/seo";

const entries = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/about", priority: "0.8", changefreq: "monthly" as const },
  { path: "/programs", priority: "0.8", changefreq: "monthly" as const },
  { path: "/volunteer", priority: "0.7", changefreq: "monthly" as const },
  { path: "/donate", priority: "0.9", changefreq: "monthly" as const },
  { path: "/contact", priority: "0.6", changefreq: "monthly" as const },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lastmod = new Date().toISOString().split("T")[0];
        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${absoluteUrl(e.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
