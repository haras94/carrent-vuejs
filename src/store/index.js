import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLogin: {},
    adminLogin: {},
    rentallerLogin: {},
    rentallerDetail: {},
    cars: [],
    carsWithinLimit: [],
    modalLogin: false,
    carDetail: {},
    allMerek: []
  },
  getters: {
    isLogin: (state) => localStorage.id !== undefined
  },
  mutations: {
    SET_USER_LOGIN (state, data) {
      state.userLogin = data.data
    },
    SET_RENTALLER_LOGIN (state, data) {
      state.rentallerLogin = data.data
    },
    SET_RENTALLER_DETAIL (state, data) {
      state.rentallerDetail = data.data
    },
    SET_CARS (state, data) {
      state.cars = data
    },
    SET_CARS_WITHIN_LIMIT (state, data) {
      state.carsWithinLimit = data.data
    },
    MODAL_LOGIN_ON (state) {
      state.modalLogin = true
    },
    MODAL_LOGIN_OFF (state) {
      state.modalLogin = false
    },
    SET_CAR_DETAIL (state, data) {
      state.carDetail = data.data
    },
    SET_MEREK_MOBIL (state, data) {
      state.allMerek = data.data
    },
    SET_PAGE (state, data) {
      state.cars = data
    }
  },
  actions: {
    getApi ({ commit }, proto) {
      Axios.get(`${process.env.VUE_APP_API + proto.url}`)
        .then(res => {
          commit(proto.mutation, res.data)
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
