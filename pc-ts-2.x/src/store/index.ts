import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


import IAboutState from './modules/about'

interface IRootState {
  about: IAboutState;
}
export default new Vuex.Store<IRootState>({});
