import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // para deploy
import mdx from '@astrojs/mdx'; 
import tailwind from '@astrojs/tailwind';
export default defineConfig({
    site: 'https://jorgeslime.github.io/Slime-s-Library/',
    // base: '/Slime-s-Library/',
    markdown: {
        shikiConfig: {
            theme: 'dracula',
        },
    },
    adapter: vercel(),
    integrations: [mdx(), tailwind()],

});
