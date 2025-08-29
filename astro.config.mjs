import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://yoursite.vercel.app',
  build: {
    output: 'dist', // Specify the output directory
  },
});
