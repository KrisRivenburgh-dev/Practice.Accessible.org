// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Served from the custom domain root (see public/CNAME).
  site: 'https://practice.accessible.org',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
