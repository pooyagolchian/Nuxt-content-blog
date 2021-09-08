<template>
  <div class='body-container-divider'>
    <app-nav></app-nav>
    <Nuxt />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from './../components/Nav'
import AppHeader from './../components/Header'
import AppFooter from './../components/Footer'

export default {
  components: {
    'app-nav': AppNav,
    'app-header': AppHeader,
    'app-footer': AppFooter,
  },
}
</script>

<style lang="scss">
body {
  position: relative;
}

.loader {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
