<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <img
      src="@/assets/sacmusic.jpg"
      alt="sac logo"
      class="sac-logo image-fluid"
    >
    <a
      class="navbar-brand"
      href="#"
      style="font-size: 25px;"
    >Sac Music</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav mr-auto">
        <li
          class="nav-item active"
          v-for="navBar in navBarIcons"
          :key="navBar.title"
        >
          <a
            class="nav-link"
            href="#"
          >{{navBar.navTitle}}
            <span class="sr-only">(current)</span></a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        >
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >Search</button>
      </form>
    </div>
  </nav> -->
  <div>
    <b-navbar
      toggleable="md"
      type="dark"
      variant="dark"
      fixed="top"
    >

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">
        <img
          src="@/assets/sacmusic.jpg"
          class="d-inline-block align-top sac-logo"
          alt="BV"
          style="height: 50px; width: 50px;"
        >
        <span
          style="position: relative; top: 10px; left: -40px;"
          @click="navigateToSelf"
        >
          Sac Music
        </span>
      </b-navbar-brand>

      <b-collapse
        is-nav
        id="nav_collapse"
      >

        <b-navbar-nav>
          <b-nav-item
            :to="navBar.link"
            v-for="navBar in navBarIcons"
            :key="navBar.navTitle"
          >
            {{ navBar.navTitle }}
          </b-nav-item>
          <b-nav-item
            to="/signin"
            v-if="signInShow"
          >
            Sign In
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <div>
              <input
                type="text"
                placeholder="Search for songs"
                class="form-control"
                v-model="songName"
                v-on:keyup.enter="inputSongName"
              >
              <!-- <b-dropdown
                variant="link"
                size="lg"
                no-caret
              >
                <template slot="button-content">
                  &#x1f50d;
                  <span class="sr-only">Search</span>
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here...</b-dropdown-item>
              </b-dropdown> -->
            </div>
            <!-- <b-button
            size="sm"
            class="my-2 my-sm-0"
            type="submit"
          >Search</b-button> -->
          </b-nav-form>
          <!-- <div class="search-div">
            <ul
              v-if="showSearch"
              class="search-ul"
            >
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
            </ul>
          </div> -->
          <!-- <b-nav-item-dropdown
          text="Lang"
          right
        >
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
            <b-dropdown-item @click="navigateToHome">
              Signout
              <transition
                @enter="userEnter"
                @css="false"
                appear
              >
                <i class="far fa-user-circle"></i>
              </transition>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
import axios from 'axios'
export default {
  data: () => ({
    iconEnter: false,
    songName: '',
    musicName: [],
    navBarIcons: [
      {
        navTitle: 'Home',
        icon: 'fas fa-home',
        link: '/'
      },
      {
        navTitle: 'About',
        icon: 'fas fa-guitar',
        link: '/about'
      },
      {
        navTitle: 'Our Music',
        icon: 'fas fa-music',
        link: '/ourmusic'
      },
      {
        navTitle: 'Our Video',
        icon: 'fas fa-video',
        link: '/video'
      },
      {
        navTitle: 'Shop',
        icon: 'fas fa-shopping-cart',
        link: '/shop'
      }
    ]
  }),
  created () {
    axios.get('http://sacmusic.com/api/music')
      .then(res => {
        for (let m = 0; m < res.data.music.length; m++) {
          this.musicName.push(res.data.music[m].song_name)
        }
      })
  },
  computed: {
    signInShow () {
      return this.$store.getters.signInShow
    }
  },
  methods: {
    inputSongName () {
      this.$router.push('/searchedSong')
    },
    userEnter (el, done) {
      setTimeout(() => {
        Velocity(el, {
          rotateZ: '7200deg'
        }, {
          duration: 5000
        })
      }, 5000)
    },
    sEnter (el, done) {
      Velocity(el,
        {
          rotateX: '360deg',
          rotateY: '360deg',
          rotateZ: '360deg'
        },
        {
          duration: 5000
        },
        {
          complete: done
        }
      )
    },
    navigateToSelf () {
      this.$router.push('/')
    },
    navigateToHome () {
      this.iconEnter = true
      this.$store.state.signInShow = true
      this.$store.dispatch('setUserEmail', null)
      this.$store.dispatch('setUserPassword', null)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.sac-logo {
  width: 70px;
  height: 70px;
  margin-right: 40px;
  transition: all 2s ease;
}
.sac-logo:hover {
  transform: rotateX(360deg);
}
.nav-link {
  text-decoration: none;
  margin: 0 20px;
}
.search-drop {
  position: relative;
  left: -30px;
}
.form-control:focus {
  border-color: none;
}
.form-control {
  border-radius: none !important;
}
/* .nav-item {
  margin: 0 8px;
}
.form-inline {
  float: right;
}
.navbar-collapse {
  margin-top: 25px;
}
.nav-bar {
  color: #000;
  position: relative;
  top: -60px;
}
.sac-logo {
  width: 70px;
  height: 70px;
  transition: all 2s ease;
}
.sac-logo:hover {
  transform: rotateX(360deg);
}
.nav-link {
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  transition: all 1s ease;
}
i {
  transition: all 1s ease;
}
.nav-link:hover i {
  transform: translateX(-10px);
}
.nav-link:hover {
  color: #ffcc00;
}
.navbar-brand {
  margin-right: 0;
  font-size: 30px;
  margin-top: 10px;
  color: #020111;
}
.brand-name {
  position: relative;
  left: -20px;
  top: 15px;
  margin-right: 40px;
  transition: all 1s ease;
} */
</style>
