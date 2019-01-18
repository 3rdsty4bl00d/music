<template>
  <div>
    <header>
      <app-nav-bar></app-nav-bar>
    </header>
    <aside>
      <app-social-icons></app-social-icons>
    </aside>
    <main>
      <app-profile></app-profile>
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
import Profile from '@/components/userprofile/userprofilecontent/UserProfileContent.vue'
export default {
  components: {
    appNavBar: NavBar,
    appProfile: Profile,
    appSocialIcons: SocialIcons,
    appFooter: Footer
  }
}
</script>

<style>
</style>
