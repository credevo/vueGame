import Vue from 'vue';
import Vuex from 'vuex';
import basic from './store/basic.js';

Vue.use(Vuex);

export default new Vuex.Store(basic);