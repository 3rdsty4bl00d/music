<template>
  <div class="row all-songs">
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
              + '\nPrice: Rs ' + songs[i].price"
          :title="'Song Title: ' + songs[i].name"
        >
        <div class="card-body">
          <p class="card-text"> {{ songs[i].name }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.songs)
  },
  computed: {
    songs () {
      return this.$store.getters.songs
    }
  }
}
</script>

<style scoped>
.all-songs {
  position: relative;
  left: 9%;
}
.card-deck {
  display: flex !important;
}
</style>
