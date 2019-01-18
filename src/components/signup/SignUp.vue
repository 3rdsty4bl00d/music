<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-md-6">
        <div class="card signin-card">
          <app-sign-up-content></app-sign-up-content>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpContent from '@/components/signup/signupcontent/SignUpContent.vue'
export default {
  components: {
    appSignUpContent: SignUpContent
  }
}
</script>

<style scoped>
.signin-card {
  position: relative;
  left: 50%;
  top: 50%;
  padding: 15px;
}
</style>
