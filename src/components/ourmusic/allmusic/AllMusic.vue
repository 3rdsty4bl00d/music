<template>
  <div id="all-music">
    <div class="container">
      <div
        class="row"
        style="margin-bottom: 30px; position: relative; left: 9%;"
      >
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div>
            <button
              class="btn btn-dark"
              @click="showed"
            >
              <i class="fas fa-filter"></i>
              Filter</button>
            <transition
              @enter="listEnter"
              @css="false"
            >
              <ul
                v-if="show"
                class="genre-list"
              >
                <li class="genre-btn"><button
                    class="btn btn-dark"
                    @click="all"
                  >All</button></li>
                <li class="genre-btn"><button
                    class="btn btn-dark"
                    @click="classical"
                  >Classical</button></li>
                <li class="genre-btn"><button
                    class="btn btn-dark"
                    @click="folk"
                  >Folk</button></li>
                <li class="genre-btn"><button
                    class="btn btn-dark"
                    @click="rock"
                  >Rock</button></li>
                <li class="genre-btn"><button
                    class="btn btn-dark"
                    @click="fusion"
                  >Fusion</button></li>
              </ul>
            </transition>
          </div>
        </div>
      </div>
      <transition
        @enter="musicEnter"
        @css="false"
        appear
      >
        <div v-if="allAlbumFilter">
          <app-music></app-music>
        </div>
      </transition>
      <transition
        @enter="musicEnter"
        @css="false"
        appear
      >
        <div v-if="classicalFilter">
          <app-classical></app-classical>
        </div>
      </transition>
      <transition
        @enter="musicEnter"
        @css="false"
        appear
      >
        <div v-if="folkFilter">
          <app-folk></app-folk>
        </div>
      </transition>
      <transition
        @enter="musicEnter"
        @css="false"
        appear
      >
        <div v-if="fusionFilter">
          <app-fusion></app-fusion>
        </div>
      </transition>
      <transition
        @enter="musicEnter"
        @css="false"
        appear
      >
        <div v-if="rockFilter">
          <app-rock></app-rock>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
import Music from '@/components/ourmusic/music/Music.vue'
import Classical from '@/components/ourmusic/music/Classical.vue'
import Folk from '@/components/ourmusic/music/Folk.vue'
import Fusion from '@/components/ourmusic/music/Fusion.vue'
import Rock from '@/components/ourmusic/music/Rock.vue'
export default {
  data () {
    return {
      show: false,
      allAlbumFilter: true,
      classicalFilter: false,
      folkFilter: false,
      fusionFilter: false,
      rockFilter: false
    }
  },
  components: {
    appMusic: Music,
    appClassical: Classical,
    appFolk: Folk,
    appFusion: Fusion,
    appRock: Rock
  },
  methods: {
    showed () {
      this.show = !this.show
    },
    all () {
      this.classicalFilter = false
      this.allAlbumFilter = true
      this.folkFilter = false
      this.fusionFilter = false
      this.rockFilter = false
    },
    classical () {
      this.classicalFilter = true
      this.allAlbumFilter = false
      this.folkFilter = false
      this.fusionFilter = false
      this.rockFilter = false
    },
    rock () {
      this.classicalFilter = false
      this.allAlbumFilter = false
      this.folkFilter = false
      this.fusionFilter = false
      this.rockFilter = true
    },
    fusion () {
      this.classicalFilter = false
      this.allAlbumFilter = false
      this.folkFilter = false
      this.fusionFilter = true
      this.rockFilter = false
    },
    folk () {
      this.classicalFilter = false
      this.allAlbumFilter = false
      this.folkFilter = true
      this.fusionFilter = false
      this.rockFilter = false
    },
    listEnter (el, done) {
      Velocity(el, 'slideDown', {
        duration: 1000
      }, {
        complete: done
      })
    },
    musicEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 3500
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
.genre-list {
  display: flex !important;
  background-color: #343a40;
  margin-top: 20px;
  width: 90%;
  border-radius: 5px;
}
.genre-btn {
  margin: 10px 25px;
  text-decoration: none;
  list-style: none;
}
</style>
