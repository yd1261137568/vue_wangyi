
import Vue from 'vue';
import App from './App';
import router from './router';

import Split from './components/Split/Split.vue';

//注册全局路由
Vue.component('Split',Split);

import './mock/mockServer';

Vue.config.productionTip = false;  // 阻止启动生产消息，常用作指令

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 注册路由
  render:h => h(App),
})

