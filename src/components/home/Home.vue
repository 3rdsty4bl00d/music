<template>
  <div>
    <header>
      <app-nav-bar></app-nav-bar>
    </header>
    <aside>
      <app-social-icons></app-social-icons>
    </aside>
    <main>
      <!-- <app-home-h class="home-app"></app-home-h> -->
      <app-carousel-home class="home-app"></app-carousel-home>
      <app-trending-songs style="margin-bottom: 90px;"></app-trending-songs>
      <b-card style="margin-bottom: 90px;">
        <app-trending-albums></app-trending-albums>
      </b-card>
      <app-featured-songs style="margin-bottom: 90px;"></app-featured-songs>
      <hr>
      <app-video style="margin-bottom: 120px;"></app-video>
    </main>
    <footer>
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>
import NavBar from '../navbar/NavBar.vue'
import HomeH from '@/components/homeh/HomeH.vue'
import TrendingSongs from '@/components/homeh/trendingsongs/TrendingSongs.vue'
import TrendingAlbums from '@/components/homeh/trendingalbums/TrendingAlbums.vue'
import FeaturedSongs from '@/components/homeh/featuredsongs/FeaturedSongs.vue'
import Video from '@/components/homeh/video/Video.vue'
import AnimateHome from '@/components/homeh/AnimateHome.vue'
import CarouselHome from '@/components/homeh/CarouselHome.vue'
import Footer from '@/components/footer/Footer.vue'
import SocialIcons from '@/components/shared/SocialIcons.vue'

export default {
  components: {
    appNavBar: NavBar,
    appHomeH: HomeH,
    appTrendingSongs: TrendingSongs,
    appTrendingAlbums: TrendingAlbums,
    appAnimateHome: AnimateHome,
    appFooter: Footer,
    appSocialIcons: SocialIcons,
    appFeaturedSongs: FeaturedSongs,
    appVideo: Video,
    appCarouselHome: CarouselHome
  }
}
</script>

<style scoped>
.home-app {
  margin-bottom: 30px;
}
</style>
