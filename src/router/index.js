import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('../views/front/HomeView.vue'),
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/front/LoginView.vue')
      },
      {
        path: 'news',
        component: () => import('../views/front/NewsView.vue')
      }
    ]
  },

  // 後台
  {
    path: '/dashboard',
    component: () => import('../views/admin/DashboardView')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
