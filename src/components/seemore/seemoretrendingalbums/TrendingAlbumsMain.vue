<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Trending Albums
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
        v-for="(x, i) in album.length"
        :key="i"
        style="margin-bottom: 30px;"
      >
        <div
          class="card"
          style="width: 18rem;"
        >
          <img
            class="card-img-top"
            :src="album[i].cover_image"
            alt="Card image cap"
            style="height: 200px; width: 223px; cursor: pointer;"
            v-b-popover.hover="
              'Album name: ' + album[i].album_name
              + '\nPrice: Rs ' + album[i].price
              + '\nCLICK TO BROWSE'"
            :title="'Album Title: ' + album[i].album_name"
            @click="navigateToBrowseAlbum(i)"
          >
          <div class="card-body">
            <p class="card-text"> {{ album[i].albumname }} </p>
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
      album: []
    }
  },
  created () {
    axios.get('http://sacmusic.com/api/album')
      .then(res => {
        for (let i = 0; i < res.data.album.length; i++) {
          this.album.push(res.data.album[i])
        }
        console.log(this.album)
      })
      .catch(err => {
        console.log(err)
      })
  },
  /* computed: {
    album () {
      return this.$store.getters.album
    }
  }, */
  methods: {
    navigateToBrowseAlbum (index) {
      this.$store.state.browseAlbum = this.album[index]
      this.$router.push('/browsealbum')
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
</style>
