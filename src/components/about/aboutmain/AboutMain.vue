<template>
  <div class="container about-all">
    <div class="row about-all--title">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <transition
          @enter="aboutEnter"
          @css="false"
          appear
        >
          <h3 class="about-heading__title">About Us</h3>
        </transition>
      </div>
    </div>
    <div class="row about-all__hor-line">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <transition
          @enter="horizontalLineEnter"
          @css="false"
          appear
        >
          <hr class="hor-line">
        </transition>
      </div>
    </div>
    <transition
      @enter="firstEnter"
      @css="false"
      appear
    >
      <app-first-about></app-first-about>
    </transition>
    <div class="row about-all__second-about">
      <div class="col-xs-12 col-sm-6 col-md-6">
        <transition
          @enter="secondEnter"
          @css="false"
          appear
        >
          <app-second-about></app-second-about>
        </transition>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6">
        <transition
          @enter="secondEnterSecond"
          @css="false"
          appear
        >
          <app-second-about-second></app-second-about-second>
        </transition>
      </div>
    </div>
    <div class="row about-all__services">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <transition
          @enter="servicesEnter"
          @css="false"
          appear
        >
          <app-our-services></app-our-services>
        </transition>
      </div>
    </div>
    <div class="row about-all__learnmore">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <transition
          @enter="learnEnter"
          @css="false"
          appear
        >
          <app-learn-more></app-learn-more>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import FirstAbout from '@/components/about/aboutmain/FirstAbout.vue'
import SecondAbout from '@/components/about/aboutmain/SecondAbout.vue'
import SecondAboutSecond from '@/components/about/aboutmain/SecondAboutSecond.vue'
import OurServices from '@/components/about/aboutmain/OurServices.vue'
import LearnMore from '@/components/about/aboutmain/LearnMore.vue'
import Velocity from 'velocity-animate'
export default {
  components: {
    appFirstAbout: FirstAbout,
    appSecondAbout: SecondAbout,
    appSecondAboutSecond: SecondAboutSecond,
    appOurServices: OurServices,
    appLearnMore: LearnMore
  },
  methods: {
    aboutEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 5000
      }, {
        complete: done
      })
    },
    horizontalLineEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 5200
      }, {
        complete: done
      })
    },
    firstEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 6500
      }, {
        complete: done
      })
    },
    secondEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 9500
      }, {
        complete: done
      })
    },
    secondEnterSecond (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 11000
      }, {
        complete: done
      })
    },
    servicesEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 12500
      }, {
        complete: done
      })
    },
    learnEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 14500
      }, {
        complete: done
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 76px 55px;
}
.about-all {
  position: relative;
  left: 3%;
}
.about-heading__title {
  margin-top: 40px;
}
.hor-line {
  width: 34%;
  position: relative;
  left: -115px;
  margin-bottom: 55px;
}
.about-all__services {
  margin-top: 20px;
}
.about-all__learnmore {
  margin-top: 20px;
}
.about-all__second-about {
  margin-top: 20px;
}
@media (min-width: 768px) and (max-width: 992px) {
  .hor-line {
    left: -40px;
    width: 120px;
  }
  .about-all {
    left: -10px;
  }
}
@media (min-width: 600px) and (max-width: 767px) {
  .about-all {
    left: -10px;
  }
  .hor-line {
    left: -55px;
    width: 120px;
  }
}
@media (min-width: 420px) and (max-width: 599px) {
  .about-all {
    left: -10px;
    width: 420px;
  }
  .hor-line {
    width: 130px;
    left: -135px;
  }
  .about-all__hor-line {
    width: 420px;
  }
  .about-all__second-about {
    width: 420px;
  }
  .about-all__services {
    width: 420px;
  }
  .about-all__learnmore {
    width: 420px;
  }
  .about-all--title {
    width: 420px;
  }
}
@media (min-width: 320px) and (max-width: 419px) {
  .about-all {
    width: 320px;
    left: -15px;
  }
}
</style>
