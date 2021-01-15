<template>
  <div>
    <div class="container">
      <h1 class="app-title fs-20 pt-50 pb-20">Last articles</h1>
      <div class="row p-0 m-0">
        <div class="col-3" v-for="article of articles" :key="article.slug">
          <NuxtLink
            tag="div"
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          >
            <img class="w-100 img-responsive" :src="article.img" />
            <div>
              <h2 class="app-title fs-14 pt-10">{{ article.title }}</h2>
              <p class="app-subtitle fa-12 pt-10">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>

<style lang="scss" scoped></style>
