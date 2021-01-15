<template>
  <div>
    <div>
      <AppSearchInput />
      <h1>Blog Posts</h1>
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <img class="w-25" :src="article.img" />
            <div>
              <h2>{{ article.title }}</h2>
              <p>by {{ article.author.name }}</p>
              <p>{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .sortBy('date', 'desc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
