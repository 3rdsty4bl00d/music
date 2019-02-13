<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h3 class="featured-song__title">Featured Songs
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <hr class="hor-line">
      </div>
    </div>
    <!-- <div class="row deck-feature">
      <div>
        <b-card-group deck>
          <b-card
            :footer="featuredSongs[i].song_name"
            footer-tag="footer"
            img-fluid="true"
            v-for="(trendingSong, i) in featuredSongs"
            :key="trendingSong"
            class="feature-song"
          >
            <img
              :src="featuredSongs[i].cover_image"
              alt="random"
              style="height: 200px; width: 220px; cursor: pointer;"
            >
            <button
              class="btn btn-primary play-btn"
              @click.prevent="playSound(featuredSongs[i].song)"
            >
              <i class="fas fa-play"></i>
            </button>
          </b-card>
        </b-card-group>
      </div>
    </div> -->
    <div class="row all-feature">
      <div
        class="col-xs-12 col-sm-4 col-md-3 card-deck"
        v-for="(x, i) in 4"
        :key="i"
        style="margin-bottom: 30px;"
      >
        <div class="card feature-song">
          <img
            class="card-img-top"
            :src="featuredSongs[i].cover_image"
            alt="Card image cap"
          >
          <button
            class="btn btn-primary play-btn"
            @click="playSound(featuredSongs[i].song)"
          >
            <i class="fas fa-play"></i>
          </button>
          <div class="card-body">
            <p class="card-text"> {{ featuredSongs[i].song_name }} </p>
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
        for (let i = 0; i < 5; i++) {
          this.featuredSongs.push(this.songs[i])
        }
      })
      .catch(err => {
        console.log(err)
      })
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
  /* ,
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
  background-color: rgb(42, 178, 241);
}
.see-button {
  position: absolute;
  left: 50%;
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
  width: 58%;
  position: relative;
  left: -36px;
  margin-bottom: 55px;
}
.feature-song {
  border: none;
  background-color: rgb(255, 255, 255);
  transition: all 0.5s ease;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  width: 18rem;
}
.feature-song:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
  transform: scale(1.2);
}
.card-deck .card {
  margin: 0 20px;
}
.card-footer {
  background-color: rgb(135, 204, 245);
}
.deck-feature {
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
  background-color: rgb(24, 130, 201);
  border: none;
}
.feature-song:hover .play-btn {
  opacity: 1;
}
.featured-song__title {
  margin-top: 30px;
  position: relative;
  left: 55px;
}
.card-img-top {
  height: 200px;
  width: 215px;
  cursor: pointer;
}
.all-feature {
  position: relative;
  left: 35px;
}
@media (min-width: 768px) and (max-width: 992px) {
  .card-img-top {
    width: 110px;
    height: 110px;
  }
  .see-button {
    left: 390px;
  }
  .play-btn {
    left: -50px;
    top: 35px;
  }
  .hor-line {
    left: 38px;
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
    left: 290px;
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
    left: 250px;
  }
  .hor-line {
    left: -65px;
    width: 200px;
  }
  .card-deck {
    left: 50px;
    width: 340px;
    padding: 0;
  }
  .featured-song__title {
    left: 110px;
  }
  .all-feature {
    width: 340px;
  }
}
@media (min-width: 320px) and (max-width: 419px) {
  .card-img-top {
    height: 170px;
    width: 170px;
  }
  .feature-song {
    height: 170px;
    width: 170px;
    margin-bottom: 20px;
  }
  .play-btn {
    left: -28px;
    top: 70px;
  }
  .hor-line {
    left: 10px;
  }
  .all-feature {
    width: 200px;
  }
}
</style>
