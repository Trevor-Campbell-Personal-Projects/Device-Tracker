export default [
  {
    component: () => import('@/pages/HomePage.vue'),
    name: 'home',
    path: '/',
  },
  {
    component: () => import('@/pages/AboutUsPage.vue'),
    name: 'about-us',
    path: '/about-us',
  },
  {
    component: () => import('@/pages/GrantRecipientsPage.vue'),
    name: 'our-shooting-stars',
    path: '/our-shooting-stars',
  },
  {
    component: () => import('@/pages/404Page.vue'),
    name: '404',
    path: '/:catchAll(.*)',
  },
]
