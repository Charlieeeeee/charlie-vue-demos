import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

// declare module "vue/types/vue" {
//   import VueRouter, { Route } from 'vue-router';
//   interface Vue {
//     $router: VueRouter;
//     $route: Route;
//     $http: any;
//     $Message: any;
//     $Modal: any;
//   }
// }
