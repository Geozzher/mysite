export default {
  // 支持值为 Object 和 Array
  'GET /api/recommend/query.json': {
    stat: 'ok',
    data: [
      {
        id: '0000001',
        title: '敬请期待',
        gotoText: '了解更多',
        gotoUrl: 'https://baidu.com',
        description: '新功能开发中，敬请期待。新功能开发中，敬请期待。',
      },
      {
        id: '0000002',
        title: '敬请期待',
        gotoText: '了解更多',
        gotoUrl: 'www.baidu.com',
        description:
          '<div>新功能<a>开发中</a>，敬请期待。新功能开发中，敬请期待。</div>',
      },
      {
        id: '0000003',
        title: '敬请期待',
        gotoText: '去看看',
        gotoUrl: './',
        description:
          '<div>新功能<a>开发中</a>，敬请期待。新功能开发中，敬请期待。</div>',
      },
      // {
      //   id: '0000004',
      //   title: '敬请期待',
      //   gotoText: '了解更多',
      //   description: '新功能开发中，敬请期待。',
      //   gotoUrl: './',
      // },
      // {
      //   id: '0000003',
      //   title: '敬请期待',
      //   gotoText: '了解更多',
      //   description: '新功能开发中，敬请期待。',
      //   gotoUrl: './',
      // },
    ],
  },
};
