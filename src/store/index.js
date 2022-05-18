import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backendUrl: 'http://127.0.0.1:8000/api/v1'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getServerUrl: state => {
      return state.backendUrl
    }
  }
})
