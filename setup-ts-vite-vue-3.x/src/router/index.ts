import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('/@/views/home.vue') },
  { path: '/teleport', name: 'Teleport', component: () => import('/@/views/teleport.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes
})