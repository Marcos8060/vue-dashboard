// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    'primeicons/primeicons.css',
   
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-12-25',
  modules: [
    '@nuxt/icon',
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
        ripple: true,
        inputVariant: 'filled',
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                darkModeSelector: 'system',
                cssLayer: false
            }
        }
    }
}
})