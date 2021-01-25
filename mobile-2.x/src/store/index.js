import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations';
import actions from './actions';
import modules from './modules';

Vue.use(Vuex);

const store = {
  state: {
    name: 'charlie'
  },
  getters: {

  },
  mutations,
  actions,
  modules
};
export default new Vuex.Store(store);
