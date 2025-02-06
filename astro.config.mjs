import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
export default defineConfig({
    site: 'https://jorgeslime.github.io/Slime-s-Library/',
    // base: '/Slime-s-Library/',
    markdown: {
        shikiConfig: {
            theme: 'dracula',
        },
    },
    adapter: vercel(),
    integrations: [mdx()],

});
