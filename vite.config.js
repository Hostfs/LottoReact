import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
    rolldownOptions: {
      output: {
        // 운영 빌드에서 console/debugger 제거, 주석 제거 (기존 uglify 설정 대체)
        minify: {
          compress: { dropConsole: true, dropDebugger: true },
        },
        comments: { legal: false },
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
