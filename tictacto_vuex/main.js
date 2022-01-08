import Vue from 'vue';
import store from './store.js';

import TicTacTo from  './page/TicTacTo.vue'; 

new Vue({
    render : h=> h(TicTacTo),
    store,
}).$mount('#root');