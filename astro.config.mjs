// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Served from the custom domain root (see public/CNAME).
  site: 'https://practice.accessible.org',
  base: '/',
  trailingSlash: 'ignore',
  // No sitemap: the site is intentionally kept out of search indexes
  // (see the noindex robots meta in Base.astro and public/robots.txt).
  integrations: [],
});
