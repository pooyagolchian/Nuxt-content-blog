<template>
  <div class="header col-12 pt-20 pb-20">
    <div class="container">
      <div class="row justify-content-between pt-30">
        <router-link
          class="col-auto app-title font-weight-bolder fs-30 cp"
          tag="div"
          to="/"
        >
          Pooya Golchian
        </router-link>
        <div class="col-auto fs-14 font-weight-light cp">
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
          ></change-theme>
        </div>
      </div>
    </div>
  </div>
</template>
