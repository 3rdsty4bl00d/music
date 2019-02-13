<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h3 class="trending-album__title">Trending Albums
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <hr class="hor-line">
      </div>
    </div>
    <!-- <div class="row deck-album">
      <div>
        <b-card-group deck>
          <b-card
            :footer="album[i].album_name"
            footer-tag="footer"
            img-fluid="true"
            v-for="(trendingSongs, i) in 5"
            :key="trendingSongs"
            class="trend-album"
          >
            <img
              :src="album[i].cover_image"
              alt="random"
              style="height: 200px; width: 226px; cursor: pointer;"
            >
          </b-card>
        </b-card-group>
      </div>
    </div> -->
    <div class="row all-album">
      <div
        class="col-xs-12 col-sm-4 col-md-3 card-deck"
        v-for="(x, i) in 4"
        :key="i"
        style="margin-bottom: 30px;"
      >
        <div class="card trend-album">
          <img
            class="card-img-top"
            :src="album[i].cover_image"
            alt="Card image cap"
          >
          <div class="card-body">
            <p class="card-text"> {{ album[i].album_name }} </p>
          </div>
        </div>
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
.see-button {
  position: relative;
  left: 550px;
  margin-bottom: 50px;
  transform: translateX(-50%);
  background-color: #247ba0;
  border: none;
  color: rgb(228, 225, 225);
  transition: all 0.5s ease;
}
.see-button:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
}
.hor-line {
  width: 62%;
  position: relative;
  left: -30px;
  margin-bottom: 55px;
}
.card-deck .card {
  margin: 0 20px;
}
.card-img-top {
  height: 200px;
  width: 215px;
  cursor: pointer;
}
.trend-album {
  border: none;
  background-color: rgb(255, 255, 255);
  transition: all 0.5s ease;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  width: 18rem;
}
.trend-album:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
  transform: scale(1.2);
}
.deck-album {
  position: relative;
  left: 2%;
}
.card-footer {
  background-color: rgb(255, 255, 255);
}
.trending-album__title {
  color: rgb(218, 214, 214);
  margin-top: 30px;
  position: relative;
  left: 55px;
}
.all-album {
  position: relative;
  left: 35px;
}
@media (min-width: 768px) and (max-width: 992px) {
  .card-img-top {
    width: 110px;
    height: 110px;
  }
  .see-button {
    left: 340px;
  }
  .hor-line {
    left: 45px;
    width: 210px;
  }
}
@media (min-width: 600px) and (max-width: 767px) {
  .card-deck:nth-child(4) {
    display: none;
  }
  .card-img-top {
    width: 110px;
    height: 110px;
  }
  .see-button {
    left: 261px;
  }
  .hor-line {
    left: 40px;
    width: 200px;
  }
}
@media (min-width: 420px) and (max-width: 560px) {
  .card-img-top {
    width: 288px;
  }
  .see-button {
    left: 260px;
  }
  .hor-length {
    left: -105px;
    width: 200px;
  }
  .card-deck {
    left: 50px;
    width: 350px;
    padding: 0;
  }
  .hor-line {
    left: -60px;
    width: 210px;
  }
  .trending-album__title {
    left: 110px;
  }
  .all-album {
    width: 340px;
  }
}
@media (min-width: 320px) and (max-width: 419px) {
  .card-img-top {
    height: 170px;
    width: 170px;
  }
  .trend-album {
    height: 170px;
    width: 170px;
    margin-bottom: 20px;
  }
  .hor-line {
    left: 10px;
  }
  .see-button {
    left: 150px;
  }
  .all-album {
    width: 200px;
  }
}
</style>
