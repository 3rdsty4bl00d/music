<template>
  <div class="card user-card">
    <div class="container user-details">
      <div class="row">
        <div class="col-xs-12 col-sm-4 col-md-4">
          <img
            src="https://picsum.photos/200/300/?gravity=east"
            alt="user image"
            style="height: 150px; width: 150px; border-radius: 50%;"
          >
        </div>
        <div class="col-xs-12 col-sm-8 col-md-8">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <h1>Welcome!!!</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <p style="margin-bottom: 0;"> {{userEmail}} </p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <p style="margin-bottom: 0;">Downloaded Songs: {{userEmail}} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userEmail () {
      return this.$store.getters.userEmail
    }
  }
}
</script>

<style scoped>
.user-details {
  padding: 10px;
}
</style>
