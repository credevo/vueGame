import Vue from 'vue';
import EventBus  from './EventBus.js';
import TicTacTo from  './TicTacTo.vue'; 

Vue.prototype.$bus= EventBus;

new Vue(TicTacTo).$mount('#root');