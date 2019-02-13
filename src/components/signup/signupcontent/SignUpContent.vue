<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <h3>Sign Up
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
            type="text"
            placeholder="Name"
            class="form-control"
            v-model="userName"
          >
        </div>
      </div>
      <div class="row form-group">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <input
            type="email"
            placeholder="Enter Email"
            class="form-control"
            v-model="userEmail"
          >
        </div>
      </div>
      <div class="row form-group">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <input
            type="password"
            placeholder="Enter Password"
            class="form-control"
            v-model="userPassword"
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
import axios from 'axios'
export default {
  data () {
    return {
      disSubmit: false,
      show: false,
      userEmail: '',
      userPassword: '',
      userName: ''
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
      axios.post('http://sacmusic.com/api/user/register',
        {
          name: this.userName,
          email: this.userEmail,
          password: this.userPassword
        })
        .then(res => {
          // console.log('register vais ta, solti rocks')
          // this.show = !this.show
          // this.disSubmit = !this.disSubmit
          // this.$store.state.signInShow = false
          // this.$store.dispatch('setUserEmail', this.userEmail)
          // this.$store.dispatch('setUserPassword', this.userPassword)
          // setTimeout(() => {
          //   this.$router.push('/')
          // }, 5000)
          axios.post('http://sacmusic.com/api/user/login',
            {
              name: this.userName,
              email: this.userEmail,
              password: this.userPassword
            })
            .then(res => {
              // console.log(res.data.token)
              this.token = res.data.token
              this.$store.dispatch('addUserToken', this.token)
              // console.log(this.token)
              this.show = !this.show
              this.disSubmit = !this.disSubmit
              this.$store.state.signInShow = false
              this.$store.state.bottomSignInShow = false
              this.$store.dispatch('setUserEmail', this.userEmail)
              this.$store.dispatch('setUserPassword', this.userPassword)
              setTimeout(() => {
                this.$router.push('/')
              }, 5000)
            })
            .catch(error => {
              console.log(error)
            })
        })
        .catch(err => {
          console.log(err)
        })
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
