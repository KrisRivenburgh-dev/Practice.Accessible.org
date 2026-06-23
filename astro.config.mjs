// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Update `site` to your final URL. For a GitHub *project* page
  // (https://<user>.github.io/<repo>/) also set `base: '/<repo>/'`.
  site: 'https://practice.accessible.org',
  base: '/',
  trailingSlash: 'ignore',
});
