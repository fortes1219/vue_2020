const state = {
  temp_name: 'kkk',
  select: {
    gameVendor: [],
    gameType: [],
  },
}
const getters = {
  mapGetName: state => {
    console.log('getter vuex name: ', state.temp_name)
    return state.temp_name
  },
}
const mutations = {
  changeName(state, val) {
    state.temp_name = val
    console.log('mutation vuex name is: ', val)
  },
}
const actions = {
  commitName(context, payload) {
    context.commit('changeName', payload)
  },
}
export default {
  state,
  getters,
  mutations,
  actions,
}
