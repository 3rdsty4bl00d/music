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
    <div class="row">
      <div>
        <b-card-group deck>
          <b-card
            :header="'Album Title: ' + album[i].album_name"
            header-tag="header"
            :footer="'Price: Rs ' + price"
            footer-tag="footer"
            img-fluid="true"
            v-for="(trendingSongs, i) in 4"
            :key="trendingSongs"
          >
            <img
              :src="album[i].cover_image"
              alt="random"
              style="height: 200px; width: 220px; cursor: pointer;"
            >
          </b-card>
        </b-card-group>
      </div>
    </div>
    <div
      class="row"
      style="margin-top: 30px;"
    >
      <div class="col-xs-12">
        <b-button
          class="see-button btn btn-dark"
          to="/trendingAlbums"
        >See More</b-button>
      </div>
    </div>
  </div>
</template>

<script>
/* import Velocity from 'velocity-animate' */
import axios from 'axios'
export default {
  data () {
    return {
      price: 1200,
      songTitle: 'hello',
      album: []
    }
  },
  created () {
    axios.get('http://sacmusic.com/api/album')
      .then(res => {
        for (let i = 0; i < res.data.album.length; i++) {
          this.album.push(res.data.album[i])
        }
        console.log(this.album.length)
      })
      .catch(err => {
        console.log(err)
      })
  },
  // computed: {
  //   album () {
  //     return this.$store.getters.album
  //   }
  // },
  methods: {
  }
}
</script>

<style scoped>
.card-body {
  padding: 0;
}
.card-deck .card {
  margin: 0 35px;
}
.see-button {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
