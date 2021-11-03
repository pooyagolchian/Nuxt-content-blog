<template>
  <div>
    <div class="col col-12 p-0">
      <article class="container">
        <nuxt-link
          class="
            d-flex
            justify-content-start
            mt-20
            mb-20
            align-items-center
            back-link
          "
          to="/"
        >
          <span class="lnr lnr-arrow-left fs-30 pr-15 d-flex"></span>
          <span>Pooya Golchian</span>
        </nuxt-link>
        <h1 class="app-title p-0 m-0 font-weight-normal pb-20 fs-25">
          {{ article.title }}
        </h1>
        <p class="app-subtitle fs-14 text-muted">{{ article.description }}</p>
        <p class="app-subtitle fs-14 text-muted">
          <span>Article last updated:</span>
          <span class="lnr lnr-clock pt-5 pl-5"></span>
          <span>{{ formatDate(article.updatedAt) }}</span>
        </p>

        <div class="divider"></div>

        <div class="col-12 p-0">
          <nav class="pt-20 pb-20">
            <div class="app-title fs-16 font-weight-normal text-left">
              <span class="lnr lnr-bookmark pr-5"></span
              ><span>Table of content</span>
            </div>
            <ul>
              <li
                class="app-subtitle fs-14 pt-10"
                v-for="link of article.toc"
                :key="link.id"
              >
                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <div class="divider"></div>
        <nuxt-content class="app-subtitle article-slug" :document="article" />
      </article>
    </div>
    <div class="divider"></div>
    <prev-next class="col col-12" :prev="prev" :next="next" />

    <div class="divider"></div>
    <author class="col col-12" :author="article.author" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title,
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch();

    const [prev, next] = await $content('articles')
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch();

    return {
      article,
      prev,
      next,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    },
  },
};
</script>

<style lang="scss">
ul {
  padding: 0;
  margin: 0;
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
.article-slug {
  img {
    max-width: 100% !important;
  }
}
</style>
