<template>
  <div>
    <header>
      <app-nav-bar></app-nav-bar>
    </header>
    <aside>
      <app-social-icons></app-social-icons>
    </aside>
    <main>
      <app-trending-albums-main></app-trending-albums-main>
    </main>
    <footer>
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue'
import SocialIcons from '@/components/shared/SocialIcons.vue'
import Footer from '@/components/footer/Footer.vue'
import TrendingAlbumsMain from '@/components/seemore/seemoretrendingalbums/TrendingAlbumsMain.vue'
export default {
  components: {
    appNavBar: NavBar,
    appTrendingAlbumsMain: TrendingAlbumsMain,
    appSocialIcons: SocialIcons,
    appFooter: Footer
  }
}
</script>

<style>
</style>
