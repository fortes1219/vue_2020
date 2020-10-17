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
