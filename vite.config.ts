import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

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
        ),
        laravel({
            input: [
                'resources/login/ts/login_app.ts',
                'resources/main/ts/main_app.ts'
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources', import.meta.url))
        }
    },
    base: './',
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `js/[name].js`,
                chunkFileNames: `js/[name].js`,
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
            },
        },
    },
});
