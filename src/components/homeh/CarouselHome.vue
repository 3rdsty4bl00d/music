<template>
  <div>
    <b-carousel
      id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="#ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide class="slide-cara">
        <img
          slot="img"
          class="d-block img-fluid w-100 image-cara"
          width="100%"
          height="100%"
          src="../../assets/buddha.jpg"
          alt="image slot"
        >
      </b-carousel-slide>
      <b-carousel-slide class="slide-cara">
        <img
          slot="img"
          class="d-block img-fluid w-100 image-cara"
          width="100%"
          height="100%"
          :src="imageSlide[1]"
          alt="image slot"
        >
      </b-carousel-slide>
      <b-carousel-slide class="slide-cara">
        <img
          slot="img"
          class="d-block img-fluid w-100 image-cara"
          width="100%"
          height="100%"
          :src="imageSlide[2]"
          alt="image slot"
        >
      </b-carousel-slide>
      <b-carousel-slide class="slide-cara">
        <img
          slot="img"
          class="d-block img-fluid w-100 image-cara"
          width="100%"
          height="100%"
          :src="imageSlide[15]"
          alt="image slot"
        >
      </b-carousel-slide>
    </b-carousel>
    <!-- <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="https://picsum.photos/250/250/?image=54"
            alt="First slide"
          >
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://picsum.photos/250/250/?image=54"
            alt="Second slide"
          >
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://picsum.photos/250/250/?image=54"
            alt="Third slide"
          >
        </div>
      </div>
    </div> -->
    <!-- <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100 image-cara"
            :src="imageSlide[0]"
            alt="First slide"
          >
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 image-cara"
            :src="imageSlide[1]"
            alt="Second slide"
          >
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 image-cara"
            src="https://images.pexels.com/photos/937980/pexels-photo-937980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Third slide"
          >
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Next</span>
      </a>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      imageSlide: []
    }
  },
  created () {
    axios.get('http://sacmusic.com/api/music')
      .then(res => {
        for (let i = 0; i < res.data.music.length; i++) {
          this.imageSlide.push(res.data.music[i].cover_image)
        }
        console.log(this.imageSlide)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
.image-cara {
  height: 100vh;
  width: 100vw;
}
.slide-cara {
  height: 100vh;
  width: 100vw;
}
@media (min-width: 768px) and (max-width: 992px) {
  .image-cara {
    height: 550px;
  }
  .slide-cara {
    height: 550px;
  }
}
</style>
