<template>
  <!-- <div class="container">
    <div class="row">
      <div class="col-xs-12 com-sm-12 col-md-12">
        <h3 class="name-album__browse"> Album Name: {{albumName}} </h3>
      </div>
    </div>
    <div
      class="row all-songs"
      v-if="albumSongs.length === 0"
    >
      <div class="col-xs-12">
        <h3>No Songs Found.</h3>
        <h4>Sorry for the inconvenience.</h4>
      </div>
    </div>
    <div
      class="row all-songs"
      v-else
    >
      <div
        class="col-xs-12 col-sm-4 col-md-3 card-deck"
        v-for="(alb, i) in albumSongs.length"
        :key="i"
        style="margin-bottom: 30px;"
      >
        <div
          class="card browse-song__album"
          style="width: 18rem;"
        >
          <img
            class="card-img-top"
            :src="albumSongs[i].cover_image"
            alt="Card image cap"
            style="height: 200px; width: 226px; cursor: pointer;"
            v-b-popover.hover="
              '\nArtist: ' + albumSongs[i].artist
              + '\nGenre: ' + albumSongs[i].genre
              + '\nPrice: Rs ' + albumSongs[i].price
              + '\nCLICK TO ADD TO CART'"
            :title="'Album Title: ' + albumSongs[i].song_name"
            @click="addToShop(i)"
          >
          <button
            class="btn btn-primary play-btn"
            @click.prevent="playSound(albumSongs[i].song)"
          >
            <i class="fas fa-play"></i>
          </button>
          <div class="card-body">
            <p class="card-text"> {{ albumSongs[i].song_name }} </p>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="container">
    <div class="row">
      <div class="col-xs-12 com-sm-12 col-md-12">
        <h3 class="name-album__browse"> Album Name: {{albumName}} </h3>
      </div>
    </div>
    <div
      class="row all-songs"
      v-if="albumSongs.length === 0"
    >
      <div class="col-xs-12">
        <h3>No Songs Found.</h3>
        <h4>Sorry for the inconvenience.</h4>
      </div>
    </div>
    <div
      class="row song-alb__section"
      v-else
      v-for="(alb, i) in albumSongs"
      :key="alb"
    >
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="card">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12 col-sm-4 col-md-4">
                <div class="card song-card__section">
                  <img
                    :src="albumSongs[i].cover_image"
                    alt="album song image"
                    class="card-img-top"
                  >
                </div>
              </div>
              <div class="col-xs-12 col-sm-8 col-md-8">
                <div class="row">
                  <div class="col-xs-12">
                    <h5 class="song-name__album">Song Name: {{ albumSongs[i].song_name }} </h5>
                    <h5>Artist: {{ albumSongs[i].artist }} </h5>
                    <h5>Genre: {{ albumSongs[i].genre }} </h5>
                    <h5>Album Name: {{ albumName }} </h5>
                    <button
                      class="btn played-btn"
                      @click.prevent="playSound(albumSongs[i].song)"
                    >
                      <i class="fas fa-play"></i>
                      Play
                    </button>
                    <!-- <button
                      class="btn pause-btn"
                      @click.prevent="pauseSound(albumSongs[i].song)"
                    >
                      <i class="fas fa-pause"></i>
                      Pause
                    </button> -->
                    <button
                      class="btn cart-btn"
                      @click="addToShop(i)"
                    >
                      <i class="fas fa-cart-plus"></i>
                      Add To Cart
                    </button>
                  </div>
                </div>
                <!-- <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <button class="btn">Play</button>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <button class="btn">Play</button>
                  </div>
                </div> -->
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
  data () {
    return {
      albumName: '',
      musicLength: null,
      albumSongs: []
    }
  },
  created () {
    this.musicLength = this.browseAlbum.musics.length
    for (let i = 0; i < this.musicLength; i++) {
      this.albumSongs.push(this.browseAlbum.musics[i])
    }
    console.log(this.albumSongs)
    axios.get('http://sacmusic.com/api/album')
      .then(res => {
        for (let i = 0; i < res.data.album.length; i++) {
          if (this.browseAlbum.id === res.data.album[i].id) {
            this.albumName = res.data.album[i].album_name
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    browseAlbum () {
      return this.$store.getters.browseAlbum
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
    },
    // pauseSound (sound) {
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
            if (this.albumSongs[index].id === res.data.music[j].id) {
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
  margin: 76px 55px;
  position: relative;
  left: 5%;
}
.name-album__browse {
  margin: 40px 0;
}
.all-songs {
  margin-top: 50px;
}
.browse-song__album {
  border: none;
  background-color: rgb(255, 255, 255);
  transition: all 0.5s ease;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
}
.browse-song__album:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
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
.browse-song__album:hover .play-btn {
  opacity: 1;
}
.song-card__section {
  height: 220px;
  width: 220px;
  margin: 20px 0;
}
.card-img-top {
  height: 220px;
  width: 220px;
}
.song-name__album {
  margin-top: 20px;
}
.cart-btn {
  background-color: rgb(248, 205, 12);
}
.played-btn {
  background-color: rgb(91, 174, 243);
}
.pause-btn {
  background-color: rgb(243, 91, 91);
}
.song-alb__section {
  margin: 15px 0;
}
@media (min-width: 320px) and (max-width: 480px) {
  .container {
    width: 320px;
    margin-right: 0;
    padding: 0;
    left: -40px;
  }
}
</style>
