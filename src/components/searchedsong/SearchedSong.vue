<template>
  <div>
    <header>
      <app-nav-bar></app-nav-bar>
    </header>
    <aside>
      <app-social-icons></app-social-icons>
    </aside>
    <main>
      <app-searched-song-main></app-searched-song-main>
    </main>
    <footer>
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>
import NavBar from '../navbar/NavBar.vue'
import SearchedSongMain from '@/components/searchedsong/searchedsongmain/SearchedSongMain.vue'
import SocialIcons from '@/components/shared/SocialIcons.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
  components: {
    appNavBar: NavBar,
    appSearchedSongMain: SearchedSongMain,
    appSocialIcons: SocialIcons,
    appFooter: Footer
  }
}
</script>

<style>
</style>
