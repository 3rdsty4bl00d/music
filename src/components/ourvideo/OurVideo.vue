<template>
  <div>
    <header>
      <app-nav-bar></app-nav-bar>
    </header>
    <aside>
      <app-social-icons></app-social-icons>
    </aside>
    <main>
      <app-our-video-content></app-our-video-content>
    </main>
    <footer>
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>
import NavBar from '../navbar/NavBar.vue'
import OurVideoContent from '@/components/ourvideo/ourvideocontent/OurVideoContent.vue'
import SocialIcons from '@/components/shared/SocialIcons.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
  components: {
    appNavBar: NavBar,
    appOurVideoContent: OurVideoContent,
    appSocialIcons: SocialIcons,
    appFooter: Footer
  }
}
</script>

<style>
</style>
