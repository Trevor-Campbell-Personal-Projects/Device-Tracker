import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import routes from './routes'
import { store } from './store'

import './index.css'

// Middleware to check for authentication before viewing pages
import useAuthUser from './composables/UseAuthUser'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const { isLoggedIn } = useAuthUser()
  if (!isLoggedIn() && to.meta.requiresAuth && !Object.keys(to.query).includes('fromEmail')) {
    return { name: 'login' }
  }
})

const head = createHead()

createApp(App).use(head).use(router).use(store).mount('#app')
