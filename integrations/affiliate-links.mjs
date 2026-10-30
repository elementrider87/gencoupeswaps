// Affiliate links, applied once at build time.
//
// Every guide keeps plain vendor links. After Astro builds the site, this goes through
// the finished HTML and, for any vendor with an active program in src/data/affiliates.json:
//   - rewrites the link to the affiliate version (Amazon tag, a ?ref= style parameter,
//     or a network "wrap" link such as impact.com / FlexOffers deep links),
//   - marks it rel="sponsored nofollow noopener" so search engines treat it correctly,
//   - adds a short affiliate disclosure under the page's <h1> (FTC + Amazon wording).
// Vendors with an empty code are left completely untouched, so nothing changes on the
// site until a code is filled in.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const CONFIG = new URL('../src/data/affiliates.json', import.meta.url);

function loadPrograms() {
  const cfg = JSON.parse(fs.readFileSync(CONFIG, 'utf8'));
  const programs = [];
  if (cfg.amazon && cfg.amazon.tag) {
    programs.push({ name: 'Amazon', domains: ['amazon.com'], type: 'param', param: 'tag', value: cfg.amazon.tag, amazon: true });
  }
  for (const p of cfg.programs || []) {
    if (p.type === 'param' && p.param && p.value) programs.push(p);
    else if (p.type === 'wrap' && p.template && p.template.includes('{url}')) programs.push(p);
  }
  return programs;
}

function matchProgram(href, programs) {
  let u;
  try { u = new URL(href); } catch { return null; }
  if (!/^https?:$/.test(u.protocol)) return null;
  const host = u.hostname.toLowerCase().replace(/^www\./, '');
  return programs.find((p) => p.domains.some((d) => host === d || host.endsWith('.' + d))) || null;
}

function rewrite(href, p) {
  if (p.type === 'wrap') return p.template.replace('{url}', encodeURIComponent(href));
  const u = new URL(href);
  u.searchParams.set(p.param, p.value);
  return u.toString();
}

const decode = (s) => s.replace(/&amp;/g, '&');
const encode = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

function processHtml(html, programs) {
  let used = false;
  let amazon = false;
  const out = html.replace(/<a\b[^>]*>/gi, (tag) => {
    const m = tag.match(/\shref="([^"]*)"/i);
    if (!m) return tag;
    const href = decode(m[1]);
    const p = matchProgram(href, programs);
    if (!p) return tag;
    used = true;
    if (p.amazon) amazon = true;
    let t = tag.replace(m[0], ` href="${encode(rewrite(href, p))}"`);
    const rel = t.match(/\srel="([^"]*)"/i);
    const vals = new Set((rel ? rel[1] : '').split(/\s+/).filter(Boolean));
    ['sponsored', 'nofollow', 'noopener'].forEach((v) => vals.add(v));
    const relAttr = ` rel="${[...vals].join(' ')}"`;
    t = rel ? t.replace(rel[0], relAttr) : t.replace(/>$/, `${relAttr}>`);
    return t;
  });
  if (!used) return { html, used: false };
  const note =
    '<p class="aff-note">Some links on this page are affiliate links. If you buy through them, GenCoupeSwaps may earn a small commission at no extra cost to you. Parts are listed because they work, not because they pay.' +
    (amazon ? ' As an Amazon Associate I earn from qualifying purchases.' : '') +
    '</p>';
  const withNote = out.replace(/(<h1\b[^>]*>[\s\S]*?<\/h1>)/i, `$1\n${note}`);
  return { html: withNote, used: true };
}

function walk(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f, files);
    else if (e.name.endsWith('.html')) files.push(f);
  }
  return files;
}

export default function affiliateLinks() {
  return {
    name: 'affiliate-links',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const programs = loadPrograms();
        if (programs.length === 0) {
          logger.info('No affiliate codes set; links left as-is.');
          return;
        }
        const root = fileURLToPath(dir);
        let pages = 0;
        for (const f of walk(root)) {
          const { html, used } = processHtml(fs.readFileSync(f, 'utf8'), programs);
          if (used) { fs.writeFileSync(f, html); pages++; }
        }
        logger.info(`Affiliate links applied (${programs.map((p) => p.name).join(', ')}) on ${pages} page(s).`);
      },
    },
  };
}
