<template>
  <div>
    <div class='col-12'>
      <div class='container'>
        <div class='row pt-30 pb-30 justify-content-between'>
          <div class='col-auto row justify-content-center align-items-center'>
            <nuxt-link class='cp pr-5' tag='div' to='/'>
              <img
                alt='Logo'
                class='nav-logo'
                src='/img/avatar/pooya-golchian.jpg'
              />
            </nuxt-link>

            <change-theme
              :changeThemeOff='true'
              :defaultTheme="'light'"
              :themeColorList="[
                'light',
                'dark'
              ]"
              class='
                fs-14
                font-weight-light
                mr-10
                ml-10
                d-flex
                justify-content-center
                align-items-center
              '
            ></change-theme>
          </div>

          <div class='col-auto p-0 d-none d-md-flex'>
            <ul class='nav-link'>
              <li>
                <router-link to='/blog'>Blog</router-link>
              </li>
              <li>
                <router-link to='/cv'>CV</router-link>
              </li>
            </ul>
          </div>

          <div class='col-auto p-0 d-sm-flex d-md-none'>
            <ul class='nav-link'>
              <li class='app-title cp' @click='handleMenu'>
                <span class='lnr lnr-menu fs-30'></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div v-if='isShow' class='mobile-menu'>
      <div class='clos-btn app-title'  @click='isShow = false'>
        <span class='lnr lnr-cross fs-40'></span>
      </div>
      <ul class='text-center p-0 m-0'>
        <li>
          <router-link to='/blog' @click.native='isShow = false'
          >Blog
          </router-link
          >
        </li>
        <li>
          <router-link to='/cv'>CV</router-link>
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
