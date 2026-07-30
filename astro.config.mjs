// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Statikus kimenet: a build eredménye (dist/) közvetlenül feltölthető
// Cloudflare Pages-re vagy Workers static assets-re.
export default defineConfig({
  site: 'https://buzasbocsard.ro',
  trailingSlash: 'never',
  output: 'static',
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
