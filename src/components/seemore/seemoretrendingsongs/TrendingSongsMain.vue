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
        <hr class="hor-line">
      </div>
    </div>
    <!-- <div class="row all-songs">
      <div
        class="col-xs-12 col-sm-4 col-md-3 card-deck"
        v-for="(x, i) in songs.length"
        :key="i"
        style="margin-bottom: 30px;"
      >
        <div
          class="card trending-song__card"
          style="width: 18rem;"
        >
          <img
            class="card-img-top"
            :src="songs[i].cover_image"
            alt="Card image cap"
            style="height: 200px; width: 223px; cursor: pointer;"
            v-b-popover.hover="
              'Album name: ' + albumName[i]
              + '\nArtist: ' + songs[i].artist
              + '\nGenre: ' + songs[i].genre
              + '\nPrice: Rs ' + songs[i].price
              + '\nCLICK TO ADD TO CART'"
            :title="'Song Title: ' + songs[i].song_name"
            @click="addToShop(i)"
          >
          <button
            class="btn btn-primary play-btn"
            @click.prevent="playSound(songs[i].song)"
          >
            <i class="fas fa-play"></i>
          </button>
          <button
            class="btn btn-primary play-btn"
            @click.prevent="playSoundPause(songs[i].song)"
            v-else
          >
            <i class="fas fa-pause"></i>
          </button>
          <div class="card-body">
            <p class="card-text"> {{ songs[i].song_name }} </p>
          </div>
        </div>
      </div>
    </div> -->
    <div
      class="row trend-song__card-new"
      v-for="(song, i) in songs"
      :key="song"
    >
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="card one-song__card">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-2 maintain-line">
                <img
                  :src="songs[i].cover_image"
                  alt="trending image"
                  class="trending-album__image-and-play"
                >
                <button
                  class="btn play-btn"
                  @click.prevent="playSound(songs[i].song)"
                ><i class="fas fa-play"></i></button>
              </div>
              <!-- <div class="col-xs-12 col-sm-1 col-md-1">
                <img
                  src="../../../assets/equaliser.gif"
                  alt="equaliser"
                  class="equaliser-image"
                  v-if="songs[i].song"
                >
              </div> -->
              <div class="col-xs-12 col-sm-12 col-md-3 maintain-line">
                <p class="song-title">Song Title:</p>
                <p class="song-details"> {{ songs[i].song_name }} </p>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-1 maintain-line">
                <p class="song-title">Genre:</p>
                <p
                  class="song-details"
                  style="font-size: 15px;"
                > {{ songs[i].genre }} </p>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-2 maintain-line">
                <p class="song-title">Artist:</p>
                <p class="song-details"> {{ songs[i].artist }} </p>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 maintain-line">
                <p class="song-title">Album Name:</p>
                <p class="song-details"> {{ albumName[i] }} </p>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-1 maintain-line">
                <button
                  class="btn add-btn"
                  @click="addToShop(i)"
                ><i class="fas fa-cart-plus"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <img
      src="../../../assets/equaliser.gif"
      alt="equaliser"
      class="equaliser-image"
      v-show="equaliserShow"
    > -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      songs: [],
      albumName: [],
      equaliserShow: false,
      btnPause: true
    }
  },
  created () {
    axios.get('http://sacmusic.com/api/music')
      .then(res => {
        console.log(res.data.music)
        this.songs = res.data.music
        axios.get('http://sacmusic.com/api/album')
          .then(res => {
            console.log(res.data.album)
            for (let i = 0; i < this.songs.length; i++) {
              for (let j = 0; j < res.data.album.length; j++) {
                if (this.songs[i].album_id === res.data.album[j].id) {
                  this.albumName.push(res.data.album[j].album_name)
                }
              }
            }
            console.log(this.albumName)
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  },
  /* computed: {
    songs () {
      return this.$store.getters.songs
    }
  }, */
  methods: {
    playSound (sound) {
      // this.btnPause = !this.btnPause
      if (sound) {
        this.equaliserShow = !this.equaliserShow
        var audio = new Audio(sound)
        audio.play()
        setTimeout(() => {
          this.equaliserShow = !this.equaliserShow
          audio.pause()
        }, 20000)
      }
    },
    // playSoundPause (sound) {
    //   this.btnPause = !this.btnPause
    //   if (sound) {
    //     var audio = new Audio(sound)
    //     audio.pause()
    //   }
    // },
    addToShop (index) {
      axios.get('http://sacmusic.com/api/music')
        .then(res => {
          console.log(res.data.music)
          for (let j = 0; j < res.data.music.length; j++) {
            if (this.songs[index].id === res.data.music[j].id) {
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
  position: relative;
  margin: 76px 55px;
}
.all-songs {
  position: relative;
  left: 9%;
}
.card {
  border-radius: 50px;
}
.trend-song__card-new {
  margin: 20px;
  position: relative;
  left: 35px;
}
.equaliser-image {
  height: 100px;
  width: 100%;
  position: absolute;
  /* position: fixed; */
  margin: 10px 0;
  left: -90px;
}
.trending-album__image-and-play {
  height: 60px;
  width: 60px;
  margin: 10px 0;
  border-radius: 50%;
  border: 1px solid rgb(156, 154, 154);
  transition: all 1s ease;
  cursor: pointer;
}
.trending-album__image-and-play:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
}
.one-song__card:hover .play-btn {
  opacity: 1;
}
.one-song__card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
}
.song-details {
  margin: 5px 0;
}
.add-btn {
  background-color: rgb(51, 181, 233);
  border-radius: 50%;
  margin-top: 6px;
  padding: 20px 23px;
  transition: all 1s ease;
  position: relative;
  left: -10px;
}
.add-btn:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
}
.song-title {
  margin-bottom: 0;
  margin-top: 10px;
}
.play-btn {
  position: absolute;
  top: 30%;
  left: -65px;
  transform: translateX(90px);
  opacity: 0;
  transition: all 0.5s ease;
  background-color: transparent;
  border: none;
  z-index: 999;
}
.trending-song__title {
  margin-top: 50px;
  position: relative;
  left: 55%;
}
.hor-line {
  width: 58%;
  position: relative;
  left: 20px;
  margin-bottom: 55px;
}
.one-song__card {
  position: relative;
}
/* .trending-song__card {
  transition: all 1s ease;
  background-color: rgb(91, 175, 243);
}
.trending-song__card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
} */
@media (min-width: 768px) and (max-width: 992px) {
  .maintain-line {
    display: inline-block;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .one-song__card {
    left: -60px;
  }
  .container {
    width: 320px;
  }
}
</style>
