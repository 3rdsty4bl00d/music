<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Featured Songs
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <hr>
      </div>
    </div>
    <div class="row all-songs">
      <div
        class="col-xs-12 col-sm-4 col-md-3 card-deck"
        v-for="(x, i) in songs.length"
        :key="i"
        style="margin-bottom: 30px;"
      >
        <div
          class="card"
          style="width: 18rem;"
        >
          <img
            class="card-img-top"
            :src="featuredSongs[i].cover_image"
            alt="Card image cap"
            style="height: 200px; width: 223px; cursor: pointer;"
            v-b-popover.hover="
              'Album name: ' + albumName[i]
              + '\nArtist: ' + featuredSongs[i].artist
              + '\nGenre: ' + featuredSongs[i].genre
              + '\nPrice: Rs ' + featuredSongs[i].price
              + '\nCLICK TO ADD TO CART'"
            :title="'Song Title: ' + featuredSongs[i].song_name"
            @click="addToShop(i)"
          >
          <div class="card-body">
            <p class="card-text"> {{ featuredSongs[i].song_name }} </p>
          </div>
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
      songs: [],
      albumName: [],
      featuredSongs: []
    }
  },
  created () {
    axios.get('http://sacmusic.com/api/music')
      .then(res => {
        console.log(res.data.music)
        this.songs = res.data.music
        for (let i = 0; i < this.songs.length; i++) {
          if (this.songs[i].is_featured === 1) {
            this.featuredSongs.push(this.songs[i])
          }
        }
        axios.get('http://sacmusic.com/api/album')
          .then(res => {
            console.log(res.data.album)
            for (let i = 0; i < this.featuredSongs.length; i++) {
              for (let j = 0; j < res.data.album.length; j++) {
                if (this.featuredSongs[i].album_id === res.data.album[j].id) {
                  this.albumName.push(res.data.album[j].album_name)
                }
              }
            }
            console.log(this.albumName)
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
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
            if (this.featuredSongs[index].id === res.data.music[j].id) {
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
.container {
  margin: 90px 55px;
}
.all-songs {
  position: relative;
  left: 9%;
}
.card-deck {
  display: flex !important;
}
.card-img-top:hover {
  opacity: 0.6;
}
</style>
