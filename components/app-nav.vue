<template>
  <div class="app-nav col col-12 justify-content-center">
    <div class="row justify-content-between align-items-center p-0 pt-10 pb-10">
      <div
        class="col-auto justify-content-center align-items-center flex-row d-flex p-0 nav-animate-left"
      >
        <nuxt-link class="cp text-center app-nav-link-left" tag="div" to="/">
          <span class="lnr lnr-home app-title fs-20 pr-5 pl-5"></span>
        </nuxt-link>

        <change-theme
          :changeThemeOff="true"
          :defaultTheme="'light'"
          :themeColorList="['light', 'dark']"
          class="font-weight-light pl-15 pr-5 d-flex justify-content-center align-items-center"
        ></change-theme>
      </div>
      <div
        class="col-auto justify-content-center align-items-center d-none d-sm-none d-md-none d-lg-flex p-0 nav-animate-right"
      >
        <ul class="app-nav-link app-nav-link-right fs-14 p-0">
          <li class="d-flex justify-content-center align-items-center">
            <nuxt-link to="/blog">Blog</nuxt-link>
          </li>
          <li class="d-flex justify-content-center align-items-center">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li class="d-flex justify-content-center align-items-center">
            <nuxt-link to="/cv">CV</nuxt-link>
          </li>

          <li>
            <a
              class="libutton"
              href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=pooyagolchian"
              target="_blank"
              >Follow on LinkedIn</a
            >
          </li>
        </ul>
      </div>

      <div class="col-auto d-sm-block d-md-block d-lg-none">
        <ul class="app-nav-link">
          <li class="app-title cp" @click="handleMenu">
            <span class="lnr lnr-menu fs-30"></span>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="isShow" class="mobile-menu">
      <div class="clos-btn app-title" @click="isShow = false">
        <span class="lnr lnr-cross fs-30"></span>
      </div>
      <ul class="mobile-menu-animation text-center">
        <li>
          <nuxt-link to="/blog" @click.native="isShow = false">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/cv">CV</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/About" @click.native="isShow = false"
            >About
          </nuxt-link>
        </li>

        <li>
          <a
            class="libutton"
            href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=pooyagolchian"
            target="_blank"
            >Follow on LinkedIn</a
          >
        </li>

        <li class="app-title cp" @click="isShow = false">
          <span class="lnr lnr-arrow-left"></span>
          BACK TO WEBSITE
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      isShow: false,
    };
  },

  methods: {
    handleMenu() {
      this.isShow = !this.isShow;
      setTimeout(() => {
        gsap.from('.mobile-menu-animation li ', {
          duration: 1,
          opacity: 0,
          y: -50,
          stagger: 0.2
        });
      }, 100)
    },
  },

  mounted() {
    gsap.from('.nav-animate-right li', {
      duration: 1,
      opacity: 0,
      y: -50,
      stagger: 0.2
    });



    gsap.from('.nav-animate-left li', {
      duration: 1,
      opacity: 0,
      y: -50,
      stagger: 0.3
    });

    gsap.from('.nav-animate-right', {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: gsap.easeInOut,
    });
  },
};
</script>

<style lang="scss">
.nav-logo {
  width: 40px;
  height: auto;
  border-radius: 500px;
}

.nav-link {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;

  li {
    list-style: none;
    padding-left: 10px;
  }
}

.mobile-menu {
  background: var(--app-background-color);
  display: flex;
  z-index: 99999999;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;

  ul {
    margin: 0;
    padding: 0;

    li {
      padding-top: 10px;
      padding-bottom: 10px;
      a {
        text-transform: uppercase;
        font-size: 16px;
        text-decoration: none;
      }
    }
  }
}

.libutton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7px;
  text-align: center;
  outline: none;
  text-decoration: none !important;
  color: #ffffff !important;
  width: 200px;
  height: 32px;
  border-radius: 5px;
  background-color: #0a66c2;
  font-family: 'SF Pro Text', Helvetica, sans-serif;
  &:hover {
    color: white !important;
  }
}
</style>
