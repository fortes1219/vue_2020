const state = {
  name: 'kkk',
  select: {
    gameVendor: [],
    gameType: [],
  },
}
const getters = {
  mapGetName: state => {
    console.log('getter vuex name: ', state.name)
    return state.name
  },
}
const mutations = {
  changeName(state, val) {
    state.name = val
    console.log('mutation vuex name is: ', state.name)
  },
}
const actions = {
  commitName(val) {
    val.commit('changeName')
  },
}
export default {
  state,
  getters,
  mutations,
  actions,
}
