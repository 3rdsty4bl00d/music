<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 com-sm-12 col-md-12">
        <h1> Album Name: {{browseAlbum.albumname}} </h1>
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
          class="card"
          style="width: 18rem;"
        >
          <img
            class="card-img-top"
            src="https://picsum.photos/200/300/?random"
            alt="Card image cap"
            style="height: 200px; width: 223px; cursor: pointer;"
            v-b-popover.hover="
              'Album name: ' + songs[i].albumname
              + '\nArtist: ' + songs[i].artist
              + '\nGenre: ' + songs[i].genre
              + '\nPrice: Rs ' + songs[i].price
              + '\nCLICK TO BROWSE'"
            :title="'Album Title: ' + songs[i].albumname"
            @click="navigateToBrowseAlbum(i)"
          >
          <div class="card-body">
            <p class="card-text"> {{ songs[i].albumname }} </p>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  computed: {
    browseAlbum () {
      return this.$store.getters.browseAlbum
    }
  }
}
</script>

<style scoped>
.container {
  margin: 90px 55px;
  position: relative;
  left: 5%;
}
</style>
