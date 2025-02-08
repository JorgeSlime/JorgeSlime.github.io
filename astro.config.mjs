import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import expressiveCode, { astroExpressiveCode } from 'astro-expressive-code';

export default defineConfig({
    site: 'https://jorgeslime.github.io',
    output: 'static',
    markdown: {
        //shikiConfig: {
        //    theme: 'dracula',
        //},
    },
    integrations: [
        astroExpressiveCode({
            theme: ['vitesse-black'],
            shiki: {
                langs: [],
            }
        }),
        mdx({
        //syntaxHighlight: 'shiki',
        //shikiConfig: { theme: 'dracula' },
        }), 
        tailwind(), expressiveCode()
    ],

});
