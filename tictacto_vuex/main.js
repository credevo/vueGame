import Vue from 'vue';
import basicStore from './store.js';

import TicTacTo from  './page/TicTacTo.vue'; 

new Vue({
    render : h=> h(TicTacTo),
    store : basicStore,
}).$mount('#root');