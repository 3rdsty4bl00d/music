<template>
  <div id="all-music">
    <div class="container all-music__container">
      <div class="row filter-row__title">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div>
            <button
              class="btn btn-dark btn-margin__color"
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
                    class="btn btn-dark btn-btn"
                    @click="all"
                  >All</button></li>
                <li class="genre-btn"><button
                    class="btn btn-dark btn-btn"
                    @click="classical"
                  >Classical</button></li>
                <li class="genre-btn"><button
                    class="btn btn-dark btn-btn"
                    @click="folk"
                  >Folk</button></li>
                <li class="genre-btn"><button
                    class="btn btn-dark btn-btn"
                    @click="rock"
                  >Rock</button></li>
                <li class="genre-btn"><button
                    class="btn btn-dark btn-btn"
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
  margin: 76px 55px;
}
.genre-list {
  background-color: #4ea0f1;
  margin-top: 20px;
  width: 90%;
  border-radius: 5px;
}
.genre-btn {
  margin: 10px 25px;
  background-color: #4ea0f1;
  text-decoration: none;
  list-style: none;
}
li {
  display: inline-block;
}
.btn-dark {
  background-color: #4ea0f1;
  border: none;
}
.btn-margin__color {
  margin-top: 40px;
  background-color: #4ea0f1;
  border: none;
  color: rgb(248, 245, 245);
}
.filter-row__title {
  margin-bottom: 30px;
  position: relative;
  left: 9%;
}
@media (min-width: 768px) and (max-width: 992px) {
  .all-music__container {
    width: 768px;
    margin: 0;
  }
  .filter-row__title {
    width: 108px;
    margin-top: 80px;
  }
  .genre-list {
    background-color: transparent;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .all-music__container {
    width: 360px;
    margin: 0;
  }
  .filter-row__title {
    width: 360px;
    margin-top: 80px;
  }
  .genre-list {
    background-color: transparent;
  }
  li {
    display: block;
    width: 90px;
  }
}
</style>
