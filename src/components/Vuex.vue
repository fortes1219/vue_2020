<template>
  <div class="page">
    <div class="row horizontal v_center space">
      <el-button type="primary" @click="callMutation">call mutation</el-button>
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
      vuexName: '',
    }
  },
  computed: {
    // ...mapGetters(['mapGetVal']),
    ...mapGetters([
      'mapGetName',
    ]),
  },

  methods: {
    ...mapMutations(['SET_STATE', 'changeName']),
    // changeState(val) {
    //   this.SET_TATE(val)
    // },
    ...mapActions(['commitName']),
    callMutation() {
      this.changeName('Jack')
      sessionStorage.setItem('vuexName', 'Jack')
    },
  },
  created() {
    this.vuexName = this.mapGetName
  },
}
</script>
