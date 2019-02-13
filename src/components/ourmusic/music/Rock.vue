<template>
  <div class="row all-songs">
    <div
      class="col-xs-12 col-sm-4 col-md-3 card-deck"
      v-for="(x, i) in rockSongs.length"
      :key="i"
      style="margin-bottom: 30px;"
    >
      <div class="card rock-music__filter">
        <img
          class="card-img-top"
          :src="rockSongs[i].cover_image"
          alt="Card image cap"
          v-b-popover.hover="
              'Album name: ' + albumName[i]
              + '\nArtist: ' + rockSongs[i].artist
              + '\nGenre: ' + rockSongs[i].genre
              + '\nPrice: Rs ' + rockSongs[i].price
              + '\nCLICK TO ADD TO CART'"
          :title="'Song Title: ' + rockSongs[i].song_name"
          @click="addToShop(i)"
        >
        <button
          class="btn btn-primary play-btn"
          @click.prevent="playSound(rockSongs[i].song)"
        >
          <i class="fas fa-play"></i>
        </button>
        <div class="card-body">
          <p class="card-text"> {{ rockSongs[i].song_name }} </p>
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
      rockSongs: [],
      songs: [],
      albumName: []
    }
  },
  created () {
    axios.get('http://sacmusic.com/api/music')
      .then(res => {
        console.log(res)
        this.songs = res.data.music
        for (let i = 0; i < this.songs.length; i++) {
          if (this.songs[i].genre === 'Rock') {
            this.rockSongs.push(this.songs[i])
          }
        }
        console.log(this.rockSongs)
        axios.get('http://sacmusic.com/api/album')
          .then(res => {
            console.log(res.data.album)
            for (let i = 0; i < this.rockSongs.length; i++) {
              for (let j = 0; j < res.data.album.length; j++) {
                if (this.rockSongs[i].album_id === res.data.album[j].id) {
                  this.albumName.push(res.data.album[j].album_name)
                  // this.rockSongs[i].push('albumName: ' + res.data.album[j].album_name)
                }
              }
            }
            console.log(this.albumName)
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(error => {
        console.log(error)
      })
  },
  /* computed: {
    songs () {
      return this.$store.getters.songs
    }
  }, */
  methods: {
    playSound (sound) {
      if (sound) {
        var audio = new Audio(sound)
        audio.play()
        setTimeout(() => {
          audio.pause()
        }, 20000)
      }
    },
    addToShop (index) {
      axios.get('http://sacmusic.com/api/music')
        .then(res => {
          console.log(res.data.music)
          for (let j = 0; j < res.data.music.length; j++) {
            if (this.rockSongs[index].id === res.data.music[j].id) {
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
.all-songs {
  position: relative;
  left: 9%;
}
.play-btn {
  position: absolute;
  top: 35%;
  left: -2px;
  transform: translateX(90px);
  opacity: 0;
  transition: all 0.5s ease;
  background-color: rgb(65, 201, 24);
  border: none;
}
.rock-music__filter:hover .play-btn {
  opacity: 1;
}
.rock-music__filter {
  border: none;
  background-color: rgb(255, 255, 255);
  transition: all 0.5s ease;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  width: 18rem;
}
.rock-music__filter:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
}
.card-body {
  background-color: rgb(94, 146, 243);
}
.card-img-top {
  height: 220px;
  width: 223px;
  cursor: pointer;
}
@media (min-width: 768px) and (max-width: 992px) {
  .card-img-top {
    height: 150px;
    width: 120px;
  }
  .play-btn {
    top: 55px;
    left: -50px;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .rock-music__filter {
    width: 223px;
  }
  .all-songs {
    left: 60px;
    width: 290px;
  }
}
</style>
