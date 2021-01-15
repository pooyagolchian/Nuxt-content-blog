<template>
  <div>
    <app-header></app-header>
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from './../components/Header'

export default {
  components: {
    'app-header': AppHeader,
  },
}
</script>
