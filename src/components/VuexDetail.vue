<template>
  <div class="page">
    <div class="row horizontal v_center space">
      <el-button type="primary" @click="callMutation">call mutation</el-button>
    </div>
    <el-button @click="$router.push({name: 'Vuex'})">prev page</el-button>
    <el-button @click="dataParser">parser</el-button>
    <br><br>
    <span>{{ result }}</span>
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
      json: '',
      result: '',
    }
  },
  computed: {

  },

  methods: {
    callMutation() {
      this.$store.commit('SET_TYPE', this.$route.meta.dataType)
      this.dataParser()
      console.log('##component## router type: ', this.$route.meta.dataType)
    },
    getData() {
      const source = 'http://localhost:8080/data/vuex.json'
      fetch(source).then((response) => response.json()).then((response) => {
        this.json = JSON.parse(JSON.stringify(response))
        this.$store.commit('SET_RESPONSE', this.json.res)
        this.dataParser()
        console.log('##get data: ', this.json.res)
      })
    },
    dataParser() {
      console.log('####', this.$store.state.res.type_1)
      const caseObj = {
        0: () => { this.result = 'Vuex not allowed!' },
        1: () => { this.result = this.$store.state.res.type_1 },
        2: () => { this.result = this.$store.state.res.type_2 },
      }
      caseObj[this.$store.state.type]()
    },
  },
  created() {
    this.getData()
    console.log('router: ', this.$route)
    console.log('store type: ', this.$store.state.type)
  },
}
</script>
