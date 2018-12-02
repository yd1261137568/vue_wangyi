
// import {Header} from 'mint-ui';

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'

import Split from './components/Split/Split.vue';
import ScrollX from './components/ScrollX/ScrollX.vue';
import TopHeader from './components/TopHeader/TopHeader.vue';



//注册全局路由
Vue.component('Split',Split);
//横向滑屏
Vue.component('ScrollX',ScrollX);
//注册全局header标签
// Vue.component(Header.name, Header);

Vue.component('TopHeader',TopHeader);

import './mock/mockServer';

Vue.config.productionTip = false;  // 阻止启动生产消息，常用作指令

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 注册路由
  render:h => h(App),
  store
})

