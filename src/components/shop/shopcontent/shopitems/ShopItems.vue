<template>
  <div class="card main-card">
    <div class="container">
      <div class="row">
        <div
          class="col-xs-12 col-sm-4 col-md-3 card-deck"
          v-for="(x, i) in shop.length"
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
              style="height: 200px; width: 100%; cursor: pointer;"
              v-b-popover.hover="
              'Album name: ' + shop[i].albumname
              + '\nArtist: ' + shop[i].artist
              + '\nGenre: ' + shop[i].genre
              + '\nPrice: Rs ' + shop[i].price
              + '\nCLICK TO REMOVE'"
              :title="'Song Title: ' + shop[i].name"
              @click="removeFromShop(i)"
            >
            <div class="card-body">
              <p class="card-text"> {{ shop[i].name }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    shop () {
      return this.$store.getters.shop
    }
  },
  methods: {
    removeFromShop (index) {
      this.$store.dispatch('removeFromCart', index)
    }
  }
}
</script>

<style scoped>
.main-card {
  padding: 15px;
}
.card-deck {
  margin: 0 auto;
}
</style>
