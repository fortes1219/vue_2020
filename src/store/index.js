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
      console.log('####MUTATIONS SET TYPE TO: ', state.type)
    },
    SET_RESPONSE(state, payload) {
      state.res = payload
      console.log('####MUTATIONS FETCH_RESPONSE: ', state.res)
    }
  },
  actions: {
    FETCH_RESPONSE(context, payload) {
      const source = 'http://localhost:8080/data/vuex.json'
      fetch(source).then((response) => response.json()).then((response) => {
        const caseObj = {
          0: () => { payload = 'Vuex not allowed!' },
          1: () => { payload = {...response.res.type_1[0]} },
          2: () => { payload = {...response.res.type_2[0]} },
        }
        caseObj[this.state.type]()
        console.log('####ACTIONS已經呼叫了Mutation: SET_RESPONSE')
        context.commit('SET_RESPONSE', payload)
      })

    }
  },
})

export default store
