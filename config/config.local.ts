import { defineConfig } from 'umi';

export default defineConfig({
  proxy: {
    '/api': {
      target: 'http://localhost:3004',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
});
