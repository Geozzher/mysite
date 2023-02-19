import { defineConfig } from 'umi';

export default defineConfig({
  proxy: {
    '/api': {
      target: 'http://wfhcc.cn:3004',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
    '/config': {
      target: 'https://wfhcc.cn:8002',
      changeOrigin: true,
      pathRewrite: {
        '^/config': '',
      },
    },
  },
});
