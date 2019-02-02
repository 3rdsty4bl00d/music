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
    <div class="row">
      <div>
        <b-card-group deck>
          <b-card
            :header="'Song Title: ' + featuredSongs[i].song_name"
            header-tag="header"
            :footer="'Price: Rs ' + featuredSongs[i].price"
            footer-tag="footer"
            img-fluid="true"
            v-for="(trendingSong, i) in featuredSongs"
            :key="trendingSong"
          >
            <img
              :src="featuredSongs[i].cover_image"
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
          to="/featuredSongs"
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
      featuredSongs: [],
      songs: []
    }
  },
  created () {
    axios.get('http://sacmusic.com/api/music')
      .then(res => {
        console.log(res.data.music[1].is_featured)
        for (let j = 0; j < res.data.music.length; j++) {
          if (res.data.music[j].is_featured === 1) {
            this.songs.push(res.data.music[j])
          }
        }
        for (let i = 0; i < 4; i++) {
          this.featuredSongs.push(this.songs[i])
        }
      })
      .catch(err => {
        console.log(err)
      })
  }/* ,
  computed: {
    songs () {
      return this.$store.getters.songs
    }
  } */
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
