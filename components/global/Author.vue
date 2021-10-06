<template>
  <div class='col col-12'>
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
        <div class="app-title fs-16 w-100 p-0 m-0">{{ author.name }}</div>
        <div class="app-subtitle fs-12 w-100">{{ author.bio }}</div>
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

