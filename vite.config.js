/* eslint-env node */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/jodit-vue/',
  resolve: {
    alias: [
      {
        find: /^~(.*)$/,
        replacement: 'node_modules/$1'
      }
    ]
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/wrapper.js'),
      name: 'JoditVue',
      fileName: 'jodit-vue'
    },
    rollupOptions: {
      external: ['vue', 'jodit'],
      output: {
        globals: {
          vue: 'Vue',
          jodit: 'Jodit'
        }
      }
    }
  }
})
