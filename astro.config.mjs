// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Deployed to the GitHub Pages project path. If you later move to a custom
  // domain (e.g. practice.accessible.org), set base back to '/' and add a CNAME.
  site: 'https://krisrivenburgh-dev.github.io',
  base: '/Practice.Accessible.org',
  trailingSlash: 'ignore',
});
