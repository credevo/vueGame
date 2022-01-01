import Vue from 'vue';

// weback > resolve > extensions 등록하여 import 할때, 확장자 없이 사용 가능
// import BaseBall_jo from  './BaseBall_jo'; 
// new Vue(BaseBall_jo).$mount('#root');

import BaseBall from  './BaseBall'; 
new Vue(BaseBall).$mount('#root');