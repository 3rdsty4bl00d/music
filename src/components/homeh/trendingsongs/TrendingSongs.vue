<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Trending Songs
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
            :header="'Song Title: ' + trendingSong.name"
            header-tag="header"
            :footer="'Price: Rs ' + trendingSong.price"
            footer-tag="footer"
            img-fluid="true"
            v-for="trendingSong in trendingSongs"
            :key="trendingSong"
          >
            <img
              src="https://picsum.photos/200/300/?random"
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
          to="/trendingSongs"
        >See More</b-button>
      </div>
    </div>
  </div>
</template>

<script>
/* import Velocity from 'velocity-animate' */
export default {
  data () {
    return {
      trendingSongs: []
    }
  },
  created () {
    for (let i = 0; i < 4; i++) {
      this.trendingSongs.push(this.songs[i])
    }
  },
  computed: {
    songs () {
      return this.$store.getters.songs
    }
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
