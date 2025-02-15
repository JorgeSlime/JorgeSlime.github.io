import { defineEcConfig } from 'astro-expressive-code'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

export default defineEcConfig({
    themes: ['vitesse-black'],
    plugins: [pluginLineNumbers()],
})
