import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/Home.vue'
import OurMusic from '@/components/ourmusic/OurMusic.vue'
import About from '@/components/about/About.vue'
import SeeMoreTrendingSongs from '@/components/seemore/SeeMoreTrendingSongs.vue'
import SeeMoreTrendingAlbums from '@/components/seemore/SeeMoreTrendingAlbums.vue'
import Shop from '@/components/shop/Shop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ourmusic',
      name: 'OurMusic',
      component: OurMusic
    },
    {
      path: '/trendingSongs',
      name: 'SeeMoreTrendingSongs',
      component: SeeMoreTrendingSongs
    },
    {
      path: '/trendingAlbums',
      name: 'SeeMoreTrendingAlbums',
      component: SeeMoreTrendingAlbums
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
