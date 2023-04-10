import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

export default {
  server: {
    port: 8000,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/Common'),
      '@pages': path.resolve(__dirname, 'src/components/Pages'),
    },
  },
  css: {
    postcss: {
      plugins: [require('tailwindcss')],
    },
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxInject: `import React from 'react';`,
  },
  plugins: [
    reactRefresh(),
  ],
};