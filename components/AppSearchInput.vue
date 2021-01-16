<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="search w-100"
    />
    <ul class="search-container pt-10" v-if="articles.length">
      <li v-for="article of articles" :key="article.slug" class="mt-10 mb-10">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: [],
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    },
  },
}
</script>

<style lang="scss">
.search {
  border: none;
  box-shadow: none;
  border-radius: 30px;
  text-indent: 20px;
  padding: 10px;
  width: 100%;
  border: 1px solid var(--app-subtitle-color);
  background-color: var(--app-background-color);
  color: var(--app-title-color);
  &:focus {
    outline: none;
  }
}
</style>
