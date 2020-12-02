
export default {
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
    }
  ]
};
