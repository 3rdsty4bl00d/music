<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 com-sm-12 col-md-12">
        <h1> Album Name: {{albumName}} </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <hr>
      </div>
    </div>
    <div
      class="row"
      v-if="albumSongs.length === 0"
    >
      <div class="col-xs-12">
        <h3>No Songs Found.</h3>
        <h4>Sorry for the inconvenience.</h4>
      </div>
    </div>
    <div
      class="row all-songs"
      v-else
    >
      <div
        class="col-xs-12 col-sm-4 col-md-3 card-deck"
        v-for="(alb, i) in albumSongs.length"
        :key="i"
        style="margin-bottom: 30px;"
      >
        <div
          class="card"
          style="width: 18rem;"
        >
          <img
            class="card-img-top"
            :src="albumSongs[i].cover_image"
            alt="Card image cap"
            style="height: 200px; width: 223px; cursor: pointer;"
            v-b-popover.hover="
              '\nArtist: ' + albumSongs[i].artist
              + '\nGenre: ' + albumSongs[i].genre
              + '\nPrice: Rs ' + albumSongs[i].price
              + '\nCLICK TO ADD TO CART'"
            :title="'Album Title: ' + albumSongs[i].song_name"
            @click="addToShop(i)"
          >
          <div class="card-body">
            <p class="card-text"> {{ albumSongs[i].song_name }} </p>
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
      albumName: '',
      musicLength: null,
      albumSongs: []
    }
  },
  created () {
    this.musicLength = this.browseAlbum.musics.length
    for (let i = 0; i < this.musicLength; i++) {
      this.albumSongs.push(this.browseAlbum.musics[i])
    }
    console.log(this.albumSongs)
    axios.get('http://sacmusic.com/api/album')
      .then(res => {
        for (let i = 0; i < res.data.album.length; i++) {
          if (this.browseAlbum.id === res.data.album[i].id) {
            this.albumName = res.data.album[i].album_name
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    browseAlbum () {
      return this.$store.getters.browseAlbum
    }
  },
  methods: {
    addToShop (index) {
      axios.get('http://sacmusic.com/api/music')
        .then(res => {
          console.log(res.data.music)
          for (let j = 0; j < res.data.music.length; j++) {
            if (this.albumSongs[index].id === res.data.music[j].id) {
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
  position: relative;
  left: 5%;
}
</style>
