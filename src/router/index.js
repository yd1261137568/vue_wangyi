import Vue from 'vue';
import Router from 'vue-router';

import MSite from '../pages/MSite/MSite.vue';
import Recognition from '../pages/Recognition/Recognition.vue';
import Sort from '../pages/Sort/Sort.vue';
import Shopcart from '../pages/Shopcart/Shopcart.vue';
import Profile from '../pages/Profile/Profile.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/recognition',
      component: Recognition
    },
    {
      path: '/sort',
      component: Sort
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/msite'
    },
  ]
})
