import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [lit()],
  site: 'https://jcdalton2201.github.io',
  base: '/golf-list',
});