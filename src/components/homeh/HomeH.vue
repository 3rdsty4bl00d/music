<template>
  <div>
    <div
      class="card bg-light"
      style="margin-top: 70px; height: auto;"
    >
      <img
        src="@/assets/buddhazaal.jpg"
        alt="background image"
        class="back-img"
      >
      <div
        class="card-img-overlay"
        style="color: #fff; font-family: satisfy;"
      >
        <div class="row">

          <div class="col-md-6">
            <div class="row">
              <div class="welcome">
                <transition
                  @enter="welEnter"
                  @css="false"
                  appear
                >
                  <h1>Welcome</h1>
                </transition>
              </div>
            </div>
            <div class="row">
              <div class="to">

                <transition
                  @enter="toEnter"
                  @css="false"
                  appear
                >
                  <h2>to</h2>
                </transition>
              </div>
            </div>
            <div class="row">
              <div class="sca">

                <transition
                  @enter="sacEnter"
                  @css="false"
                  appear
                >
                  <h2>Sac Music</h2>
                </transition>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img
              src="@/assets/music.gif"
              alt="music"
              class="gif-image"
            >
          </div>
        </div>
        <div class="scroll">

          <div class="row">
            <div class="col-xs-12">
              <transition
                @enter="scrollEnter"
                @css="false"
                appear
              >
                <h3>Scroll below</h3>
              </transition>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <transition
                @enter="seeEnter"
                @css="false"
                appear
              >
                <h3>to see</h3>
              </transition>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <transition
                @enter="provideEnter"
                @css="false"
                appear
              >
                <h3>what we provide</h3>
              </transition>
            </div>
          </div>
          <div class="row quote-row">
            <div class="col-xs-12">
              <p class="quote">
                "Music is a language that doesn’t speak in particular words. It speaks in emotions, and if it’s in the bones, it’s in the bones."
              </p>
              <p class="quote">
                -Keith Richards
              </p>
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
    welEnter (el, done) {
      Velocity(el,
        {
          translateX: '200px'
        },
        {
          duration: 1000
        },
        {
          complete: done
        }
      )
    },
    toEnter (el, done) {
      Velocity(el,
        {
          translateX: '225px'
        },
        {
          duration: 1500
        },
        {
          complete: done
        }
      )
    },
    sacEnter (el, done) {
      Velocity(el,
        {
          translateX: '200px'
        },
        {
          duration: 2000
        },
        {
          complete: done
        }
      )
    },
    scrollEnter (el, done) {
      Velocity(el,
        {
          translateX: '550px'
        },
        {
          duration: 3000
        },
        {
          complete: done
        }
      )
    },
    seeEnter (el, done) {
      Velocity(el, {
        translateX: '550px'
      },
      {
        duration: 3500
      },
      {
        complete: done
      }
      )
    },
    provideEnter (el, done) {
      Velocity(el,
        {
          translateX: '550px'
        },
        {
          duration: 4000
        },
        {
          complete: done
        }
      )
    }
  }
}
</script>

<style scoped>
.quote-row {
  margin-top: 35px;
}
.quote {
  text-align: center;
  font-size: 55px;
}
.welcome {
  margin-top: 170px;
}
.gif-image {
  margin-left: -240px;
  position: relative;
  top: -100px;
}
.scroll {
  position: relative;
  top: -50px;
}
.back-img {
  height: auto;
  width: 100%;
  opacity: 1;
}
@media only screen and (max-width: 1072px) {
  .gif-image {
    opacity: 0;
  }
  .scroll {
    left: -45%;
    top: -450px;
  }
}
@media only screen and (max-width: 1050px) {
  .scroll {
    top: 50px;
    left: 20px;
  }
}
@media only screen and (max-width: 1300px) {
  .quote-row {
    opacity: 0;
  }
}
@media only screen and (max-width: 770px) {
  .welcome {
    position: relative;
    top: -150px;
    left: 50px;
  }
  .to {
    position: relative;
    top: -150px;
    left: 50px;
  }
  .sca {
    position: relative;
    top: -150px;
    left: 50px;
  }
  .scroll {
    opacity: 0;
    left: -1000px;
  }
}
@media only screen and (max-width: 476px) {
  .welcome {
    left: -50px;
  }
  .to {
    left: -50px;
  }
  .sca {
    left: -50px;
  }
}
@media only screen and (max-width: 980px) {
  .scroll {
    top: -100px;
    left: -150px;
  }
}
@media only screen and (max-width: 300px) {
  .welcome {
    left: -150px;
  }
  .to {
    left: -150px;
  }
  .sca {
    left: -150px;
  }
}
</style>
