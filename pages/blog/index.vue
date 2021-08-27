<template>
  <div class='container'>
    <div>
      <div class='col-12 p-0'>
        <AppSearchInput />
      </div>
      <div class='row pb-20 pt-20'>
        <div
          v-for='article of articles'
          :key='article.slug'
          class='col-12 col-sm-12 col-md-12 mb-10 mt-10'
        >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class='cp link'
            tag='a'
          >
            <div>
              <h2 class='app-title fs-19 font-weight-bold pt-10'>
                {{ article.title }}
              </h2>
              <div class='app-subtitle'>{{ formatDate(article.date) }}</div>
              <div class='app-subtitle fa-15 pt-10'>
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
      .fetch();

    return {
      articles
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    }
  }
};
</script>
