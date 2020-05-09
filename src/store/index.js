import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLogin: {},
    adminLogin: {},
    modalLogin: false,
    getCar: [],
    rentallerDetail: {}
  },
  getters: {
    isLogin: (state) => localStorage.id !== undefined
  },
  mutations: {
    SET_USER_LOGIN (state, data) {
      state.userLogin = data
    },
    SET_RENTALLER_DETAIL (state, data) {
      state.rentallerDetail = data
    },
    MODAL_LOGIN_ON (state) {
      state.modalLogin = true
    },
    MODAL_LOGIN_OFF (state) {
      state.modalLogin = false
    },
    getCars (state, data) {
      state.getCar = data
    }
  },
  actions: {
    getApi ({ commit }, proto) {
      Axios.get(`${process.env.VUE_APP_API + proto.url}`)
        .then(res => {
          const dataLogin = res.data
          commit(proto.mutation, dataLogin)
        })
        .catch(err => {
          console.log(err)
        })
    },
    postApi ({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.post(`${process.env.VUE_APP_API + proto.url}`, proto.data)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    patchApi ({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.patch(`${process.env.VUE_APP_API + proto.url}`, proto.data)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    getCar (context) {
      Axios.get(`${process.env.VUE_APP_API}product`)
        .then((result) => {
          console.log(result.data)
          context.commit('getCars', result.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
