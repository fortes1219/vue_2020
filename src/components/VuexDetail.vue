<template>
  <div class="page">
    <div class="row horizontal v_center space">
      <el-button type="primary">call mutation</el-button>
      <el-button type="primary" @click="$router.push({name: 'Vuex'})">Prev Page(Vuex)</el-button>
    </div>
    <div class="row vertical" data-width="20rem">
      <div class="row horizontal space" data-space-vertical="0.5rem">
        <label>Name:</label>
        <span>{{ getResponse.name }}</span>
      </div>
      <div class="row horizontal space" data-space-vertical="0.5rem">
        <label>Class:</label>
        <span>{{ getResponse.class }}</span>
      </div>
      <div class="row horizontal space" data-space-vertical="0.5rem">
        <label>Status:</label>
        <span>{{ getResponse.status }}</span>
      </div>
      <div class="row horizontal space" data-space-vertical="0.5rem">
        <label>Skills:</label>
        <span>{{ getSkills.join(', ') }}</span>
      </div>
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
    ...mapGetters([
      'getResponse',
      'getSkills',
    ]),
  },

  methods: {
    ...mapActions([
      'FETCH_RESPONSE'
    ]),
    ...mapMutations([
      'SET_TYPE'
    ]),
    async init() {
      await this.SET_TYPE(2)
      await this.FETCH_RESPONSE()
    }
  },
  created() {
    this.init()
  },
}
</script>
