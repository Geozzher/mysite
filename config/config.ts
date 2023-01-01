import { defineConfig } from 'umi';
import { routes } from './routes';

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
  routes,
  mock: false,
  proxy: {
    '/api': {
      target: 'http://wfhcc.cn:3004',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
});
