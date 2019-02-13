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
    <!-- <div class="row all-songs">
      <div
        class="col-xs-12 col-sm-4 col-md-3 card-deck"
        v-for="(x, i) in songs.length"
        :key="i"
        style="margin-bottom: 30px;"
      >
        <div
          class="card featured-song__card"
          style="width: 18rem;"
        >
          <img
            class="card-img-top"
            :src="featuredSongs[i].cover_image"
            alt="Card image cap"
            style="height: 200px; width: 225px; cursor: pointer;"
            v-b-popover.hover="
              'Album name: ' + albumName[i]
              + '\nArtist: ' + featuredSongs[i].artist
              + '\nGenre: ' + featuredSongs[i].genre
              + '\nPrice: Rs ' + featuredSongs[i].price
              + '\nCLICK TO ADD TO CART'"
            :title="'Song Title: ' + featuredSongs[i].song_name"
            @click="addToShop(i)"
          >
          <button
            class="btn btn-primary play-btn"
            @click.prevent="playSound(featuredSongs[i].song)"
          >
            <i class="fas fa-play"></i>
          </button>
          <div class="card-body">
            <p class="card-text"> {{ featuredSongs[i].song_name }} </p>
          </div>
        </div>
      </div>
    </div> -->
    <div class="row featured-row">
      <div
        class="col-xs-12 col-sm-6 col-md-6"
        v-for="(feature, i) in featuredSongs"
        :key="feature"
      >
        <div class="card card-detail__parent">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12 col-sm-4 col-md-4"></div>
              <div class="col-xs-12 col-sm-8 col-md-8 card-details__song">
                <p>Song Name: {{ featuredSongs[i].song_name }} </p>
                <p>Artist: {{ featuredSongs[i].artist }} </p>
                <p>Genre: {{ featuredSongs[i].genre }} </p>
                <p>Album Name: {{ albumName[i] }} </p>
                <button
                  class="btn play-btn__new"
                  @click.prevent="playSound(featuredSongs[i].song)"
                >Play</button>
                <button
                  class="btn add_to-cart"
                  @click="addToShop(i)"
                >Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
        <img
          :src="featuredSongs[i].cover_image"
          alt="featured image"
          class="image-shown__circle"
        >
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="btn-btn-see">
          <button
            class="btn see_more__button"
            @click="seeMore"
          >See More</button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      songs: [],
      albumName: [],
      featuredSongs: [],
      see: 4
    }
  },
  created () {
    axios.get('http://sacmusic.com/api/music')
      .then(res => {
        console.log(res.data.music)
        this.songs = res.data.music
        for (let i = 0; i < this.songs.length; i++) {
          if (this.songs[i].is_featured === 1) {
            this.featuredSongs.push(this.songs[i])
          }
        }
        axios.get('http://sacmusic.com/api/album')
          .then(res => {
            console.log(res.data.album)
            for (let i = 0; i < this.featuredSongs.length; i++) {
              for (let j = 0; j < res.data.album.length; j++) {
                if (this.featuredSongs[i].album_id === res.data.album[j].id) {
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
    // seeMore () {
    //   for (let i = this.see; i < this.see + 4; i++) {
    //     this.featuredSongs.push(this.songs[i])
    //   }
    // },
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
            if (this.featuredSongs[index].id === res.data.music[j].id) {
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
}
.all-songs {
  position: relative;
  left: 9%;
}
.see_more__button {
  background-color: rgb(49, 165, 243);
}
.card-deck {
  display: flex !important;
}
.featured-song__title {
  position: relative;
  left: 120px;
  margin-top: 40px;
}
.hor-line {
  width: 58%;
  position: relative;
  left: 28px;
  margin-bottom: 55px;
}
.featured-row {
  position: relative;
  left: 40px;
}
.image-shown__circle {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  cursor: pointer;
  position: absolute;
  top: 35px;
  margin-left: 10px;
}
.image-shown__circle:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
}
.add_to-cart {
  background-color: rgb(252, 193, 31);
}
.play-btn__new {
  background-color: rgb(48, 142, 248);
}
.card-detail__parent:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
}
.card-details__song {
  margin-bottom: 10px;
  /* margin-left: 10px; */
  position: relative;
  left: 20px;
}
.card-detail__parent {
  border-bottom-left-radius: 90px;
  border-top-left-radius: 90px;
  opacity: 1;
  transition: all 1s ease;
  margin: 15px 0;
  padding: 15px 0;
}
.featured-song__card {
  border: none;
  background-color: rgb(255, 255, 255);
  transition: all 0.5s ease;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
}
.featured-song__card:hover {
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
.featured-song__card:hover .play-btn {
  opacity: 1;
}
</style>
