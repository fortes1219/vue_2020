<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    async packageGetData() {
      // json-server  API 位置
      const url = 'tableData';
      const res = await this.$api.get(url);
      this.tableData = [...res];
      console.log(res);
    },
  },
  created() {
    this.packageGetData();
  },
};
</script>
