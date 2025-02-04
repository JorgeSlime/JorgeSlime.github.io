import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
export default defineConfig({
    site: 'https://jorgeslime.github.io',
    //base: '/Slime-s-Library/',
    output: "static",  
    markdown: {
        shikiConfig: {
        theme: 'dracula',
        },
    },
    adapter: vercel(),
});
