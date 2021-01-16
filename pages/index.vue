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
            <li>who hacks everything new</li>
            <li>Full-Stack javascript developer</li>
            <li>DevOps</li>
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
              <img
                class="img-fluid w-75"
                :src="article.img"
                :alt="article.alt"
              />
            </div>
            <div class="col-12 col-sm-12 col-md-8">
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
            class="cp mb-20"
          >
            <div>
              <div
                :style="`
                background: url('${article.img}') center center no-repeat;
                height: 200px;
                background-size: contain;
                width: 70%;
                position:relative;
                `"
              ></div>
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
