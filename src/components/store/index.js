import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    shop: [],
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
    }
  },
  actions: {
    addToCart ({ commit, state }, payload) {
      commit('setToShop', state.songs[payload])
    },
    removeFromCart ({ commit }, payload) {
      commit('removeToShop', payload)
    }
  },
  getters: {
    songs (state) {
      return state.songs
    },
    shop: state => state.shop
  }
})
