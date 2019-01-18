<template>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
      <div class="card first-about">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <transition
                @enter="headEnter"
                @css="false"
                appear
              >
                <h1> {{ firstHeading }} </h1>
              </transition>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
              <transition
                @enter="horizontalLineEntry"
                @css="false"
                appear
              >
                <hr style="margin-left: 10px;">
              </transition>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <transition
                @enter="paraEnter"
                @css="false"
                appear
              >
                <p class="text-justify"> {{ paraOne }} </p>
              </transition>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <transition
                @enter="paraSecondEnter"
                @css="false"
                appear
              >
                <p class="text-justify"> {{ paraTwo }} </p>
              </transition>
            </div>
          </div>
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
      firstHeading: 'Who We Are?',
      paraOne: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia aperiam quod explicabo expedita harum labore ipsa non quidem ex. Quia saepe ad impedit similique adipisci! Hic officiis aliquid ipsum?',
      paraTwo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor magni voluptates illo nulla quae incidunt delectus itaque molestiae, sint nam veniam consectetur numquam iure maxime neque, qui laboriosam. Inventore, dicta.'
    }
  },
  methods: {
    headEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 7500
      }, {
        complete: done
      })
    },
    horizontalLineEntry (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 8000
      }, {
        complete: done
      })
    },
    paraEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 8500
      }, {
        complete: done
      })
    },
    paraSecondEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 9000
      }, {
        complete: done
      })
    }
  }
}
</script>

<style scoped>
.first-about {
  padding: 15px;
}
</style>
