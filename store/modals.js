export const state = () => ({
  map: false
})

export const mutations = {
  showMap(state) {
    state.map = true
  },
  hideMap(state) {
    state.map = false
  }
}


export const actions = {
  hideMap ({commit}) {
    commit('hideMap')
  },
  showMap ({commit}) {
    commit('showMap')
  },
}
