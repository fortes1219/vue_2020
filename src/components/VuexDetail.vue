<template>
  <div class="page">
    <div class="row horizontal v_center space">
      <span class="row">Vuex Detail</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'VuexDetail',
  components: {

  },
  data() {
    return {
      vuexName: '',
    }
  },
  computed: {
    ...mapGetters(['mapGetName']),
  },

  methods: {
    ...mapMutations(['changeName']),
    changeState(val) {
      this.changeName(val)
    },
  },
  created() {
    this.changeState(sessionStorage.getItem('vuexName'))
    this.vuexName = this.mapGetName
    console.log('after mutation name is: ', this.vuexName)
  },
}
</script>
