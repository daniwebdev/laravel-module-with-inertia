import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        outDir: '../../public/sites',
        emptyOutDir: true,
        manifest: true,
    },
    plugins: [
        laravel({
            input: [
                'resources/js/app.tsx',
                './resources/assets/sass/app.scss',
            ],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
            publicDirectory: '../../public',
            buildDirectory: 'sites',
            // input: [
            //     __dirname + '/resources/assets/sass/app.scss',
            //     __dirname + '/resources/assets/js/app.jsx'
            // ],
            // refresh: true,
        }),
        react({
            ssr: true,
        }),
    ],
});

//export const paths = [
//    'Modules/Site/resources/assets/sass/app.scss',
//    'Modules/Site/resources/assets/js/app.js',
//];