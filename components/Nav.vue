<template>
  <div class="col-12 p-0">
    <div class="container">
      <div class="row pt-30 pb-30 justify-content-between">
        <div class="col-auto row">
          <router-link class="cp" to="/" tag="div">
            <img
              class="nav-logo"
              src="/img/avatar/pooya-golchian.jpg"
              alt="Logo"
            />
          </router-link>

          <change-theme
            :defaultTheme="'light'"
            :themeColorList="[
              'light',
              'dark',
              'sepia',
              'black',
              'coffee',
              'rose',
            ]"
            :changeThemeOff="true"
            class="fs-14 font-weight-light mr-10 ml-10 d-flex justify-content-center align-items-center"
          ></change-theme>
        </div>

        <div class="col-auto p-0">
          <ul class="nav-link">
            <li>
              <router-link to="/blog">Blog</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.nav-logo {
  width: 40px;
  height: auto;
  border-radius: 500px;
}

.nav-link {
  display: flex;
  flex-direction: row;
  li {
    list-style: none;
    padding-left: 7px;
  }
}
</style>
