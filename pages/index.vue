<template>
  <div>
    <div class="container">
      <div
        class="row pt-40"
        v-for="article of firstArticles"
        :key="article.slug"
      >
        <NuxtLink
          tag="div"
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="mb-30 cp"
        >
          <div class="w-100 d-flex flex-column flex-sm-column flex-md-row">
            <div class="col-12 col-sm-12 col-md-4">
              <img class="img-fluid" :src="article.img" :alt="article.alt" />
            </div>
            <div class="col-12 col-sm-12 col-md-8">
              <h2 class="app-title fs-19 font-weight-bold pt-10">
                {{ article.title }}
              </h2>
              <div class="app-subtitle">{{ formatDate(article.date) }}</div>
              <div class="app-subtitle fa-15 pt-10">
                {{ article.description }}
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="row pb-40">
        <div
          class="col-12 col-sm-12 col-md-4"
          v-for="article of articles"
          :key="article.slug"
        >
          <NuxtLink
            tag="div"
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          >
            <div>
              <div
                :style="`
                background: url('${article.img}') center center no-repeat;
                height: 200px;
                background-size: cover;
                width: 100%;
                position:relative;
                `"
              ></div>
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
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .sortBy('date', 'desc')
      .skip(1)
      .fetch()

    const firstArticles = await $content('articles', params.slug)
      .sortBy('date', 'desc')
      .limit(1)
      .fetch()

    return {
      articles,
      firstArticles,
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

<style lang="scss"></style>
