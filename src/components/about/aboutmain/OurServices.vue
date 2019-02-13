<template>
  <div class="card services">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <transition
            @enter="serviceEnter"
            @css="false"
            appear
          >
            <h1>Our Services</h1>
          </transition>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4">
          <transition
            @enter="horizEnter"
            @css="false"
            appear
          >
            <hr style="margin-left: 10px;">
          </transition>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <transition-group
            @enter="groupEnter"
            @css="false"
            appear
          >
            <li
              v-for="service in services"
              :key="service"
              style="margin-top: 10px; color: #1f2e2e;"
            >
              {{ service }}
            </li>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  data () {
    return {
      services: [
        'Lorem ipsum dolor sit amet',
        'consectetur adipisicing elit',
        'Culpa sit suscipit in quis velit exercitationem',
        'voluptatibus asperiores corrupti fugiat deserunt',
        'iste rem minus sed amet eos quod? Laboriosam, hic eaque!'
      ]
    }
  },
  methods: {
    serviceEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 13000
      }, {
        complete: done
      })
    },
    horizEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 13500
      }, {
        complete: done
      })
    },
    groupEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 14000
      }, {
        complete: done
      })
    }
  }
}
</script>

<style scoped>
.services {
  padding: 15px;
}
.services {
  background-image: url('../../../assets/services1.jpg');
  background-position: center;
  background-repeat: no-repeat;
}
@media (min-width: 420px) and (max-width: 600px) {
  .services {
    width: 390px;
  }
}
</style>
