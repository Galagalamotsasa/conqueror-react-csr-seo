import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') },
      {
        find: '@apis',
        replacement: resolve(__dirname, 'src/apis'),
      },
      {
        find: '@assets',
        replacement: resolve(__dirname, 'src/assets'),
      },
      {
        find: '@Authentication',
        replacement: resolve(__dirname, 'src/pages/Authentication'),
      },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: '@hooks',
        replacement: resolve(__dirname, 'src/hooks'),
      },
      {
        find: '@layouts',
        replacement: resolve(__dirname, 'src/pages/layouts'),
      },
      {
        find: '@Navigation',
        replacement: resolve(__dirname, 'src/pages/Navigation'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, 'src/pages'),
      },
      {
        find: '@redux',
        replacement: resolve(__dirname, 'src/redux'),
      },
      {
        find: '@style',
        replacement: resolve(__dirname, 'src/style'),
      },
    ],
  },
  plugins: [react(), tsconfigPaths()],
  server: {
      port: 3030,
  },
})
