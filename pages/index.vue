<template>
  <div class='row m-0'>
    <div class="col-12 col-sm-12 col-md-5 blog">

      <div class="col-12 p-0">
        <app-search-input class='pt-20' />
      </div>
      <div class="row pb-40">
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
              <h2 class="app-title fs-19 font-weight-normal pt-10">
                {{ article.title }}
              </h2>
              <div class="app-subtitle fs-13">
                <span class='lnr lnr-calendar-full pr-5'></span>{{ formatDate(article.date) }}
              </div>
              <div class="app-subtitle fs-14 fa-15 pt-10">
                {{ article.description }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

    </div>
    <div class='col-12 col-sm-12 col-md-3 info'>
      <div class="row pb-30">
        <div class="col-12 col-sm-12 col-md-12">
          <img
            class="h1-00 w-100 pb-20 pt-20 my-photo"
            src="/img/home-img/pooya-golchian.JPG"
            alt=""
          />
        </div>
        <div
          class="col-12 col-sm-12 col-md-12 d-flex justify-content-center align-items-center flex-column cp"
        >
          <h1
            class="fs-18 app-title text-left d-flex flex-1 w-100 font-weight-bold"
          >
            I'm Pooya Golchian
          </h1>
          <ul
            class="p-0 m-0 d-flex justify-content-center align-items-start flex-column flex-1 w-100 app-subtitle"
          >
            <li>Frontend Engineer (Vue.js/React.js)</li>
            <li>DevOps Engineer and Linux Server Engineer</li>
            <li>Code, Coffee, Crypto</li>
          </ul>
        </div>
      </div>

    </div>
    <div class='col-12 col-sm-12 col-md-4 project'>
      <div class='font-weight-bold app-title pt-10 fs-20 pb-20'>Open-Source project</div>
      <a target='_blank' class='app-title d-flex flex-row pt-2 pb-2' href='https://www.npmjs.com/package/vue-multiple-themes'>VUE.js multiple theme  color NPM package</a>
      <a target='_blank' class='app-title d-flex flex-row pt-2 pb-2' href='https://www.npmjs.com/package/vue-js-star-rating'>VUE.js icon rating NPM package</a>
      <a target='_blank' class='app-title d-flex flex-row pt-2 pb-2' href='https://github.com/pooyagolchian/pooyagolchian.github.io'>NUXT.js SSG blog</a>
      <a target='_blank' class='app-title d-flex flex-row pt-2 pb-2' href='https://github.com/pooyagolchian/memegen'>Meme generator React.js application</a>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .sortBy('date', 'desc')
      .limit()
      .fetch();

    return {
      articles,
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

<style lang="scss"></style>
