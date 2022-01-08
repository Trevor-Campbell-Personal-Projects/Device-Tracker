export default [
  {
    component: () => import('@/pages/InfoPage.vue'),
    name: 'home',
    path: '/',
  },
  {
    component: () => import('@/pages/InfoPage.vue'),
    name: 'info',
    path: '/info',
  },
  {
    component: () => import('@/pages/ResourcesPage.vue'),
    name: 'resources',
    path: '/resources',
  },
  {
    component: () => import('@/pages/LandingPage.vue'),
    name: 'landing',
    path: '/landing',
  },
]
