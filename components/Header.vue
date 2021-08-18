<template>
  <div class="header col-12 pt-30 pb-30">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-auto app-title font-weight-bolder fs-20 cp">
          <nuxt-link tag="div" to="/"> Pooya Golchian </nuxt-link>
          <div
            class="col-auto fs-14 font-weight-light d-flex justify-content-center align-items-center cp"
          >
            <change-theme
              :defaultTheme="'light'"
              :themeColorList="[
                'light',
                'dark',
              ]"
              :changeThemeOff="true"
            ></change-theme>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
