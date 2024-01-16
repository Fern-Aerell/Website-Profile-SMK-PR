import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(
      {
        template: {
          compilerOptions: {
            isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
          }
        }
      }
    )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'javascripts/index.js',
        assetFileNames(chunkInfo) {
          if (chunkInfo.name!.endsWith('.css')) {
            return `assets/css/${chunkInfo.name}`;
          } else if (chunkInfo.name!.endsWith('.png')) {
            return `assets/images/png/${chunkInfo.name}`;
          } else if (chunkInfo.name!.endsWith('.svg')) {
            return `assets/images/svg/${chunkInfo.name}`;
          } else if (chunkInfo.name!.endsWith('.webp')) {
            return `assets/images/webp/${chunkInfo.name}`;
          }
          return chunkInfo.name!;
        }
      }
    }
  }
});
