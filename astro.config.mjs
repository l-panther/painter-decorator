import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// Pages are prerendered (static). Only /api/contact runs on the server.
export default defineConfig({
  adapter: node({ mode: 'standalone' }),
  site: 'https://l-panther.github.io',
  base: '/painter-decorator/',
});
