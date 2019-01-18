<template>
  <div>
    <header>
      <app-nav-bar></app-nav-bar>
    </header>
    <aside>
      <app-social-icons></app-social-icons>
    </aside>
    <main>
      <app-trending-songs-main></app-trending-songs-main>
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
import TrendingSongsMain from '@/components/seemore/seemoretrendingsongs/TrendingSongsMain.vue'
export default {
  components: {
    appNavBar: NavBar,
    appTrendingSongsMain: TrendingSongsMain,
    appSocialIcons: SocialIcons,
    appFooter: Footer
  }
}
</script>

<style>
</style>
