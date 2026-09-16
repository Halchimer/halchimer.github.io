import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ArtView from '@/views/ArtView.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/myart',
      name: 'myart',
      component: ArtView,
    },
  ],
})

export default router