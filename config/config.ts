import { defineConfig } from 'umi';
import { routes } from './routes';
import path from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  lessLoader: {
    modifyVars: {
      hack: `true;
        @import "${path.join(__dirname, '../src/theme/normal/index.less')}";`,
    },
  },
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
    '/config': {
      target: 'https://wfhcc.cn:8002',
      changeOrigin: true,
      pathRewrite: {
        '^/config': '',
      },
    },
  },
});
