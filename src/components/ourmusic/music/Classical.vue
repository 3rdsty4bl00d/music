<template>
  <div class="row all-songs">
    <div
      class="col-xs-12 col-sm-4 col-md-3 card-deck"
      v-for="(x, i) in classicalSongs.length"
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
              'Album name: ' + classicalSongs[i].albumname
              + '\nArtist: ' + classicalSongs[i].artist
              + '\nGenre: ' + classicalSongs[i].genre
              + '\nPrice: Rs ' + classicalSongs[i].price
              + '\nCLICK TO ADD TO CART'"
          :title="'Song Title: ' + classicalSongs[i].name"
          @click="addToShop(i)"
        >
        <div class="card-body">
          <p class="card-text"> {{ classicalSongs[i].name }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classicalSongs: []
    }
  },
  created () {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].genre === 'classic') {
        this.classicalSongs.push(this.songs[i])
      }
    }
  },
  computed: {
    songs () {
      return this.$store.getters.songs
    }
  },
  methods: {
    addToShop (index) {
      this.$store.dispatch('addToCart', index)
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
