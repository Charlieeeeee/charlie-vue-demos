import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('/@/views/home.vue') },
  { path: '/teleport', name: 'Teleport', component: () => import('/@/views/teleport.vue') },
  { path: '/event', name: 'Event', component: () => import('/@/views/event.vue') },
  { path: '/reactivity', name: 'Reactivity', component: () => import('/@/views/reactivity.vue') },
  { path: '/Refs', name: 'Refs', component: () => import('/@/views/Refs.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes
})