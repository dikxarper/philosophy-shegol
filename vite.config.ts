import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/phillo-hoot",
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 9000
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  }
});