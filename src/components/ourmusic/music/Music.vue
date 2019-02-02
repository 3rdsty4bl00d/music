<template>
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
          :src="songs[i].cover_image"
          alt="Card image cap"
          style="height: 200px; width: 223px; cursor: pointer;"
          v-b-popover.hover="
              '\nArtist: ' + songs[i].artist
              + '\nGenre: ' + songs[i].genre
              + '\nCLICK TO ADD TO CART'"
          :title="'Song Title: ' + songs[i].song_name"
          @click="addToShop(i)"
        >
        <div class="card-body">
          <p class="card-text"> {{ songs[i].song_name }} </p>
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      songs: []
    }
  },
  created () {
    axios.get('http://sacmusic.com/api/music')
      .then(res => {
        console.log(res.data.music)
        this.songs = res.data.music
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    /* songs () {
      return this.$store.getters.songs
    } */
  },
  methods: {
    addToShop (index) {
      axios.get('http://sacmusic.com/api/music')
        .then(res => {
          console.log(res.data.music)
          for (let j = 0; j < res.data.music.length; j++) {
            if (this.songs[index].id === res.data.music[j].id) {
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
.card-deck {
  display: flex !important;
}
</style>
