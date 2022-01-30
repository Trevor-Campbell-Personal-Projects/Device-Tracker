import useAuthUser from './composables/UseAuthUser'

export default [
  {
    component: () => import('@/pages/HomePage.vue'),
    name: 'home',
    path: '/',
    meta: {
      requiresAuth: true,
    },
  },

  // User Registration and Account Managment Routes

  {
    component: () => import('@/pages/RegisterPage.vue'),
    name: 'register',
    path: '/register',
  },
  {
    component: () => import('@/pages/EmailConfirmationPage.vue'),
    name: 'email-confirmation',
    path: '/email-confirmation',
  },
  {
    component: () => import('@/pages/LoginPage.vue'),
    name: 'login',
    path: '/login',
  },
  {
    component: () => import('@/pages/LoginPage.vue'),
    name: 'logout',
    path: '/logout',
    beforeEnter: async () => {
      const { logout } = useAuthUser()
      await logout()
      return { name: 'login' }
    },
  },
  {
    component: () => import('@/pages/ForgotPasswordPage.vue'),
    name: 'forgot-password',
    path: '/forgot-password',
  },
  {
    component: () => import('@/pages/PasswordResetPage.vue'),
    name: 'reset-password',
    path: '/reset-password',
    meta: {
      requiresAuth: true,
    },
  },

  //  Actual App Page Routes

  {
    component: () => import('@/pages/ProfilePage.vue'),
    name: 'profile',
    path: '/profile',
    meta: {
      requiresAuth: true,
    },
  },

  // CatchAll Route for 404

  {
    component: () => import('@/pages/404Page.vue'),
    name: '404',
    path: '/:catchAll(.*)',
  },
]
