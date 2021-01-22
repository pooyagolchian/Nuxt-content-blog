<template>
  <div class="container not-found pt-50 pb-50">
    <h1 v-if="error.statusCode === 404" class="app-title text-center">
      <div class="fs-50">404</div>
      <div class="fs-20">Page not found</div>
    </h1>
    <h1 class="app-title" v-else>An error occurred</h1>
    <NuxtLink to="/" class="app-subtitle mt-20">Back to home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
}
</script>

<style lang="scss">
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
}
</style>
