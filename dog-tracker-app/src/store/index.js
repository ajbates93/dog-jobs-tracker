import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showBanner: false
  },
  mutations: {
    setShowBanner(state, val) {
      state.showBanner = val
    }
  },
  actions: {
    updateShowBanner({commit}, value) {
      commit('setShowBanner', value)
    }
  },
  modules: {
  }
})
