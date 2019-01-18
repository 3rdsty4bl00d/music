<template>
  <div class="row all-songs">
    <div
      class="col-xs-12 col-sm-4 col-md-3 card-deck"
      v-for="(x, i) in folkSongs.length"
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
              'Album name: ' + folkSongs[i].albumname
              + '\nArtist: ' + folkSongs[i].artist
              + '\nGenre: ' + folkSongs[i].genre
              + '\nPrice: Rs ' + folkSongs[i].price"
          :title="'Song Title: ' + folkSongs[i].name"
        >
        <div class="card-body">
          <p class="card-text"> {{ folkSongs[i].name }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      folkSongs: []
    }
  },
  created () {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].genre === 'folk') {
        this.folkSongs.push(this.songs[i])
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
