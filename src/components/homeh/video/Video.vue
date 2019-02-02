<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Our Videos
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
            :header="'Song Title: ' + videos[i].song_name"
            header-tag="header"
            :footer="'Price: Rs ' + videos[i].price"
            footer-tag="footer"
            img-fluid="true"
            v-for="(trendingSong, i) in videos"
            :key="trendingSong"
          >
            <a href="https://www.youtube.com/watch?v=zVty9rD4X-o" target="_blank">
              <img
                :src="videos[i].cover_image"
                alt="random"
                style="height: 200px; width: 220px; cursor: pointer;"
              >
            </a>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <div style="height: 50px;"></div>
    <iframe
      width="220"
      height="200"
      src="https://www.youtube.com/embed/zVty9rD4X-o"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div
      class="row"
      style="margin-top: 30px;"
    >
      <div class="col-xs-12">
        <b-button
          class="see-button btn btn-dark"
          to="/video"
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
      videos: [],
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
          this.videos.push(this.songs[i])
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
