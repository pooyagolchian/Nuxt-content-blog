<template>
  <div class='container'>
    <app-nav></app-nav>
    <Nuxt keep-alive />
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
   head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://pooyagolchian.com' + this.$route.path
        }
      ]
    }
  }
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
