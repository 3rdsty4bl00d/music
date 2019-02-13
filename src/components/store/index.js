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
    showSearching: true,
    showSearchingButton: false,
    browseAlbum: [],
    songs: [],
    album: [],
    userToken: '',
    searchSong: ''
  },
  mutations: {
    setShowSearching: (state, payload) => {
      state.showSearching = payload
    },
    setShowSearchingButton: (state, payload) => {
      state.showSearchingButton = payload
    },
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
    },
    setUserToken: (state, payload) => {
      state.userToken = payload
    },
    setSearchSong: (state, payload) => {
      state.searchSong = payload
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
    },
    addUserToken ({ commit }, payload) {
      commit('setUserToken', payload)
    },
    addSearchSong ({ commit }, payload) {
      commit('setSearchSong', payload)
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
    album: state => state.album,
    showSearching: state => state.showSearching,
    showSearchingButton: state => state.showSearchingButton,
    userToken: state => state.userToken,
    searchSong: state => state.searchSong
  }
})
