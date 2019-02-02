import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    shop: [],
    userEmail: '',
    userPassword: '',
    signInShow: true,
    bottomSignInShow: true,
    browseAlbum: [],
    songs: [],
    album: []
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
    },
    setSongs: (state, payload) => {
      state.songs = payload
    },
    setAlbum: (state, payload) => {
      state.album = payload
    }
  },
  actions: {
    addToCart ({ commit, state }, payload) {
      for (let k = 0; k < state.songs.length; k++) {
        if (state.songs[k].id === payload) {
          let shopping = state.songs[k]
          commit('setToShop', shopping)
        }
      }
    },
    removeFromCart ({ commit }, payload) {
      commit('removeToShop', payload)
    },
    setUserEmail ({ commit }, payload) {
      commit('setEmail', payload)
    },
    setUserPassword ({ commit }, payload) {
      commit('setPassword', payload)
    },
    addSongs ({ commit }, payload) {
      commit('setSongs', payload)
    },
    addAlbum ({ commit }, payload) {
      commit('setAlbum', payload)
    }
  },
  getters: {
    songs (state) {
      return state.songs
    },
    shop: state => state.shop,
    userEmail: state => state.userEmail,
    userPassword: state => state.userpassword,
    signInShow: state => state.signInShow,
    bottomSignInShow: state => state.bottomSignInShow,
    browseAlbum: state => state.browseAlbum,
    album: state => state.album
  }
})
