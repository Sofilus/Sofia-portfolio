import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Sofia-portfolio/',
  define: {
    'process.env': {},
  },
  build: {
    target: 'esnext',
  },
});