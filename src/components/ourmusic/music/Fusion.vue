<template>
  <div class="row all-songs">
    <div
      class="col-xs-12 col-sm-4 col-md-3 card-deck"
      v-for="(x, i) in fusionSongs.length"
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
              'Album name: ' + fusionSongs[i].albumname
              + '\nArtist: ' + fusionSongs[i].artist
              + '\nGenre: ' + fusionSongs[i].genre
              + '\nPrice: Rs ' + fusionSongs[i].price"
          :title="'Song Title: ' + fusionSongs[i].name"
        >
        <div class="card-body">
          <p class="card-text"> {{ fusionSongs[i].name }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fusionSongs: []
    }
  },
  created () {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].genre === 'fusion') {
        this.fusionSongs.push(this.songs[i])
      }
    }
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
</style>
