import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { version as pkgVersion } from './package.json'
const dynamicRoutes = require('./generateRoutes.js')
import Sitemap from 'vite-plugin-sitemap'

process.env.VITE_APP_VERSION = pkgVersion
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
}

export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://www.devdock.tech',
      readable: true,
      dynamicRoutes
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        'pinia',
        {
          '@/store': ['useStore'],
          '@vueuse/head': ['useHead'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dts: 'src/components.d.ts',
    }),
  ],
  build: {
    minify: 'terser',
    rollupOptions: {
      external: [], // removed vue since it is expected to be available at runtime
    },
  },
  assetsInclude: ['**/*.webp', '**/*.ico', '**/*.svg', '**/*.png', '**/*.woff', '**/*.woff2', '**/*.ttf'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
