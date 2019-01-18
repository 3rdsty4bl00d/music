<template>
  <div class="container">
    <div class="row user-card">
      <div class="col-xs-12 col-sm-6 col-md-6">
        <transition>
          @enter="userDetailsEnter"
          @css="false"
          appear
          >
          <app-user-details></app-user-details>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetails from '@/components/userprofile/userprofilecontent/userdetails/UserDetails.vue'
import Velocity from 'velocity-animate'
export default {
  components: {
    appUserDetails: UserDetails
  },
  methods: {
    userDetailsEnter (el, done) {
      Velocity(el, 'fadeIn', {
        duration: 2000
      }, {
        complete: done
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 90px 55px;
  position: relative;
  left: 5%;
}
.user-card {
  margin-top: 20px;
}
</style>
