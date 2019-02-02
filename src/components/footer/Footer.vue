<template>
  <div class="foot-er">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
          <h1>Footer</h1>
          <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem quam quos eaque cumque, repudiandae incidunt vitae, cupiditate rem distinctio non ipsam placeat autem. Repudiandae non excepturi commodi voluptatum voluptas!</p>
        </div>
        <div class="vl"></div>
        <div class="col-xs-12 col-sm-2 col-md-2">
          <p style="margin-top: 20px;">We are available on!!!</p>
          <ul class="music-platform">
            <li><a href="#">Apple Music</a></li>
            <li><a href="#">Google Play</a></li>
            <li><a href="#">Youtube Music</a></li>
            <li><a href="#">Spotify</a></li>
            <li><a href="#">SoundCloud</a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-3 col-md-3 signin">
          <div v-if="bottomSignInShow">
            <h1>Sign In</h1>
            <form>
              <div class="form-group">
                <input
                  type="email"
                  placeholder="Enter Email"
                  class="form-control"
                  v-model="email"
                >
                <input
                  type="password"
                  placeholder="Enter Password"
                  class="form-control"
                  style="margin-top: 10px; margin-bottom: 10px;"
                  v-model="password"
                >
                <div class="sub-btn">
                  <button
                    class="btn btn-success"
                    type="submit"
                    @click="showUser"
                  >Submit</button>
                  <button
                    class="btn btn-danger"
                    type="button"
                    @click="navigateToSignUp"
                  >Register</button>
                </div>
              </div>
            </form>
          </div>
          <div v-else>
            <div
              class="row"
              style="margin-top: 50px;"
            >
              <div class="col-xs-12 col-sm-4 col-md-4">
                <img
                  src="https://picsum.photos/200/300/?gravity=east"
                  alt="user image"
                  style="height: 50px; width: 50px; border-radius: 50%;"
                >
              </div>
              <div class="col-xs-12 col-sm-8 col-md-8">
                <p style="margin-bottom: 0;"> {{ userEmail }} </p>
                <p style="color: #fff; margin-bottom: 0;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button
                  class="btn btn-dark"
                  @click="navigateToProfile"
                >See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 footer-horizontal">
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-2 col-md-2 subscribe">
          <div
            class="g-ytsubscribe"
            data-channelid="UCkFNsCj6dgLOVJRALl5iCUQ"
            data-layout="default"
            data-count="default"
          ></div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 footer-horizontal">
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 copyright">
          <p
            class="text-center"
            style="margin-bottom: 0;"
          >&copy; copyright - 2018</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 footer-horizontal">
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <p class="text-center">Powere by <a href="#">Segonatech</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    navigateToSignUp () {
      this.$router.push('/signup')
    },
    navigateToProfile () {
      this.$router.push('/profile')
    },
    showUser () {
      this.$store.state.bottomSignInShow = false
      this.$store.state.signInShow = false
      this.$store.dispatch('setUserEmail', this.email)
      this.$store.dispatch('setUserPassword', this.password)
    }
  },
  computed: {
    bottomSignInShow () {
      return this.$store.getters.bottomSignInShow
    },
    userEmail () {
      return this.$store.getters.userEmail
    }
  }
}
</script>

<style scoped>
.footer-horizontal {
  margin: 0 auto;
  padding-left: 50px;
}
.subscribe {
  position: relative;
  left: 45%;
}
.foot-er {
  background-color: #343a40;
  color: rgba(255, 255, 255, 0.5);
}
.container {
  margin: 0 50px;
}
.vl {
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: 160px;
  margin-top: 20px;
}
.music-platform {
  list-style: none;
}
.music-platform a {
  text-decoration: none;
}
.signin {
  position: relative;
  left: 10%;
  top: 11%;
}
</style>
