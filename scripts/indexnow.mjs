// Tells Bing, DuckDuckGo, Yandex and other IndexNow search engines that the site changed.
// Reads every page from the live sitemap and submits them in one request.
// Usage: node scripts/indexnow.mjs
const HOST = 'gencoupeswaps.com';
const KEY = '9b882b823976cf2d38b5305e27e39289';

const res = await fetch(`https://${HOST}/sitemap.xml`, { headers: { 'cache-control': 'no-cache' } });
if (!res.ok) throw new Error(`Could not read sitemap: ${res.status}`);
const xml = await res.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error('Sitemap had no URLs');

const submit = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs -> HTTP ${submit.status}`);
if (submit.status >= 400) {
  console.log(await submit.text());
  process.exit(1);
}
