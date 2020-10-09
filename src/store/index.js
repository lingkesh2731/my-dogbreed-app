import Vue from "vue";
import Vuex from "vuex";
import * as modules from '../store/modules/index'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { modules },
  state: { },
  // mutations: {},
  // actions: {},
});
