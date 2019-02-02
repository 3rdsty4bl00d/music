<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      songs: [],
      album: []
    }
  },
  beforeCreate () {
    axios.get('http://sacmusic.com/api/music')
      .then(res => {
        this.songs = res.data.music
        this.$store.dispatch('addSongs', this.songs)
      })
      .catch(error => {
        console.log(error)
      })
    axios.get('http://sacmusic.com/api/album')
      .then(res => {
        this.album = res.data.album
        this.$store.dispatch('addAlbum', this.album)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>
</style>
