<template>
  <div class="home">
    <div class="row horizontal v_center">
      <span>01</span><span>02</span><span>03</span><span>04</span>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
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
    // this.packageGetData();
  },
};
</script>
