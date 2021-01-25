import './../static/js/flexible';
import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import './style/common.scss';
import './style/init-css.scss';
import Vant from 'vant';
import 'vant/lib/index.css';
import './base';
import VueAwesomeSwiper from 'vue-awesome-swiper';
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css';

console.log('router', router);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.use(Vant);
new Vue({
  el: '#app',
  router,
  store,
  render: createElement => {
    const VNode = createElement(App);
    console.log(VNode);
    return VNode;
  },
  // render: App.render,
  // render: createElement => createElement('div', {
  //   attrs: {
  //     id: 'app'
  //   }
  // }, App.default),
  data: {
    isShowNavBar: true
  },
  methods: {
    showNavBar() {
      this.isShowNavBar = true;
    },
    hideNavBar() {
      this.isShowNavBar = false;
    }
  }
});
