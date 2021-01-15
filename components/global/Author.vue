<template>
  <div>
    <NuxtLink
      tag="div"
      :to="`/blog/author/${author.name}`"
      class="row align-item-center mt-50 mb-50 cp"
    >
      <div class="col-auto align-item-center justify-content-center">
        <img class="author-img" :src="author.img" />
      </div>
      <div class="col-auto align-item-center">
        <h4 class="app-title fs-20">{{ author.name }}</h4>
        <div class="app-subtitle">{{ author.bio }}</div>
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
  width: 70px;
  height: 70px;
}
</style>
