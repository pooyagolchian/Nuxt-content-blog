<template>
  <div class='embed-responsive pr-10 pl-10 pt-10 fill-height blog-list'>
    <div class='col-12 p-0'>
      <app-search-input class='pt-20' />
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
