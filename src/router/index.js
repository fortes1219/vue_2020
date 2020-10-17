import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../components/Dashboard.vue'),
      },
      {
        path: 'data_event',
        name: 'DataEvent',
        component: () => import('../components/DataEvent.vue'),
      },
      {
        path: 'api_temp',
        name: 'ApiTemp',
        component: () => import('../components/ApiTemp.vue'),
      },
      {
        path: 'props_emit',
        name: 'PropsEmit',
        component: () => import('../components/PropsEmit.vue'),
      },
      {
        path: 'recursive_menu',
        name: 'recursiveMenu',
        component: () => import('../components/RecursiveMenu.vue'),
      },
      {
        path: 'vuex',
        name: 'Vuex',
        component: () => import('../components/Vuex.vue'),
      },
      {
        path: 'vuex_detail',
        name: 'VuexDetail',
        component: () => import('../components/VuexDetail.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
