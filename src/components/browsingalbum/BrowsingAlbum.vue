<template>
  <div>
    <header>
      <app-nav-bar></app-nav-bar>
    </header>
    <aside>
      <app-social-icons></app-social-icons>
    </aside>
    <main>
      <app-browsing-album-content></app-browsing-album-content>
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
import BrowsingAlbumContent from '@/components/browsingalbum/browsingalbumcontent/BrowsingAlbumContent.vue'
export default {
  components: {
    appNavBar: NavBar,
    appBrowsingAlbumContent: BrowsingAlbumContent,
    appSocialIcons: SocialIcons,
    appFooter: Footer
  }
}
</script>

<style>
</style>
