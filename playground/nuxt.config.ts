export default defineNuxtConfig({
  compatibilityDate: '2025-08-09',
  devtools: { enabled: true },
  typescript: {
    typeCheck: false
  },
  ssr: process.env.ENABLE_SSR === 'true', 
  vite: {
    resolve: {
      alias: {
        '@nordstjerna/ui': '../packages/ui/src/index.ts'
      }
    }
  },
  app: {
    head: {
      title: 'Nordstjerna Playground',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
