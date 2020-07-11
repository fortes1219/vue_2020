import Vue from 'vue';
import ElementUI from 'element-ui';
import axios from 'axios';
import api from '@/service/api';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = true;
Vue.prototype.$api = api;

Vue.use(ElementUI);
Vue.use(VueAxios, axios);
new Vue({
  router,
  store,
  el: '#app',
  render: (h) => h(App),
}).$mount('#app');
