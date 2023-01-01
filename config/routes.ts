export const routes = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', title: '首页', component: 'index' },
      { path: '/404', title: '出错啦', component: '404' },
      { path: '/article', title: '文章列表', redirect: '/article/1' },
      { path: '/article/:pageId', title: '文章列表', component: 'article' },
      {
        path: '/article/detail/:articleId',
        title: '文章详情',
        component: 'article/detail',
      },
      { path: '/3dalbum', title: '3D相册', component: '3DAlbum' },
    ],
  },
];
