export default [
  {
    component: () => import('@/pages/Info-Page.vue'),
    name: 'home',
    path: '/',
  },
  {
    component: () => import('@/pages/Info-Page.vue'),
    name: 'info',
    path: '/info',
  },
  {
    component: () => import('@/pages/Resources-Page.vue'),
    name: 'resources',
    path: '/resources',
  },
  {
    component: () => import('@/pages/Landing-Page.vue'),
    name: 'landing',
    path: '/landing',
  },
]
