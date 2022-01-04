import Vue from 'vue';

/**
 * dev tools 사용 금지 방법
 */
// Vue.config.devtools=false;

import ResponseCheck from  './ResponseCheck'; 
new Vue(ResponseCheck).$mount('#root');