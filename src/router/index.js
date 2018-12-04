import Vue from 'vue';
import Router from 'vue-router';

import MSite from '../pages/MSite/MSite.vue';
import Recognition from '../pages/Recognition/Recognition.vue';
import Sort from '../pages/Sort/Sort.vue';
import Shopcart from '../pages/Shopcart/Shopcart.vue';
import Profile from '../pages/Profile/Profile.vue';

import Login from '../pages/Login/Login.vue';

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/msite/:id',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/recognition',
      component: Recognition,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/sort',
      component: Sort,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shopcart',
      component: Shopcart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite/0'
    },
  ]
})
