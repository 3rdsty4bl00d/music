<template>
  <div class="row all-songs">
    <div
      class="col-xs-12 col-sm-4 col-md-3 card-deck"
      v-for="(x, i) in rockSongs.length"
      :key="i"
      style="margin-bottom: 30px;"
    >
      <div
        class="card"
        style="width: 18rem;"
      >
        <img
          class="card-img-top"
          :src="rockSongs[i].cover_image"
          alt="Card image cap"
          style="height: 200px; width: 223px; cursor: pointer;"
          v-b-popover.hover="
              'Album name: ' + albumName[i]
              + '\nArtist: ' + rockSongs[i].artist
              + '\nGenre: ' + rockSongs[i].genre
              + '\nPrice: Rs ' + rockSongs[i].price
              + '\nCLICK TO ADD TO CART'"
          :title="'Song Title: ' + rockSongs[i].song_name"
          @click="addToShop(i)"
        >
        <div class="card-body">
          <p class="card-text"> {{ rockSongs[i].song_name }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      rockSongs: [],
      songs: [],
      albumName: []
    }
  },
  created () {
    axios.get('http://sacmusic.com/api/music')
      .then(res => {
        console.log(res)
        this.songs = res.data.music
        for (let i = 0; i < this.songs.length; i++) {
          if (this.songs[i].genre === 'Rock') {
            this.rockSongs.push(this.songs[i])
          }
        }
        console.log(this.rockSongs)
        axios.get('http://sacmusic.com/api/album')
          .then(res => {
            console.log(res.data.album)
            for (let i = 0; i < this.rockSongs.length; i++) {
              for (let j = 0; j < res.data.album.length; j++) {
                if (this.rockSongs[i].album_id === res.data.album[j].id) {
                  this.albumName.push(res.data.album[j].album_name)
                  // this.rockSongs[i].push('albumName: ' + res.data.album[j].album_name)
                }
              }
            }
            console.log(this.albumName)
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(error => {
        console.log(error)
      })
  },
  /* computed: {
    songs () {
      return this.$store.getters.songs
    }
  }, */
  methods: {
    addToShop (index) {
      axios.get('http://sacmusic.com/api/music')
        .then(res => {
          console.log(res.data.music)
          for (let j = 0; j < res.data.music.length; j++) {
            if (this.rockSongs[index].id === res.data.music[j].id) {
              this.$store.dispatch('addToCart', res.data.music[j].id)
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.all-songs {
  position: relative;
  left: 9%;
}
</style>
