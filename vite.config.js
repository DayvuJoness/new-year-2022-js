import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  base: "/new-year-2022-js/",
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.pathname.includes('/src/assets/img/')) {
          return new URLSearchParams({ 
                format: 'png;webp;avif',
                png: 'quality=100',
                webp: 'quality=75',
                avif: 'quality=60',
            });
        }
        return new URLSearchParams();
      },
      disable: process.env.NODE_ENV === 'development',
    }),
    ]
})
