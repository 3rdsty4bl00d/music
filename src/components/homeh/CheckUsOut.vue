<template>
  <div class="container-fluid">
    <div
      class="row"
      style="color: #fff;"
    >
      <div class="col-xs-12">
        <div class="card">
          <img
            src="@/assets/check.gif"
            alt="check us out"
            class="check-img img-fluid"
          >
          <div class="card-img-overlay">
            <div class="row check-title">
              <div class="col-xs-12">
                <transition
                  @enter="headEnter"
                  @css="false"
                  appear
                >
                  <h1 class="head-check">Check us out on!!!</h1>
                </transition>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-3 col-xs-12 col-md-3">
                <a
                  href="#"
                  class="icons-itunes"
                >
                  <i class="fab fa-itunes fa-7x"></i>
                </a>
              </div>
              <div class="col-sm-3 col-xs-12 col-md-3">
                <a
                  href="#"
                  class="icons-google"
                >
                  <i class="fab fa-google-play fa-7x"></i>
                </a>
              </div>
              <div class="col-sm-3 col-xs-12 col-md-3">
                <a
                  href="#"
                  class="icons-spotify"
                >
                  <i class="fab fa-spotify fa-7x"></i>
                </a>
              </div>
              <div class="col-sm-3 col-xs-12 col-md-3">
                <a
                  href="#"
                  class="icons-sound"
                >
                  <i class="fab fa-soundcloud fa-7x"></i>
                </a>
              </div>
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
  methods: {
    headEnter (el, done) {
      Velocity(el, {
        translateX: '470px'
      },
      {
        duration: 2000
      })
    }
  }
}
</script>

<style scoped>
.check-img {
  width: 98vw;
  height: 50vh;
}
.check-title {
  font-family: tangerine;
}
.head-check {
  font-size: 90px;
}
.inside-card {
  color: #000;
}
.icons-sound {
  margin-left: 90px;
  color: #ff8800;
}
.icons-spotify {
  margin-left: 90px;
  color: #84bd00;
}
.icons-google {
  margin-left: 90px;
  color: #ff3333;
}
.icons-itunes {
  margin-left: 90px;
  color: #ea4cc0;
}
@media only screen and (max-width: 894px) {
  .head-check {
    position: relative;
    left: -50%;
  }
  .icons-google {
    margin-left: 50px;
  }
  .icons-itunes {
    margin-left: 50px;
  }
  .icons-sound {
    margin-left: 50px;
  }
  .icons-spotify {
    margin-left: 50px;
  }
}
@media only screen and (max-width: 648px) {
  .head-check {
    left: -330px;
  }
  .icons-google {
    margin-left: 2px;
  }
  .icons-itunes {
    margin-left: 2px;
  }
  .icons-sound {
    margin-left: 2px;
  }
  .icons-spotify {
    margin-left: 2px;
  }
}
@media only screen and (max-width: 576px) {
  .head-check {
    font-size: 50px;
  }
  .fab {
    transform: scaleY(0.8, 1);
  }
}
</style>
