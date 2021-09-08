<template>
  <div class='row m-0'>
    <div class='col-12 col-sm-12 col-md-4 info'>
      <div class='row pb-30'>
        <div class='col-12 col-sm-12 col-md-12'>
          <nuxt-link to='/about' tag='div'>
            <img
              alt=''
              class='h1-00 w-100 pb-20 pt-20 my-photo cp'
              src='/img/home-img/pooya-golchian.JPG'
            />
          </nuxt-link>
        </div>
        <nuxt-link to='/about' tag='div'
                   class='col-12 col-sm-12 col-md-12 d-flex justify-content-center align-items-center flex-column cp'
        >
          <h1
            class='fs-18 app-title text-left d-flex flex-1 w-100 font-weight-bold'
          >
            I'm Pooya Golchian
          </h1>
          <ul
            class='p-0 m-0 d-flex justify-content-center align-items-start flex-column flex-1 w-100 app-subtitle'
          >
            <li>Frontend Engineer (Vue.js/React.js)</li>
            <li>DevOps Engineer and Linux Server Engineer</li>
            <li>Code, Coffee, Crypto</li>
          </ul>
          <p class='fs-14 app-title pt-10'>
            I was born in Tehran in 1990. When my father bought a computer for our home, I fell in love with it. I start
            to learned Linux with Ubuntu and Fedora when I was 16 years old. Now, I have a master's degree in computer
            engineering. I have 10 years' experience in web development. I have been using Javascript for web
            development. I have 4 years of experience in Vue.js and, Nuxt.js. I worked with React.js too. I have
            developed lots of web applications with high-tech frameworks. I have experience with PHP, WordPress, Drupal,
            headless CMS, and JAM STACK architecture. For more information about my professional full-time work, please
            see my
            <nuxt-link to='/cv'>CV</nuxt-link>
            .
          </p>
        </nuxt-link>
      </div>

    </div>
    <div class='col-12 col-sm-12 col-md-5 blog'>

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
    <div class='col-12 col-sm-12 col-md-3 project pb-50'>
      <div class='font-weight-bold app-title pt-10 fs-20 pb-10'>Open-Source project</div>
      <a class='app-title d-flex flex-row pt-2 pb-2 fs-14' href='https://www.npmjs.com/package/vue-multiple-themes'
         target='_blank'>VUE.js multiple theme color NPM package</a>
      <a class='app-title d-flex flex-row pt-2 pb-2 fs-14' href='https://www.npmjs.com/package/vue-js-star-rating'
         target='_blank'>VUE.js icon rating NPM package</a>
      <a class='app-title d-flex flex-row pt-2 pb-2 fs-14' href='https://github.com/pooyagolchian/pooyagolchian.github.io'
         target='_blank'>NUXT.js SSG blog</a>
      <a class='app-title d-flex flex-row pt-2 pb-2 fs-14' href='https://github.com/pooyagolchian/memegen' target='_blank'>Meme
        generator React.js application</a>
      <a class='app-title d-flex flex-row pt-2 pb-2 fs-14' href='https://www.npmjs.com/package/scss-helper' target='_blank'>
        Mini UI SCSS helper, Grid, Typography, etc.
      </a>
      <a class='app-title d-flex flex-row pt-2 pb-2 fs-14' href='https://www.npmjs.com/package/vuetify-form-base-ssr'
         target='_blank'>
        Customize Vuetify.js form builder for Nuxt.js for panel.azkivam.com
      </a>
      <a class='app-title d-flex flex-row pt-2 pb-2 fs-14' href='https://github.com/pooyagolchian/docker-and-kubernetes-tutorial'
         target='_blank'>
        Docker, Kubernetes | tutorial and cheatsheet
      </a>
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

<style lang='scss'></style>
