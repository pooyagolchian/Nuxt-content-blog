<template>
  <div>
    <NuxtLink
      tag="div"
      :to="`/blog/author/${author.name}`"
      class="d-flex flex-row pt-20 pb-20 cp"
    >
      <div class="d-flex align-items-center justify-content-center">
        <img
          class="author-img justify-content-center align-items-center mr-10"
          :src="author.img"
        />
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center w-100"
      >
        <h4 class="app-title fs-20 w-100">{{ author.name }}</h4>
        <div class="app-subtitle w-100">{{ author.bio }}</div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.author-img {
  border-radius: 100px;
  width: 40px;
  height: 40px;
}
</style>
