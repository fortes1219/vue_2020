import Vue from 'vue'
import Vuex from 'vuex'
// import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  // modules,
  state: {
    res: {},
    type: 0,
  },
  getters: {

  },
  mutations: {
    SET_TYPE(state, payload) {
      state.type = payload
      console.log('##store## state.type: ', state.type)
    },
    SET_RESPONSE(state, payload) {
      state.res = payload
      console.log('##store## state.res: ', state.res)
    }
  },
  actions: {
  },
})

export default store
