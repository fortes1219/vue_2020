<template>
  <div class="row vertical" data-width="20rem" data-space="padding-default">
    <el-input v-model="loginForm.username" type="text" placeholder="Username" />
    <el-input v-model="loginForm.password" type="password" placeholder="Password" />
    <el-button type="primary" @click="$router.push({ name: 'Dashboard' })">Login</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        token: '',
      },
    };
  },
  components: {},
  methods: {

  },
  created() {
  },
};
</script>
