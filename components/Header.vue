<template>
  <div class="header col-12">
    <div class="container">
      <div class="row">
        <div>
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

<script>
import ChangeTheme from '../components/Theme'
export default {
  components: {
    'change-theme': ChangeTheme,
  },
}
</script>
