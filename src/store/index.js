import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  state: {
    name: 'Phoebe',
  },
  getters: {

  },
  mutations: {

  },
  actions: {
  },
})

export default store
