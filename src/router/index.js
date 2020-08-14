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
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
