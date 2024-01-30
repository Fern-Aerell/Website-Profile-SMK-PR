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
        entryFileNames: 'js/index.js',
        assetFileNames(chunkInfo) {
          if (chunkInfo.name!.endsWith('.css')) {
            return `css/${chunkInfo.name}`;
          } else if (chunkInfo.name!.endsWith('.png')) {
            return `images/png/${chunkInfo.name}`;
          } else if (chunkInfo.name!.endsWith('.svg')) {
            return `images/svg/${chunkInfo.name}`;
          } else if (chunkInfo.name!.endsWith('.webp')) {
            return `images/webp/${chunkInfo.name}`;
          }
          return chunkInfo.name!;
        }
      }
    }
  }
});
