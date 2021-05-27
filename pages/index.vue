<template>
  <div>
    <div class="container">
      <div class="row pb-30">
        <div class="col-12 col-sm-12 col-md-6">
          <img
            class="h1-00 w-100 pb-20 pt-20"
            src="/img/home-img/header.svg"
            alt=""
          />
        </div>
        <div
          class="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-center flex-column cp"
        >
          <h1
            class="fs-18 app-title text-left d-flex flex-1 w-100 font-weight-bold"
          >
            I'm Pooya Golchian
          </h1>
          <ul
            class="p-0 m-0 d-flex justify-content-center align-items-start flex-column flex-1 w-100 app-subtitle"
          >
            <li>Frontend Developer (Vue.js/React.js)</li>
            <li>Code, Coffee, Crypto</li>
          </ul>
          <ul class="footer-social d-flex flex-start w-100 pt-10">
            <li>
              <a
                class="col-auto app-title font-weight-light fs-12 pl-0"
                href="https://github.com/pooyagolchian"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <a
                class="col-auto app-title font-weight-light fs-12"
                href="https://linkedin.com/in/pooyagolchian"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                class="col-auto app-title font-weight-light fs-12"
                href="https://dribbble.com/pooyagolchian"
                target="_blank"
              >
                Dribbble
              </a>
            </li>
            <li>
              <a
                class="col-auto app-title font-weight-light fs-12"
                href="https://dev.to/pooyagolchian"
                target="_blank"
              >
                Dev
              </a>
            </li>

            <li>
              <a
                class="col-auto app-title font-weight-light fs-12"
                href="/blog/rss.xml"
                target="_blank"
              >
                RSS
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-12 p-0">
        <AppSearchInput />
      </div>

      <div class="row pb-40 pt-40">
        <div
          class="col-12 col-sm-12 col-md-12 pt-15 pb-15"
          v-for="article of articles"
          :key="article.slug"
        >
          <NuxtLink
            tag="a"
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="cp mb-20 link"
          >
            <div class="w-100">
              <h2 class="app-title fs-19 font-weight-bold pt-10">
                {{ article.title }}
              </h2>
              <div class="app-subtitle fs-13">
                {{ formatDate(article.date) }}
              </div>
              <div class="app-subtitle fa-15 pt-10">
                {{ article.description }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="row">
        <div
          class="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-center flex-column"
        >
          <h1
            class="fs-18 app-title text-left d-flex flex-1 w-100 font-weight-bold"
          >
            Web Development
          </h1>
          <ul
            class="p-0 m-0 d-flex justify-content-center align-items-start flex-column flex-1 w-100 app-subtitle"
          >
            <li>API design (Microservice architecture)</li>
            <li>JAM-Stack and SSR</li>
            <li>Nosql database</li>
            <li>DevOps and Server adminstration</li>
          </ul>
        </div>
        <div class="col-12 col-sm-12 col-md-6">
          <img
            class="h1-00 w-100 pb-20 pt-20"
            src="/img/home-img/1.svg"
            alt=""
          />
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
      .limit()
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

<style lang="scss"></style>
