<template>
  <div class='col col-12 pt-10 pb-10 blog-list p-0'>
    <div class='col-12 p-0'>
      <app-search-input class='pt-10' />
    </div>
    <div class='row'>
      <div
        v-for='article of articles'
        :key='article.slug'
        class='col-12 col-sm-12 col-md-6 col-lg-4 pt-5 pb-5'
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class='cp mb-20 link'
          tag='a'
        >
          <div class='w-100'>
            <h2 class='app-title fs-16 font-weight-normal pt-10'>
              {{ article.title }}
            </h2>
            <div class='app-subtitle fs-11'>
              <span class='lnr lnr-clock pr-5'></span>{{ formatDate(article.date) }}
            </div>
            <div class='text-muted fs-14 fa-15 pt-10'>
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
  head() {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Pooya Golchian technical Blog'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Pooya Golchian technical Blog'
        }
      ],
    }
  },
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
