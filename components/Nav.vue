<template>
  <div class='app-nav d-flex'>
      <div class='d-flex flex-column pr-5 pl-5 pt-20 pb-20'>
        <div class='col-auto p-0 justify-content-center align-items-center'>
          <nuxt-link  class='cp text-center' tag='div' to='/'>
            <span class='lnr lnr-home app-title fs-20'></span>
          </nuxt-link>

          <change-theme
            :changeThemeOff='true'
            :defaultTheme="'light'"
            :themeColorList="[
                'light',
                'dark'
              ]"
            class='
                font-weight-light
                 mt-20
                 mb-20
                d-flex
                justify-content-center
                align-items-center
              '
          ></change-theme>
        </div>
        <div class='col-auto p-0 d-none d-md-flex justify-content-center align-items-end'>
          <ul class='app-nav-link fs-14'>
            <li>
              <nuxt-link to='/blog'>Blog</nuxt-link>
            </li>
            <li>
              <nuxt-link to='/cv'>CV</nuxt-link>
            </li>
          </ul>
        </div>
        <div class='col-auto p-0 d-sm-flex d-md-none'>
          <ul class='app-nav-link'>
            <li class='app-title cp' @click='handleMenu'>
              <span class='lnr lnr-menu fs-30'></span>
            </li>
          </ul>
        </div>
      </div>



    <div v-if='isShow' class='mobile-menu'>
      <div class='clos-btn app-title' @click='isShow = false'>
        <span class='lnr lnr-cross fs-40'></span>
      </div>
      <ul class='text-center p-0 m-0'>
        <li>
          <nuxt-link to='/blog' @click.native='isShow = false'
          >Blog
          </nuxt-link
          >
        </li>
        <li>
          <nuxt-link to='/cv'>CV</nuxt-link>
        </li>
        <li class='app-title cp' @click='isShow = false'>
          <span class='lnr lnr-arrow-left'></span>
          BACK TO WEBSITE
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },

  methods: {
    handleMenu() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang='scss'>
.nav-logo {
  width: 40px;
  height: auto;
  border-radius: 500px;
}

.nav-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
  margin: 0 !important;

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
    }
  }
}
</style>
