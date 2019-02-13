<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="card select-song-card">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12 col-sm-4 col-md-4">
                <img
                  :src="coverImage"
                  alt="selected cover image"
                  class="select-cover-image"
                >
              </div>
              <div class="col-xs-12 col-sm-8 col-md-8">
                <div class="song-details">
                  <h3>Song Name: {{ songName }} </h3>
                  <hr>
                  <p>Album Name: {{ albumName }} </p>
                  <p>Genre: {{ songGenre }} </p>
                  <p>Artist: {{ songArtist }} </p>
                  <button
                    class="btn btn-play"
                    @click="playSound"
                  >Play</button>
                  <button
                    class="btn btn-add"
                    @click="addToShop"
                  >Add To Cart</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <h3>Album Description:</h3>
                <hr>
                <p> {{ albumDescription }} </p>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <button
                  class="btn view-album-button"
                  @click="goBrowseAlbum"
                >View Album</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    this.songName = this.$store.getters.searchSong
    this.songDetails()
  },
  data () {
    return {
      songName: '',
      albumName: '',
      songGenre: '',
      songArtist: '',
      songUrl: '',
      albumDescription: '',
      coverImage: '',
      musicId: null,
      albumId: null,
      wholeAlbum: []
    }
  },
  methods: {
    songDetails () {
      axios.get('http://sacmusic.com/api/music')
        .then(res => {
          for (let i = 0; i < res.data.music.length; i++) {
            if (this.songName === res.data.music[i].song_name) {
              this.songGenre = res.data.music[i].genre
              this.songArtist = res.data.music[i].artist
              this.songUrl = res.data.music[i].song
              this.coverImage = res.data.music[i].cover_image
              this.albumId = res.data.music[i].album_id
              this.musicId = res.data.music[i].id
            }
          }
          axios.get('http://sacmusic.com/api/album')
            .then(res => {
              for (let i = 0; i < res.data.album.length; i++) {
                if (this.albumId === res.data.album[i].id) {
                  this.albumName = res.data.album[i].album_name
                  this.albumDescription = res.data.album[i].album_description
                  this.wholeAlbum = res.data.album[i]
                }
              }
            })
            .catch(err => {
              console.log(err)
            })
        }, err => {
          console.log(err)
        })
    },
    playSound () {
      var audio = new Audio(this.songUrl)
      audio.play()
      setTimeout(() => {
        audio.pause()
      }, 20000)
    },
    addToShop () {
      this.$store.dispatch('addToCart', this.musicId)
    },
    goBrowseAlbum () {
      this.$store.state.browseAlbum = this.wholeAlbum
      this.$router.push('/browsealbum')
    }
  }
}
</script>

<style scoped>
.container {
  margin: 76px 55px;
}
.select-song-card {
  margin: 30px auto;
  padding: 10px;
  position: relative;
  left: 50px;
}
.select-cover-image {
  margin: 20px auto;
  height: 220px;
}
.song-details {
  margin: 20px auto;
}
.btn-play {
  background-color: rgb(74, 143, 247);
}
.btn-add {
  background-color: rgb(247, 247, 84);
}
.view-album-button {
  background-color: rgb(76, 247, 142);
}
</style>
