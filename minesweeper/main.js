import Vue from 'vue';
import store from './store';

import MineSweeper from  './MineSweeper.vue'; 

new Vue({
    render : h=> h(MineSweeper),
    store : store,
}).$mount('#root');