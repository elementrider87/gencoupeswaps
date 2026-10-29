import type { APIRoute } from 'astro';
import builds from '../data/featured-builds.json';

// Builds /sitemap.xml from every page in src/pages automatically.
const pages = import.meta.glob('./**/*.astro');

export const GET: APIRoute = () => {
  const site = 'https://gencoupeswaps.com';
  const today = new Date().toISOString().slice(0, 10);
  const urls = Object.keys(pages)
    .map((f) => f.replace(/^\.\//, '/').replace(/\.astro$/, '').replace(/\/index$/, '/'))
    .filter((u) => !u.includes('['))
    .map((u) => (u === '/index' ? '/' : u))
    .concat((builds as { slug: string }[]).map((b) => `/featured/${b.slug}`))
    .sort();
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls
      .map((u) => {
        const priority = u === '/' ? '1.0' : u.startsWith('/guides/') ? '0.8' : '0.5';
        return `  <url><loc>${site}${u}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`;
      })
      .join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
