<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h3 class="video-title">Our Videos
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <hr class="hor-line">
      </div>
    </div>
    <div class="row">
      <div>
        <b-card-group deck>
          <b-card
            :footer="videos[i].song_name"
            footer-tag="footer"
            img-fluid="true"
            v-for="(trendingSong, i) in videos"
            :key="trendingSong"
            class="video-card"
          >
            <a
              href="https://www.youtube.com/channel/UCkFNsCj6dgLOVJRALl5iCUQ?disable_polymer=true&fbclid=IwAR2MURPQLeKRhhh1tp69z903FHd3PIzrz1rehLVNOf5_NIii_KhY9zNGLRQ"
              target="_blank"
            >
              <img
                :src="videos[i].cover_image"
                alt="random"
                class="video-images"
              >
            </a>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <div style="height: 50px;"></div>
    <!-- <button
      class="btn btn-primary btn-sm"
      @click.prevent="playSound"
    ><span class="fas fa-play"></span></button> -->
    <!-- <av-waveform :audio-src='song'></av-waveform> -->
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
      songs: [],
      song: ''
    }
  },
  methods: {
    playSound () {
      axios.get('http://sacmusic.com/api/music')
        .then(res => {
          console.log(res.data.music)
          let sound = res.data.music[13].song
          if (sound) {
            this.song = sound
            var audio = new Audio(sound)
            audio.play()
            setTimeout(() => {
              audio.pause()
            }, 20000)
          }
        })
        .catch(err => {
          console.log(err)
        })
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
  margin: 0 4px;
}
.see-button {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(57, 193, 247);
  border: none;
}
.hor-line {
  width: 40%;
  position: relative;
  left: -115px;
  margin-bottom: 55px;
}
.video-card {
  border: none;
  background-color: rgb(255, 255, 255);
  transition: all 0.5s ease;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
}
.video-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
}
.card-footer {
  background-color: rgb(117, 202, 241);
}
.video-images {
  height: 200px;
  width: 225px;
  cursor: pointer;
}
.video-title {
  position: relative;
}
@media (min-width: 768px) and (max-width: 992px) {
  .video-images {
    width: 110px;
    height: 110px;
  }
}
@media (min-width: 600px) and (max-width: 767px) {
  .video-images {
    width: 110px;
    height: 110px;
  }
  .video-card:nth-child(4) {
    display: none;
  }
}
@media (max-width: 560px) {
  .video-images {
    width: 320px;
  }
  .see-button {
    left: 250px;
  }
  .hor-line {
    /* left: 0.5rem; */
    width: 145px;
  }
  .video-card {
    left: 70px;
    width: 320px;
    padding: 0;
  }
  .video-title {
    left: 100px;
  }
}
@media (min-width: 320px) and (max-width: 419px) {
  .video-images {
    height: 170px;
    width: 170px;
  }
  .video-card {
    height: 170px;
    width: 170px;
  }
  .hor-line {
    left: 10px;
  }
  .see-button {
    left: 160px;
  }
  .card-footer {
    display: none;
  }
}
</style>
