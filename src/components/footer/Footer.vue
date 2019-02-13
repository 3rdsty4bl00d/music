<template>
  <div class="foot-er">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
          <h1>Contact Us</h1>
          <!-- <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem quam quos eaque cumque, repudiandae incidunt vitae, cupiditate rem distinctio non ipsam placeat autem. Repudiandae non excepturi commodi voluptatum voluptas!</p> -->
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6 direct-contact-sac">
                <h6>Directly</h6>
                <!-- <hr> -->
                <p>
                  <i
                    class="fas fa-phone"
                    style="color: #ff8000;"
                  ></i>
                  : 123456789
                </p>
                <p>
                  <i
                    class="fas fa-phone"
                    style="color: #8000ff;"
                  ></i>
                  : 123456789
                </p>
                <p>
                  <i
                    class="fas fa-phone"
                    style="color: #228B22;"
                  ></i>
                  : 123456789
                </p>
                <p>
                  <i
                    class="fas fa-mobile"
                    style="color: #fff;"
                  ></i>
                  : 123456789
                </p>
                <p>
                  <i
                    class="fas fa-envelope"
                    style="color: #70c1b3;"
                  ></i> :
                  <span class="direct-contact sac-contact">
                    sacmusic@gmail.com
                  </span>
                </p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 social-media__mark">
                <h6>On Social Media</h6>
                <p>
                  <i
                    class="fab fa-facebook"
                    style="color: #4267b2;"
                  ></i> :
                  <span class="imp-social">
                    www.facebook.com/sacmusic
                  </span>
                </p>
                <p>
                  <i
                    class="fab fa-twitter"
                    style="color: #38A1F3;"
                  ></i> :
                  <span class="imp-social">www.twitter.com/sacmusic
                  </span>
                </p>
                <p>
                  <i
                    class="fab fa-google-plus-g"
                    style="color: #d34836;"
                  ></i> :
                  <span class="imp-social">
                    plus.google.com/sacmusic
                  </span>
                </p>
                <p>
                  <i
                    class="fab fa-youtube"
                    style="color: #ED3833;"
                  ></i> :
                  <span class="imp-social">www.youtube.com/sacmusic
                  </span>
                </p>
                <p>
                  <i
                    class="fab fa-linkedin"
                    style="color: #0077B5;"
                  ></i> :
                  <span class="imp-social">www.linkedin.com/sacmusic
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="vl"></div>
        <div class="col-xs-12 col-sm-2 col-md-2 music-plat">
          <p class="available">We are available on!!!</p>
          <ul class="music-platform">
            <li><a href="#">Apple Music</a></li>
            <li><a href="#">Google Play</a></li>
            <li><a href="#">Youtube Music</a></li>
            <li><a href="#">Spotify</a></li>
            <li><a href="#">SoundCloud</a></li>
          </ul>
          <!-- <button
            class="btn user-profile"
            style="margin-left: 20px;"
          >
            <img
              src="https://i.gifer.com/PL7r.gif"
              class="user-image"
            >
          </button>
          <button
            class="btn user-profile"
            style="margin-left: 30px;"
          >
            <img
              src="https://i.gifer.com/PL7r.gif"
              class="user-image"
            >
          </button> -->
        </div>
        <div class="col-xs-12 col-sm-3 col-md-3 signin">
          <div v-if="bottomSignInShow">
            <h1>Sign In</h1>
            <form>
              <div class="form-group">
                <input
                  type="email"
                  placeholder="Enter Email"
                  class="form-control input-input"
                  v-model="email"
                >
                <input
                  type="password"
                  placeholder="Enter Password"
                  class="form-control input-input"
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
        <div class="col-xs-12 col-sm-4 col-md-4">
          <div
            class="g-ytsubscribe"
            data-channelid="UCkFNsCj6dgLOVJRALl5iCUQ"
            data-layout="default"
            data-count="default"
          ></div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4 copyright">
          <p
            class="text-center"
            style="margin-bottom: 0;"
          >&copy; copyright - 2018</p>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <p class="text-center">Powered by <a href="#">Segonatech</a></p>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 footer-horizontal">
          <hr>
        </div>
      </div> -->
      <!-- <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 copyright">
          <p
            class="text-center"
            style="margin-bottom: 0;"
          >&copy; copyright - 2018</p>
        </div>
      </div> -->
      <!-- <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 footer-horizontal">
          <hr>
        </div>
      </div> -->
      <!-- <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <p class="text-center">Powere by <a href="#">Segonatech</a></p>
        </div>
      </div> -->
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
  height: 180px;
  margin-top: 20px;
}
.music-platform {
  list-style: none;
  position: relative;
}
.music-platform a {
  text-decoration: none;
}
.user-profile {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: relative;
  top: 20px;
}
.user-image {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: relative;
  left: -13px;
  top: -7px;
}
.signin {
  position: relative;
  left: 10%;
  top: 11%;
}
.available {
  margin-top: 20px;
}
.social-media__mark {
  position: relative;
}
.imp-social {
  position: relative;
}
.sac-contact {
  position: relative;
}
@media (min-width: 768px) and (max-width: 992px) {
  .vl {
    display: none;
  }
  .available {
    display: none;
  }
  .music-platform {
    top: 54px;
    left: 220px;
    padding: 0;
  }
  .music.pat {
    padding: 0;
  }
  .signin {
    display: none;
  }
  .social-media__mark {
    left: 120px;
  }
  .imp-social {
    top: -25px;
    left: 40px;
  }
  .sac-contact {
    top: -25px;
    left: 25px;
  }
}
@media (min-width: 600px) and (max-width: 767px) {
  .vl {
    display: none;
  }
  .available {
    display: none;
  }
  .signin {
    display: none;
  }
  .music-platform {
    display: none;
  }
  .imp-social {
    top: -25px;
    left: 25px;
  }
  .social-media__mark {
    left: 120px;
    padding: 0;
  }
  .direct-contact-sac {
    padding: 0;
  }
  .sac-contact {
    top: -25px;
    left: 25px;
  }
}
@media (min-width: 420px) and (max-width: 560px) {
  .vl {
    display: none;
  }
  /* .input-input {
    width: 200px;
  } */
  .footer-horizontal {
    left: -20px;
  }
  .signin {
    width: 200px;
  }
  .container {
    margin-right: 0;
    padding-right: 0;
    width: 340px;
  }
}
@media (min-width: 320px) and (max-width: 419px) {
  .vl {
    display: none;
  }
  .signin {
    width: 200px;
  }
  .container {
    width: 220px;
    padding: 0;
  }
}
</style>
