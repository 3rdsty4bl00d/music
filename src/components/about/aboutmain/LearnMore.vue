<template>
  <div class="card">
    <div class="container learn-more">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <transition
            @enter="headEnter"
            @css="false"
            appear
          >
            <h1>Want To Learn More About Us?</h1>
          </transition>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-9 col-md-7">
          <transition
            @enter="horiEnter"
            @css="false"
            appear
          >
            <hr style="margin-left: 10px;">
          </transition>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
          <transition
            @enter="pEnter"
            @css="false"
            appear
          >
            <p>Connect with us more</p>
          </transition>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6">
          <transition
            @enter="pEnter"
            @css="false"
            appear
          >
            <p>On social media</p>
          </transition>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
          <transition
            @enter="pEnter"
            @css="false"
            appear
          >
            <div>
              <p><i class="fas fa-phone"></i>
                123456789
              </p>
              <p><i class="fas fa-mobile"></i>
                123456789
              </p>
              <p><i class="far fa-envelope"></i>
                sacmusic@gmail.com
              </p>
              <hr>
              <p>
                If you haven't registered
              </p>
              <button class="btn btn-danger">Register Now</button>
            </div>
          </transition>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6">
          <transition
            @enter="pEnter"
            @css="false"
            appear
          >
            <div>
              <p><i class="fab fa-facebook"></i>
                123456789
              </p>
              <p><i class="fab fa-twitter"></i>
                123456789
              </p>
              <p><i class="fab fa-google-play"></i>
                sacmusic@gmail.com
              </p>
              <p><i class="fab fa-youtube"></i>
                sacmusic@gmail.com
              </p>
              <p><i class="fab fa-linkedin-in"></i>
                sacmusic@gmail.com
              </p>
            </div>
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
    headEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 15000
      }, {
        complete: done
      })
    },
    horiEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 15500
      }, {
        complete: done
      })
    },
    pEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 16000
      }, {
        complete: done
      })
    }
  }
}
</script>

<style scoped>
.learn-more {
  padding: 15px;
}
</style>
