<template>
  <div class="embed-responsive pr-10 pl-10">
    <h1 class="app-title">Author: {{ articles[0].author.name }}</h1>
    <p class="app-subtitle">Bio: {{ articles[0].author.bio }}</p>
    <h3 class="app-subtitle">
      Here are a list of articles by {{ articles[0].author.name }}:
    </h3>
    <div class='col-12 p-0'>
      <app-search-input />
    </div>
    <div class='row pb-40'>
      <div
        v-for='article of articles'
        :key='article.slug'
        class='col-12 col-sm-12 col-md-12 pt-15 pb-15'
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class='cp mb-20 link'
          tag='a'
        >
          <div class='w-100'>
            <h2 class='app-title fs-19 font-weight-normal pt-10'>
              {{ article.title }}
            </h2>
            <div class='app-subtitle fs-13'>
              <span class='lnr lnr-calendar-full pr-5'></span>{{ formatDate(article.date) }}
            </div>
            <div class='app-subtitle fs-14 fa-15 pt-10'>
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
