import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLogin: {},
    adminLogin: {},
    modalLogin: false
  },
  getters: {
    isLogin: (state) => localStorage.id !== undefined
  },
  mutations: {
    SET_USER_LOGIN (state, data) {
      state.userLogin = data
    },
    MODAL_LOGIN_ON (state) {
      state.modalLogin = true
    },
    MODAL_LOGIN_OFF (state) {
      state.modalLogin = false
    }
  },
  actions: {
    getApi ({ commit }, proto) {
      Axios.get(`${process.env.VUE_APP_API + proto.url}`)
        .then(res => {
          const dataLogin = res.data.data
          commit(proto.mutation, dataLogin)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
