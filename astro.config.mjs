import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx'; 
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://jorgeslime.github.io',
    output: 'static',
    markdown: {
        shikiConfig: {
            theme: 'dracula',
        },
    },
    integrations: [
        mdx({
            syntaxHighlight: 'shiki',
            shikiConfig: { theme: 'dracula' },
            // remarkPlugins: [import('remark-math')],
            // rehypePlugins: [import('rehype-katex')],
        }),
        tailwind()
    ],

});
