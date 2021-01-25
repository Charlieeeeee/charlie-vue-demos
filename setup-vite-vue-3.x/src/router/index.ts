import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('/@/views/home.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes
})