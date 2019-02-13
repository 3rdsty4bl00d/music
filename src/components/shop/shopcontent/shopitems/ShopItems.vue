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
          <div class="card shop-card__item">
            <img
              class="card-img-top"
              :src="shop[i].cover_image"
              alt="Card image cap"
              v-b-popover.hover="
              'Album name: ' + albumName[i]
              + '\nArtist: ' + shop[i].artist
              + '\nGenre: ' + shop[i].genre
              + '\nPrice: Rs ' + shop[i].price
              + '\nCLICK TO REMOVE'"
              :title="'Song Title: ' + shop[i].song_name"
              @click="removeFromShop(i)"
            >
            <div class="card-body">
              <p class="card-text"> {{ shop[i].song_name }} </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row"
        v-if="shop.length !== 0"
      >
        <div class="col-xs-12 col-sm-6 col-md-4">
          <button
            class="btn btn-primary proceed"
            @click="proceedToPayment"
          >Proceed to payment</button>
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
      albumName: []
    }
  },
  computed: {
    shop () {
      return this.$store.getters.shop
    }
  },
  created () {
    console.log(this.shop)
    axios.get('http://sacmusic.com/api/album')
      .then(res => {
        console.log(res)
        for (let i = 0; i < this.shop.length; i++) {
          for (let j = 0; j < res.data.album.length; j++) {
            if (this.shop[i].album_id === res.data.album[j].id) {
              this.albumName.push(res.data.album[j].album_name)
            }
          }
        }
      })
  },
  methods: {
    removeFromShop (index) {
      this.$store.dispatch('removeFromCart', index)
    },
    proceedToPayment () {
      this.$router.push('/payment')
    }
  }
}
</script>

<style scoped>
.main-card {
  padding: 15px;
  position: relative;
}
.card-deck {
  margin: 0 auto;
}
.proceed {
  margin: 30px 50px;
  border-radius: 20px;
  padding: 15px;
  font-size: 25px;
}
.card-img-top {
  height: 200px;
  width: 100%;
  cursor: pointer;
}
.shop-card__item {
  width: 18rem;
}
@media (min-width: 768px) and (max-width: 992px) {
  .card-img-top {
    height: 140px;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .shop-card__item {
    width: 10rem;
  }
  .main-card {
    width: 300px;
  }
  .proceed {
    margin: 0;
  }
}
</style>
