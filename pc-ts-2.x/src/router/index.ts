import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: '首页'
    },
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: 'About'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/provideInject",
    name: "ProvideInject",
    meta: {
      title: 'ProvideInject'
    },
    component: () =>
      import(/* webpackChunkName: "provideInject" */ "@/views/ProvideInject.vue")
  },
  {
    path: "/vuex",
    name: "Vuex",
    meta: {
      title: 'Vuex'
    },
    component: () =>
      import(/* webpackChunkName: "vuex" */ "@/views/Vuex.vue")
  },
  {
    path: "/manual",
    name: "Manual",
    meta: {
      title: '手册指南'
    },
    component: () =>
      import(/* webpackChunkName: "manual" */ "@/views/Manual.vue"),
    children: [
      {
        path: "",
        component: () => import("@/components/Interface.vue"),
      },
      {
        path: "interface",
        component: () => import("@/components/Interface.vue"),
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
