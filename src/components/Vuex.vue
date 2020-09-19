<template>
  <div class="page">
    <div class="row horizontal v_center space">
      <span class="row">{{ $store.state.name }}</span>
      <span class="row">{{ $store.state.temp.name }}</span>
      <!-- <el-button type="primary" @click="changeState('hello')">Mutation</el-button> -->
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
    }
  },
  computed: {
    // ...mapGetters(['mapGetVal']),
  },

  methods: {
    // ...mapMutations(['SET_STATE']),
    // changeState(val) {
    //   this.SET_TATE(val)
    // },
  },
  created() {
    // console.log(this.$store.modules.name)
  },
}
</script>
