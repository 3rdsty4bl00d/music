<template>
  <!-- <div class="container">
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
    <div class="row all-songs">
      <div
        class="col-xs-12 col-sm-4 col-md-3 card-deck"
        v-for="(x, i) in album.length"
        :key="i"
        style="margin-bottom: 30px;"
      >
        <div
          class="card trending-album__card"
          style="width: 18rem;"
        >
          <img
            class="card-img-top"
            :src="album[i].cover_image"
            alt="Card image cap"
            style="height: 200px; width: 223px; cursor: pointer;"
            v-b-popover.hover="
              'Album name: ' + album[i].album_name
              + '\nPrice: Rs ' + album[i].price
              + '\nCLICK TO BROWSE'"
            :title="'Album Title: ' + album[i].album_name"
            @click="navigateToBrowseAlbum(i)"
          >
          <div class="card-body">
            <p class="card-text"> {{ album[i].album_name }} </p>
          </div>
        </div>
      </div>
    </div>
  </div> -->
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
    <div
      class="row each-album__row"
      v-for="(alb, i) in album"
      :key="alb"
    >
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="card main-card">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="card image-section__card">
                  <img
                    :src="album[i].cover_image"
                    alt="card image"
                    class="card-img-top"
                  >
                </div>
              </div>
              <div class="col-md-8 col-sm-8 col-xs-12">
                <h3 class="album-description__section">Album Name: {{ album[i].album_name }} </h3>
                <h2>
                  Description
                </h2>
                <p> {{ album[i].album_description }} </p>
                <button
                  class="btn view-btn"
                  @click="navigateToBrowseAlbum(i)"
                >View Songs</button>
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
      album: []
    }
  },
  created () {
    axios.get('http://sacmusic.com/api/album')
      .then(res => {
        for (let i = 0; i < res.data.album.length; i++) {
          this.album.push(res.data.album[i])
        }
        console.log(this.album)
      })
      .catch(err => {
        console.log(err)
      })
  },
  /* computed: {
    album () {
      return this.$store.getters.album
    }
  }, */
  methods: {
    navigateToBrowseAlbum (index) {
      this.$store.state.browseAlbum = this.album[index]
      this.$router.push('/browsealbum')
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
.card-deck {
  display: flex !important;
}
.trending-album__title {
  margin-top: 40px;
  position: relative;
  left: 111px;
}
.hor-line {
  width: 62%;
  position: relative;
  left: 30px;
  margin-bottom: 55px;
}
.card-body {
  background-color: rgb(67, 154, 236);
}
.image-section__card {
  height: 220px;
  width: 220px;
  margin: 20px 0;
}
.album-description__section {
  margin-top: 20px;
}
.card-img-top {
  height: 220px;
  width: 220px;
}
.trending-album__card {
  transition: all 1s ease;
  background-color: rgb(91, 175, 243);
}
.trending-album__card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
}
.view-btn {
  background-color: rgb(47, 156, 245);
}
.main-card {
  position: relative;
  left: 85px;
}
.each-album__row {
  margin: 15px 0;
}
</style>
