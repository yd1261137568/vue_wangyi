
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'

import Split from './components/Split/Split.vue';
import ScrollX from './components/ScrollX/ScrollX.vue';



//注册全局路由
Vue.component('Split',Split);
//横向滑屏
Vue.component('ScrollX',ScrollX);

import './mock/mockServer';

Vue.config.productionTip = false;  // 阻止启动生产消息，常用作指令

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 注册路由
  render:h => h(App),
  store
})

