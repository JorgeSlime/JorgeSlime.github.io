import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx'; 
import tailwind from '@astrojs/tailwind';
export default defineConfig({
    site: 'https://jorgeslime.github.io',
    // base: '/Slime-s-Library/',
    output: 'static',
    markdown: {
        shikiConfig: {
            theme: 'dracula',
        },
    },
    integrations: [mdx(), tailwind()],

});
