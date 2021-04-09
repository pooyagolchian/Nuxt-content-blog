<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(window.localStorage)
    if (window.localStorage.length > 0) {
      window.localStorage.clear()
      window.location.reload()
    }
  },
}
</script>
