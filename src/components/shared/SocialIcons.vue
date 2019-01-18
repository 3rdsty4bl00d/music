<template>
  <div class="icon-bar">
    <transition
      @before-enter="faBeforeEnter"
      @enter="faEnter"
      @css="false"
      appear
    >
      <a
        href="https://www.facebook.com/"
        class="facebook"
        data-toggle="tooltip"
        data-placement="right"
        title="connect with us in facebook"
      ><i class="fab fa-facebook"></i></a>
    </transition>
    <transition
      @before-enter="twBeforeEnter"
      @enter="twEnter"
      @css="false"
      appear
    >
      <a
        href="#"
        class="twitter"
        data-toggle="tooltip"
        data-placement="right"
        title="connect with us in twitter"
      ><i class="fab fa-twitter"></i></a>

    </transition>
    <transition
      @before-enter="goBeforeEnter"
      @enter="goEnter"
      @css="false"
      appear
    >

      <a
        href="#"
        class="google"
        data-toggle="tooltip"
        data-placement="right"
        title="connect with us in google"
      ><i class="fab fa-google"></i></a>
    </transition>
    <transition
      @before-enter="liBeforeEnter"
      @enter="liEnter"
      @css="false"
      appear
    >

      <a
        href="#"
        class="linkedin"
        data-toggle="tooltip"
        data-placement="right"
        title="connect with us in Linkedin"
      ><i class="fab fa-linkedin"></i></a>
    </transition>
    <transition
      @before-enter="yoBeforeEnter"
      @enter="yoEnter"
      @css="false"
      appear
    >

      <a
        href="#"
        class="youtube"
        data-toggle="tooltip"
        data-placement="right"
        title="watch with us in youtube"
      ><i class="fab fa-youtube"></i></a>
    </transition>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  methods: {
    faBeforeEnter (el) {
      el.style.opacity = 0
    },
    faEnter (el, done) {
      const delay = 800
      setTimeout(() => {
        Velocity(el, {
          opacity: 1,
          rotateX: '360deg'
        })
      }, delay)
      done()
    },
    twBeforeEnter (el) {
      el.style.opacity = 0
    },
    twEnter (el, done) {
      const delay = 1600
      setTimeout(() => {
        Velocity(el, {
          opacity: 1,
          rotateX: '360deg'
        })
      }, delay)
    },
    goBeforeEnter (el) {
      el.style.opacity = 0
    },
    goEnter (el, done) {
      const delay = 2400
      setTimeout(() => {
        Velocity(el, {
          opacity: 1,
          rotateX: '360deg'
        })
      }, delay)
    },
    liBeforeEnter (el) {
      el.style.opacity = 0
    },
    liEnter (el, done) {
      const delay = 3200
      setTimeout(() => {
        Velocity(el, {
          opacity: 1,
          rotateX: '360deg'
        })
      }, delay)
    },
    yoBeforeEnter (el) {
      el.style.opacity = 0
    },
    yoEnter (el, done) {
      const delay = 4000
      setTimeout(() => {
        Velocity(el, {
          opacity: 1,
          rotateX: '360deg'
        })
      }, delay)
    }
  }
}
</script>

<style scoped>
.social-media {
  position: fixed;
}
.icon-bar {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 9999;
}

.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
}

.icon-bar a:hover {
  background-color: #000;
}

.facebook {
  background: #3b5998;
  color: white;
}

.twitter {
  background: #55acee;
  color: white;
}

.google {
  background: #dd4b39;
  color: white;
}

.linkedin {
  background: #007bb5;
  color: white;
}

.youtube {
  background: #bb0000;
  color: white;
}
</style>
