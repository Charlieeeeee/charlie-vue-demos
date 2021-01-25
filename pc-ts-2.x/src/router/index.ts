import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);
export const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: {
      path: "/home",
    }
  },
  {
    path: "/home",
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
    path: "/Plugin",
    name: "Plugin",
    meta: {
      title: 'Plugin'
    },
    component: () =>
      import(/* webpackChunkName: "Plugin" */ "@/views/Plugin.vue")
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
        path: "interface",
        name: "Interface",
        component: () => import("@/components/Interface.vue"),
      },
      {
        path: "advancedType",
        name: "AdvancedType",
        component: () => import("@/components/AdvancedType.vue"),
      },
      {
        path: "basicType",
        name: "BasicType",
        component: () => import("@/components/BasicType.vue"),
      },
      {
        path: "classType",
        name: "ClassType",
        component: () => import("@/components/ClassType.vue"),
      },
      {
        path: "Genericity",
        name: "Genericity",
        component: () => import("@/components/Genericity.vue"),
      },
      {
        path: "Enum",
        name: "Enum",
        component: () => import("@/components/Enum.vue"),
      },
      {
        path: "Compatibility",
        name: "Compatibility",
        component: () => import("@/components/Compatibility.vue"),
      },
      {
        path: "Module",
        name: "Module",
        component: () => import("@/components/Module.vue"),
      },
      {
        path: "Namespace",
        name: "Namespace",
        component: () => import("@/components/Namespace.vue"),
      },
      {
        path: "Declaration",
        name: "Declaration",
        component: () => import("@/components/Declaration.vue"),
      },
      {
        path: "DeclarationMerge",
        name: "DeclarationMerge",
        component: () => import("@/components/DeclarationMerge.vue"),
      },
    ]
  },
];

if(process.env.VUE_APP_NODE_ENV === 'pic'){
  routes.push({
    path: "/Picture",
    name: "Picture",
    meta: {
      title: 'Picture'
    },
    component: () =>
      import(/* webpackChunkName: "vuex" */ "@/views/Picture.vue")
  })
}

const router = new VueRouter({
  routes
});

export default router;
