import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://hand-made-clay-mugs-9rrjpzrw9-mahereens-projects.vercel.app/',
  build: {
    output: 'server',
  },// Replace this with your actual site URL once deployed
});
