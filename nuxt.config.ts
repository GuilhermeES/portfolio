// https://nuxt.com/docs/api/configuration/nuxt-config

import {resolve} from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'pt-BR',
      },
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  alias: {
    "@": resolve(__dirname, "/")
  },
  css: [
    "~/assets/main.scss"
  ]
})
