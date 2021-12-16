<template>
  <div class='body-container-divider'>
    <app-nav></app-nav>
    <Nuxt keep-alive />
    <app-footer></app-footer>
  </div>
</template>


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
