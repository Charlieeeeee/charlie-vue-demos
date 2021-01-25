import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

export const router = {
  mode: 'hash',
  routes: [
    {
      path: '',
      redirect: '/verticalCenter'
    },
    {
      path: '/verticalCenter',
      name: 'VerticalCenter',
      meta: {
        title: '水平垂直居中'
      },
      // component: resolve => require(['@/pages/verticalCenter/verticalCenter'], resolve) // 这种方式会多打包出一个JS
      // component: r => require.ensure([], () => r(require('@/pages/verticalCenter/verticalCenter')), 'index') // 这种方式会多打包出一个JS
      component: () => import('@/pages/verticalCenter/verticalCenter')// 懒加载，组件，页面加载更快
    },
    {
      path: '/indexBar',
      name: 'IndexBar',
      meta: {
        title: '导航'
      },
      component: () => import('@/pages/indexBar/indexBar')// 懒加载，组件，页面加载更快
    },
    {
      path: '/observable',
      name: 'observable',
      meta: {
        title: 'observable'
      },
      component: () => import('@/pages/observable/observable')
    },
    {
      path: '/Swiper',
      name: 'Swiper',
      meta: {
        title: 'Swiper'
      },
      component: () => import('@/pages/Swiper/Swiper')
    },
    {
      path: '/Slots',
      name: 'Slots',
      meta: {
        title: 'Slots'
      },
      component: () => import('@/pages/Slots/Slots')
    }
  ]
};
if (process.env.NODE_ENV === 'pics') {
  router.routes.push({
    path: '/pics',
    name: 'pics',
    meta: {
      title: 'pics'
    },
    component: () => import('@/pages/pics/pics')
  });
}
export default new VueRouter(router);
