import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    shop: [],
    userEmail: '',
    userPassword: '',
    signInShow: true,
    songs: [
      {
        name: 'hello',
        albumname: 'world',
        genre: 'classic',
        price: 300,
        artist: 'Shivam'
      },
      {
        name: 'hello',
        albumname: 'world',
        genre: 'folk',
        price: 300,
        artist: 'Shivam'
      },
      {
        name: 'hello',
        albumname: 'world',
        genre: 'rock',
        price: 300,
        artist: 'Shivam'
      },
      {
        name: 'hello',
        albumname: 'world',
        genre: 'fusion',
        price: 300,
        artist: 'Shivam'
      }
    ]
  },
  mutations: {
    setToShop: (state, payload) => {
      state.shop.push(payload)
    },
    removeToShop: (state, payload) => {
      state.shop.splice(payload, 1)
    },
    setEmail: (state, payload) => {
      state.userEmail = payload
    },
    setPassword: (state, payload) => {
      state.userPassword = payload
    }
  },
  actions: {
    addToCart ({ commit, state }, payload) {
      commit('setToShop', state.songs[payload])
    },
    removeFromCart ({ commit }, payload) {
      commit('removeToShop', payload)
    },
    setUserEmail ({ commit }, payload) {
      commit('setEmail', payload)
    },
    setUserPassword ({ commit }, payload) {
      commit('setPassword', payload)
    }
  },
  getters: {
    songs (state) {
      return state.songs
    },
    shop: state => state.shop,
    userEmail: state => state.userEmail,
    userPassword: state => state.userpassword,
    signInShow: state => state.signInShow
  }
})
