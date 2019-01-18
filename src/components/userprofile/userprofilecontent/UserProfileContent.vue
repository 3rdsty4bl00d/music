<template>
  <div class="container">
    <div class="row user-card">
      <div class="col-xs-12 col-sm-6 col-md-6">
        <app-user-details></app-user-details>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetails from '@/components/userprofile/userprofilecontent/userdetails/UserDetails.vue'
export default {
  components: {
    appUserDetails: UserDetails
  }
}
</script>

<style scoped>
.container {
  margin: 90px 55px;
}
.user-card {
  margin-top: 20px;
}
</style>
