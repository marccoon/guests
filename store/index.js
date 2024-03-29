export const state = () => ({
  modal: false,
  map: false,
  usedLanguageSelection: false
})

export const mutations = {
  showMap (state) {
    state.map = true
    state.modal = false
  },
  hideMap (state) {
    state.map = false
  },
  showModal (state) {
    state.modal = true
    state.map = false
  },
  hideModal (state) {
    state.modal = false
  },
  usedLanguageSelection (state) {
    state.usedLanguageSelection = true
  }
}

export const actions = {
  hideMap ({ commit }) {
    commit('hideMap')
  },
  showMap ({ commit }) {
    commit('showMap')
  },
  hideModal ({ commit }) {
    commit('hideModal')
  },
  showModal ({ commit }) {
    commit('showModal')
  },
  usedLanguageSelection ({ commit }) {
    commit('usedLanguageSelection')
  }
}
