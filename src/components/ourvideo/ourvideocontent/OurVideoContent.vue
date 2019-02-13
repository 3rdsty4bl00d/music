<template>
  <!-- <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="image-wrapper">
        </div>
      </div>
    </div>
  </div> -->
  <div class="image-wrapper__div">
    <img
      src="../../../assets/empty2.png"
      alt="empty image"
      class="empty-image__while-empty image-fluid"
    >
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.empty-image__while-empty {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  z-index: -2;
}
.image-wrapper__div {
  position: relative;
  text-align: center;
  color: white;
}
</style>
