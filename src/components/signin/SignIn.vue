<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-md-6">
        <div class="card signin-card">
          <app-sign-in-content></app-sign-in-content>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignInContent from '@/components/signin/signincontent/SignInContent.vue'
export default {
  components: {
    appSignInContent: SignInContent
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
