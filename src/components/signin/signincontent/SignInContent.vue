<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <h3>Sign In
          <transition
            @enter="iconEnter"
            @css="false"
            appear
          >
            <i class="fas fa-user"></i>
          </transition>
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <hr>
      </div>
    </div>
    <form>
      <div class="row form-group">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <input
            type="email"
            placeholder="Enter Email"
            class="form-control"
            v-model="email"
          >
        </div>
      </div>
      <div class="row form-group">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <input
            type="password"
            placeholder="Enter Password"
            class="form-control"
            v-model="password"
          >
        </div>
      </div>
      <div class="row form-group">
        <div class="col-xs-12 col-sm-5 col-md-5 submit-btn">
          <button
            class="btn btn-success"
            @click="navigateToHome"
            :disabled='disSubmit'
          >Submit</button>
          <div
            v-if="show"
            style="margin-left: 20px;"
          >
            <transition
              @enter="iconSubmitEnter"
              @css="false"
              appear
            >
              <i class="fas fa-user-circle fa-3x"></i>
            </transition>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  data () {
    return {
      disSubmit: false,
      show: false,
      email: '',
      password: ''
    }
  },
  methods: {
    iconEnter (el, done) {
      setTimeout(() => {
        Velocity(el, {
          scale: 1.6
        }, {
          duration: 300
        })
        Velocity(el, {
          translateX: '50px'
        }, {
          duration: 1000
        })
        Velocity(el, {
          rotateZ: '360deg'
        }, {
          duration: 500
        })
        Velocity(el, {
          rotateY: '-360deg'
        }, {
          duration: 500
        })
        Velocity(el, {
          rotateX: '-360deg'
        }, {
          duration: 500
        })
        Velocity(el, {
          scale: 1
        }, {
          duration: 500
        })
        Velocity(el, {
          translateX: '-1px'
        }, {
          duration: 500
        }, {
          complete: done
        })
      }, 1000)
    },
    navigateToHome () {
      this.show = !this.show
      this.disSubmit = !this.disSubmit
      this.$store.state.signInShow = false
      this.$store.dispatch('setUserEmail', this.email)
      this.$store.dispatch('setUserPassword', this.password)
      setTimeout(() => {
        this.$router.push('/')
      }, 5000)
    },
    iconSubmitEnter (el, done) {
      Velocity(el, {
        rotateZ: '7200deg'
      }, {
        duration: 5000
      })
    }
  }
}
</script>

<style scoped>
.submit-btn {
  display: flex !important;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
