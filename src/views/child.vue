<template>
    <div>
        <h1>{{ title }}</h1>
        <p>anything here!</p>
        <el-button type="primary" @click="handleChangeText">change Text</el-button>
    </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
      title: 'Component: Child',
    };
  },
  methods: {
    handleChangeText() {
      this.title = 'new Text!!';
    },
  },
};
</script>
