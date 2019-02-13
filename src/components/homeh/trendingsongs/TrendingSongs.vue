<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h3 class="trending-song__title">Trending Songs
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <hr class="hor-length">
      </div>
    </div>
    <!-- <div class="row">
      <div>
        <b-card-group deck>
          <b-card
            :footer="trendingSongs[i].song_name"
            footer-tag="footer"
            img-fluid="true"
            v-for="(trendingSong, i) in 5"
            :key="trendingSong"
            class="trending-card"
          >
            <img
              :src="trendingSongs[i].cover_image"
              alt="random"
              class="img-trending"
            >
            <button
              class="btn btn-primary play-btn"
              @click="playSound(trendingSongs[i].song)"
            >
              <i class="fas fa-play"></i>
            </button>
          </b-card>
        </b-card-group>
      </div>
    </div> -->
    <div class="row all-songs">
      <div
        class="col-xs-12 col-sm-4 col-md-3 card-deck"
        v-for="(x, i) in 4"
        :key="i"
        style="margin-bottom: 30px;"
      >
        <div class="card trending-card">
          <img
            class="card-img-top"
            :src="trendingSongs[i].cover_image"
            alt="Card image cap"
          >
          <button
            class="btn btn-primary play-btn"
            @click="playSound(trendingSongs[i].song)"
          >
            <i class="fas fa-play"></i>
          </button>
          <div class="card-body">
            <p class="card-text"> {{ trendingSongs[i].song_name }} </p>
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
          class="see-button btn"
          to="/trendingSongs"
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
      trendingSongs: [],
      songs: []
    }
  },
  created () {
    axios.get('http://sacmusic.com/api/music')
      .then(res => {
        console.log(res.data.music)
        this.trendingSongs = res.data.music
      })
      .catch(err => {
        console.log(err)
      })
    // for (let i = 0; i < 5; i++) {
    //   this.trendingSongs.push(this.songs[i])
    // }
  },
  computed: {
    userToken () {
      return this.$store.getters.userToken
    }
  },
  methods: {
    playSound (sound) {
      if (sound) {
        var audio = new Audio(sound)
        audio.play()
        setTimeout(() => {
          audio.pause()
        }, 20000)
      }
    }
  }
}
</script>

<style scoped>
.card-body {
  padding: 0;
  background-color: rgb(88, 182, 245);
}
.card-deck .card {
  margin: 0 35px;
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
.hor-length {
  position: relative;
  width: 57%;
  left: -6%;
  margin-bottom: 55px;
}
.trending-card {
  border: none;
  transition: all 0.5s ease;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  width: 18rem;
}
.card-deck .card {
  margin: 0 20px;
}
.img-trending {
  height: 200px;
  width: 220px;
  cursor: pointer;
}
.trending-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
}
.trending-card:hover .play-btn {
  opacity: 1;
}
.card-deck {
  position: relative;
  left: 2%;
}
.play-btn {
  position: absolute;
  top: 35%;
  left: -2px;
  transform: translateX(90px);
  opacity: 0;
  transition: all 0.5s ease;
  background-color: rgb(42, 145, 241);
  border: none;
}
.trending-song__title {
  margin-top: 40px;
  position: relative;
  left: 70px;
}
.trending-card:hover {
  transform: scale(1.2);
}
.card-img-top {
  height: 200px;
  width: 215px;
  cursor: pointer;
}
.all-songs {
  position: relative;
  left: 35px;
}
@media (min-width: 768px) and (max-width: 992px) {
  .card-img-top {
    width: 110px;
    height: 110px;
  }
  .play-btn {
    left: -50px;
    top: 35px;
  }
  .see-button {
    left: 350px;
  }
  .hor-length {
    left: 50px;
    width: 200px;
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
  .play-btn {
    left: -50px;
    top: 35px;
  }
  .see-button {
    left: 270px;
  }
  .hor-length {
    left: 40px;
    width: 200px;
  }
}
@media (min-width: 420px) and (max-width: 560px) {
  .card-img-top {
    width: 288px;
  }
  .play-btn {
    left: 32px;
    top: 90px;
  }
  .see-button {
    left: 220px;
  }
  .hor-length {
    left: -65px;
    width: 200px;
  }
  .card-deck {
    left: 50px;
    width: 340px;
    padding: 0;
  }
  .trending-song__title {
    left: 110px;
  }
  .all-songs {
    width: 340px;
  }
}
@media (min-width: 320px) and (max-width: 419px) {
  .card-img-top {
    height: 170px;
    width: 170px;
  }
  .trending-card {
    height: 170px;
    width: 170px;
    margin-bottom: 20px;
  }
  .play-btn {
    left: -28px;
    top: 70px;
  }
  .hor-length {
    left: 10px;
  }
  .see-button {
    left: 160px;
  }
  .all-songs {
    width: 200px;
  }
}
/* $colors:{
  rgb(65, 201, 24); rgba(46, 45, 45, 0.8);
}

@each $color in $colors {
  .play-btn {
    background-color: $color;
  }
} */
</style>
