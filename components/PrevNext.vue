<template>
  <div class="col-12 pt-5 pb-5 fs-15">
    <div class="row justify-content-between">
      <nuxt-link
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class='col col-6 prev-next d-flex justify-content-start align-items-center'
      >
        <div class='d-flex justify-content-center align-items-center'>
          <span class='lnr lnr-arrow-left pr-5 pl-5 fs-18'></span>
          <span>{{ prev.title }}</span>
        </div>
      </nuxt-link>
      <span v-else>&nbsp;</span>
      <nuxt-link
        class='col col-6 prev-next d-flex justify-content-end align-items-center text-right'
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      >
        {{ next.title }} <span class='lnr lnr-arrow-right pr-5 pl-5 fs-18'></span>
      </nuxt-link>
      <span v-else>&nbsp;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>
