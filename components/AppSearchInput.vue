<template>
  <div class="col-12 p-0">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="search w-100"
    />
    <ul class="search__container pt-10" v-if="articles.length">
      <li v-for="article of articles" :key="article.slug" class="mt-10 mb-10">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div class="row">
            <div
              class="col-12 d-flex justify-content-start align-items-center flex-column"
            >
              <div class="d-flex w-100 fs-15">{{ article.title }}</div>
              <div class="d-flex w-100 fs-12">{{ article.date }}</div>
            </div>
          </div>
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

  &__container {
    margin-top: 16px;
    border-radius: 30px;
    border: 1px solid var(--app-subtitle-color);
    padding: 16px;
    li {
      border-bottom: 1px solid var(--app-subtitle-color);
      padding-bottom: 13px;
      &:last-child {
        border: none;
      }
    }
  }
}
</style>
