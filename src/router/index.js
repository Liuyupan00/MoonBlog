import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'blog',
      component: () => import('../views/Blog.vue'),
      children:[
        {
          path: '',
          name: 'index',
          component: () => import('../components/index.vue')
        },
        {
          path: 'article',
          name: 'article',
          component: () => import('../components/article.vue')
        }
      ]
    }
  ]
})

export default router
