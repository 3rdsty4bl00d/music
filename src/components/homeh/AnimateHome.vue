<template>
  <div>
    <div class="container-fluid">
      <div class="row home-image__height">
        <transition
          @enter="firstEnter"
          @css="false"
          appear
        >
          <div class="col-md-3 home-image">
            <img
              src="@/assets/1.jpg"
              alt="home card"
              height="100%"
              width="100%"
            >
          </div>
        </transition>
        <transition
          @enter="secondEnter"
          @css="false"
          appear
        >
          <div class="col-md-3 home-image">
            <img
              src="@/assets/2.jpg"
              alt="home card"
              height="100%"
              width="100%"
            >
          </div>
        </transition>
        <transition
          @enter="thirdEnter"
          @css="false"
          appear
        >
          <div class="col-md-3 home-image">
            <img
              src="@/assets/3.jpg"
              alt="home card"
              height="100%"
              width="100%"
            >
          </div>
        </transition>
        <transition
          @enter="fourthEnter"
          @css="false"
          appear
        >
          <div class="col-md-3 home-image">
            <img
              src="@/assets/4.jpg"
              alt="home card"
              height="100%"
              width="100%"
            >
          </div>
        </transition>
        <transition
          @enter="fifthEnter"
          @css="false"
          appear
        >
          <div class="col-md-3 home-image">
            <img
              src="@/assets/5.jpg"
              alt="home card"
              height="100%"
              width="100%"
            >
          </div>
        </transition>
        <transition
          @enter="sixthEnter"
          @css="false"
          appear
        >
          <div class="col-md-3 home-image">
            <img
              src="@/assets/6.jpg"
              alt="home card"
              height="100%"
              width="100%"
            >
          </div>
        </transition>
        <transition
          @enter="seventhEnter"
          @css="false"
          appear
        >
          <div class="col-md-3 home-image">
            <img
              src="@/assets/7.jpg"
              alt="home card"
              height="100%"
              width="100%"
            >
          </div>
        </transition>
        <transition
          @enter="eighthEnter"
          @css="false"
          appear
        >
          <div class="col-md-3 home-image">
            <img
              src="@/assets/8.jpg"
              alt="home card"
              height="100%"
              width="100%"
            >
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  methods: {
    firstEnter (el, done) {
      setTimeout(() => {
        el.style.opacity = 0
      }, 500)
      Velocity(el, 'fadeIn', {
        duration: 2000
      })
      Velocity(el, {
        rotateX: '360deg',
        rotateY: '360deg',
        rotateZ: '360deg'
      },
      {
        duration: 4000
      })
      Velocity(el, {
        scaleX: (0.6)
      }, {
        duration: 1500
      })
      Velocity(el, {
        scaleX: (1)
      }, {
        duration: 1700
      }, {
        complete: done
      })
    },
    secondEnter (el, done) {
      setTimeout(() => {
        el.style.opacity = 0
      }, 500)
      Velocity(el, 'fadeIn', {
        duration: 2800
      })
      Velocity(el, {
        rotateX: '360deg',
        rotateY: '360deg',
        rotateZ: '360deg'
      },
      {
        duration: 4000
      })
      Velocity(el, {
        rotateZ: '360deg',
        rotateY: '360deg'
      }, {
        duration: 1500
      }, {
        complete: done
      })
    },
    thirdEnter (el, done) {
      setTimeout(() => {
        el.style.opacity = 0
      }, 500)
      Velocity(el, 'fadeIn', {
        duration: 2000
      })
      Velocity(el, {
        scaleX: (0.6)
      }, {
        duration: 1500
      })
      Velocity(el, {
        rotateX: '360deg',
        rotateY: '360deg',
        rotateZ: '360deg'
      },
      {
        duration: 4000
      })
      Velocity(el, {
        scaleX: (1)
      },
      {
        duration: 1500
      }, {
        complete: done
      })
    },
    fourthEnter (el, done) {
      setTimeout(() => {
        el.style.opacity = 0
      }, 500)
      Velocity(el, 'fadeIn', {
        duration: 2000
      })
      /* Velocity(el, {
        translateY: '180px',
        translateX: '180px'
      }, {
        duration: 2000
      }) */
      Velocity(el, {
        /* translateY: '20px', */
        scale: (0.2, 0.8)
      }, {
        duration: 1500
      })
      Velocity(el, {
        rotateX: '360deg',
        rotateY: '360deg',
        rotateZ: '360deg'
      },
      {
        duration: 4000
      })
      Velocity(el, {
        scale: (1, 1)
        /* translateY: '-1px',
        translateX: '-1px' */
      }, {
        duration: 1000
      }, {
        complete: done
      })
    },
    fifthEnter (el, done) {
      setTimeout(() => {
        el.style.opacity = 0
      }, 500)
      Velocity(el, 'fadeIn', {
        duration: 2000
      })
      /* Velocity(el, {
        translateX: '180px'
      }, {
        duration: 1800
      }) */
      Velocity(el, {
        rotateX: '360deg',
        rotateY: '360deg',
        rotateZ: '360deg'
      },
      {
        duration: 4000
      })
      Velocity(el, {
        /* translateX: '-1px' */
      }, {
        duration: 1500
      }, {
        complete: done
      })
    },
    sixthEnter (el, done) {
      setTimeout(() => {
        el.style.opacity = 0
      }, 500)
      Velocity(el, 'fadeIn', {
        duration: 1500
      })
      Velocity(el, {
        rotateY: '360deg',
        rotateZ: '60deg'
      },
      {
        duration: 2500
      })
      Velocity(el, {
        rotateZ: '360deg',
        rotateX: '360deg'
      }, {
        duration: 2000
      }, {
        complete: done
      })
    },
    seventhEnter (el, done) {
      setTimeout(() => {
        el.style.opacity = 0
      }, 500)
      Velocity(el, 'fadeIn', {
        duration: 2200
      })
      Velocity(el, {
        rotateX: '360deg',
        rotateY: '150deg',
        rotateZ: '360deg'
      },
      {
        duration: 3000
      })
      Velocity(el, {
        rotateY: '360deg'
      }, {
        duration: 1800
      }, {
        complete: done
      })
    },
    eighthEnter (el, done) {
      setTimeout(() => {
        el.style.opacity = 0
      }, 500)
      Velocity(el, 'fadeIn', {
        duration: 1000
      })
      Velocity(el, {
        rotateX: '180deg',
        /* translateY: '-90px', */
        rotateY: '360deg',
        rotateZ: '360deg'
      },
      {
        duration: 4000
      })
      Velocity(el, {
        rotateX: '360deg'
      }, {
        duration: 2000
      })
      Velocity(el, {
        /* translateY: '-1px' */
      }, {
        duration: 1000
      }, {
        complete: done
      })
    }
  }
}
</script>

<style scoped>
.container-fluid {
  margin: 0;
}
.home-image {
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  height: 400px;
}
</style>
