import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'framer-motion'],
                },
                assetFileNames: (assetInfo) => {
                    if (!assetInfo.name)
                        return 'assets/[name]-[hash][extname]';
                    const extType = assetInfo.name.split('.').at(1) || 'unknown';
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType)) {
                        return `assets/img/[name]-[hash][extname]`;
                    }
                    return `assets/${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
            }
        }
    },
    // Add SPA fallback configuration
    preview: {
        port: 3000,
        host: true,
        strictPort: true,
        headers: {
            'Cache-Control': 'no-store',
        },
    }
});
