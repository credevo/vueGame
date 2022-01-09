import Vue from 'vue';
import Vuex from 'vuex';
import table from './store/table.js';

Vue.use(Vuex);

export default new Vuex.Store(table);