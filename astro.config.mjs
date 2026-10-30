// @ts-check
import { defineConfig } from 'astro/config';
import affiliateLinks from './integrations/affiliate-links.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://gencoupeswaps.com',
  // Build pages as /guides/wiring.html instead of /guides/wiring/index.html.
  // Cloudflare then serves them at /guides/wiring (no trailing slash), which matches
  // every internal link, the sitemap, and the canonical tags, so Google sees no redirects.
  trailingSlash: 'never',
  build: { format: 'file' },
  // Adds affiliate codes from src/data/affiliates.json to vendor links after the build.
  integrations: [affiliateLinks()],
});
