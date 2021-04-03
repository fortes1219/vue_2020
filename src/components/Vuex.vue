<template>
  <div class="page">
    <div class="row horizontal v_center space">
      <el-button type="primary">call mutation</el-button>
      <el-button type="primary" @click="$router.push({name: 'VuexDetail'})">Next Page(VuexDetail)</el-button>
    </div>
    <div class="row vertical" data-width="20rem">
      <div class="row horizontal space" data-space-vertical="0.5rem">
        <label>Name:</label>
        <span>{{ setDOM.name }}</span>
      </div>
      <div class="row horizontal space" data-space-vertical="0.5rem">
        <label>Class:</label>
        <span>{{ setDOM.class }}</span>
      </div>
      <div class="row horizontal space" data-space-vertical="0.5rem">
        <label>Status:</label>
        <span>{{ setDOM.status }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Vuex',
  components: {

  },
  data() {
    return {
      result: '',
    }
  },
  computed: {
    setDOM() {
      this.result = this.$store.state.res
      return this.result
    }
  },

  methods: {
    async init() {
      await this.$store.commit('SET_TYPE', 1)
      await this.$store.dispatch('FETCH_RESPONSE')
      console.log('result: ', this.setDOM)
    }
  },
  created() {
    this.init()
  },
}
</script>
