<template>
  <div class='d-flex flex-grow-1 embed-responsive pt-20 pl-10 pr-10'>
    <article class='col-auto'>
      <h1 class="app-title p-0 m-0 font-weight-normal pb-20 fs-25">
        {{ article.title }}
      </h1>
      <p class="app-subtitle">{{ article.description }}</p>
      <p class="app-subtitle">
        Article last updated: {{ formatDate(article.updatedAt) }}
      </p>
      <div class="embed-responsive col-auto">
        <nav class="pt-20 pb-20">
          <div class="app-title fs-25 font-weight-normal text-left">
            Table of content
          </div>
          <ul>
            <li
              class="app-subtitle"
              v-for="link of article.toc"
              :key="link.id"
            >
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <nuxt-content
        class="app-subtitle article-slug"
        :document="article"
      />
      <author :author="article.author" />
      <prev-next :prev="prev" :next="next" />
    </article>
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
          content: this.article.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Pooya Golchian | ${this.article.title}`
        }
      ],
    }
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
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
