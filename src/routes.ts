export default [
  {
    component: () => import('@/pages/HomePage.vue'),
    name: 'home',
    path: '/',
  },
  {
    component: () => import('@/pages/404Page.vue'),
    name: '404',
    path: '/:catchAll(.*)',
  },
]
