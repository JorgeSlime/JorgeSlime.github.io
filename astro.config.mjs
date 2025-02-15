import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import expressiveCode, { astroExpressiveCode } from 'astro-expressive-code';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkToc from 'remark-toc';

export default defineConfig({
    site: 'https://jorgeslime.github.io',
    output: 'static',
    markdown: {
        remarkPlugins: [remarkMath, remarkToc],
        rehypePlugins: [rehypeKatex],
        //shikiConfig: {
        //    theme: 'vitesse-black',
        //},
    },
    integrations: [
    tailwind(), expressiveCode(),
        astroExpressiveCode({
            theme: ['vitesse-black'],
            shiki: {
                langs: ['cpp'],
            }
        }),
        mdx({
            // remarkPlugins: [remarkMath],
            // rehypePlugins: [rehypeKatex],
        // syntaxHighlight: 'shiki',
        // shikiConfig: { theme: 'vitesse-black' },
        }), 
        
    ],

});
