<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6">
        <transition
          @enter="shopHeadEnter"
          @css="false"
          appear
        >
          <h1>Items you bought...</h1>
        </transition>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6">
        <transition
          @enter="shopHeadEnter"
          @css="false"
          appear
        >
          <h1>Total: {{shop.length}} </h1>
        </transition>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6">
        <hr style="width: 70%; position: relative; left: -70px;">
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6">
        <hr style="width: 70%; position: relative; left: -70px;">
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <transition
          @enter="shopItemsEnter"
          @css="false"
          appear
        >
          <app-shop-items class="all-shop"></app-shop-items>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
import ShopItems from '@/components/shop/shopcontent/shopitems/ShopItems.vue'

export default {
  components: {
    appShopItems: ShopItems
  },
  computed: {
    shop () {
      return this.$store.getters.shop
    }
  },
  methods: {
    shopHeadEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 1000
      }, {
        complete: done
      })
    },
    shopItemsEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 2000
      }, {
        complete: done
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 90px 55px;
}
.all-shop {
  position: relative;
  left: 3%;
}
</style>
