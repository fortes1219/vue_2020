<template>
  <div class="main home">
    <div class="side">
      <div class="logo">Admin Template</div>
      <nav>
        <label>Home</label>
        <ul>
          <li @click="$router.push({name: 'Dashboard'})">Dashboard</li>
          <li @click="$router.push({name: 'Dashboard'})">Component</li>
          <li @click="$router.push({name: 'Dashboard'})">Data Event</li>
          <li @click="$router.push({name: 'Dashboard'})">Pickup</li>
          <li @click="$router.push({name: 'Dashboard'})">圖表</li>
          <li @click="$router.push({name: 'Dashboard'})">API</li>
          <li @click="$router.push({name: 'Dashboard'})">Local Storange</li>
          <li @click="$router.push({name: 'Dashboard'})">Cookies</li>
          <li @click="$router.push({name: 'Dashboard'})">RegExp 正則表達式</li>
        </ul>
        <label>狀態管理</label>
        <ul>
          <li @click="$router.push({name: 'Dashboard'})">Vuex</li>
        </ul>
        <label>多語系處理</label>
        <ul>
          <li @click="$router.push({name: 'Dashboard'})">i18n</li>
        </ul>
        <label>上傳機制</label>
        <ul>
          <li @click="$router.push({name: 'Dashboard'})">Uploader</li>
        </ul>
        <label>圖表</label>
        <ul>
          <li @click="$router.push({name: 'Dashboard'})">v-charts</li>
        </ul>
      </nav>
      <div class="footer"></div>
    </div>
    <div class="primary">
      <div class="header">
        <p>{{ getRouterName }}</p>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      pathName: '',
    };
  },

  computed: {
    getRouterName() {
      return this.$route.name;
    },
  },

  methods: {

  },
};
</script>
