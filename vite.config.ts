import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/e-book-academy/",
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  }
});