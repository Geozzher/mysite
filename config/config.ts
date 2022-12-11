import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  lessLoader: {},
  ssr: {
    // 更多配置
    // forceInitial: false,
    removeWindowInitialProps: false,
    devServerRender: true,
    mode: 'string',
    // staticMarkup: false,
  },
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
