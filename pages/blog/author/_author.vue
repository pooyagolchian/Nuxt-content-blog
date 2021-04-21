<template>
  <div class="container">
    <h1 class="app-title">Author: {{ articles[0].author.name }}</h1>
    <p class="app-subtitle">Bio: {{ articles[0].author.bio }}</p>
    <h3 class="app-subtitle">
      Here are a list of articles by {{ articles[0].author.name }}:
    </h3>
    <div class="row pb-40 pt-40">
      <div
        class="col-12 col-sm-12 col-md-12 pt-20 pb-20"
        v-for="article of articles"
        :key="article.slug"
      >
        <NuxtLink
          tag="a"
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="link"
        >
          <div>
            <h2 class="app-title fs-19 font-weight-bold pt-10">
              {{ article.title }}
            </h2>
            <div class="app-subtitle">{{ formatDate(article.date) }}</div>
            <div class="app-subtitle fa-15 pt-10">
              {{ article.description }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .where({
        'author.name': {
          $regex: [params.author, 'i'],
        },
      })
      .without('body')
      .sortBy('date', 'desc')
      .fetch()

    return {
      articles,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
