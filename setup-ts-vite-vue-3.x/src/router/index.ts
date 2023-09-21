
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { kebabCase } from 'lodash-es'

const files = import.meta.glob('@/views/*/index.vue')
console.log(files);

const routes: RouteRecordRaw[] = Object.entries(files).map(([key, value]) => {
  const name = key.replace(/\/src\/views\/(.*)\/index.vue/, '$1')
  return {
    path: `/${kebabCase(name)}`,
    component: value,
    name
  }
})
console.log(routes);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/tailwind'
    },
    ...routes
  ],
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router

