<template>
  <div class="card second-about">
    <div class="container">
      <div class="row">
        <transition
          @enter="secondHeading"
          @css="false"
          appear
        >
          <h1>What We Provide?</h1>
        </transition>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-md-8">
          <transition
            @enter="horizonEnter"
            @css="false"
            appear
          >
            <hr>
          </transition>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <transition
            @enter="paragEnter"
            @css="false"
            appear
          >
            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, hic. Labore consequuntur illum numquam, in odio inventore aliquam, consequatur officia id similique quo! Voluptatum in exercitationem et optio provident. Impedit!</p>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  methods: {
    secondHeading (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 10000
      }, {
        complete: done
      })
    },
    horizonEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 10500
      }, {
        complete: done
      })
    },
    paragEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 11000
      }, {
        complete: done
      })
    }
  }
}
</script>

<style scoped>
.second-about {
  padding: 15px;
}
.card {
  background-image: url('../../../assets/about-first-3.jpg');
  background-position: center;
  background-repeat: no-repeat;
  color: rgb(255, 255, 255);
}
@media (min-width: 420px) and (max-width: 600px) {
  .second-about {
    width: 390px;
  }
}
</style>
