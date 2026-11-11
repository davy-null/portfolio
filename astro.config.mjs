// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// PLACEHOLDER: set this to your real domain before deploying (used for SEO, sitemap and RSS).
const SITE_URL = 'https://davy-null.example.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  markdown: {
    shikiConfig: { theme: 'vesper', wrap: false },
  },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
