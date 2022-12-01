export default {
  // 支持值为 Object 和 Array
  'GET /api/nav/query.json': {
    stat: 'ok',
    data: [
      {
        id: '0000001',
        key: '/',
        label: '首页',
      },
      {
        id: '0000002',
        key: '/article/1',
        label: '文章',
      },
      {
        id: '0000003',
        key: '/board',
        label: '留言板',
      },
      {
        id: '0000003',
        key: '/3dalbum',
        label: '3d相册',
      },
    ],
  },
};
