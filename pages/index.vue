<template>
  <div class='row pb-15 m-0'>
    <div class='col-12 col-sm-12 col-md-6 blog'>

      <div class='col-12 p-0'>
        <app-search-input class='pt-20' />
      </div>
      <div class='row pb-10'>
        <div
          v-for='article of articles'
          :key='article.slug'
          class='col-12 col-sm-12 col-md-12 pt-5 pb-5'
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
        <div class='col col-12'>
          <nuxt-link class='blog-more-btn' to='/blog'>
            More Articles
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class='col-12 col-sm-12 col-md-6 info'>
      <div class='row pb-10'>
        <nuxt-link class='col-12 col-sm-12 col-md-12 cp'
                   tag='div'
                   to='/about'
        >
          <h1
            class='fs-18 pt-20 app-title text-left'
          >
            I'm Pooya Golchian
          </h1>
          <ul
            class='col-12 p-0 fs-16  app-subtitle font-weight-light'
          >
            <li>Senior Frontend Developer (Vue.js/React.js)</li>
            <li>Code, Coffee, Crypto</li>
          </ul>
          <p class='fs-14 app-title pt-10 m-0'>
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

        <div class='col col-12'>
          <nuxt-link class='blog-more-btn' to='/cv'>
            Visit My CV
          </nuxt-link>
        </div>
      </div>

      <div class='divider'></div>
      <div class='font-weight-normal app-title pt-10 fs-20 pb-10'>Open-Source project</div>
      <ul class='project-list'>
        <li><a class='app-title d-flex flex-row pt-2 pb-2 fs-14'
               href='https://www.npmjs.com/package/vue-multiple-themes'
               target='_blank'>VUE.js multiple theme color NPM package</a></li>
        <li><a class='app-title d-flex flex-row pt-2 pb-2 fs-14' href='https://www.npmjs.com/package/vue-js-star-rating'
               target='_blank'>VUE.js icon rating NPM package</a></li>
        <li><a class='app-title d-flex flex-row pt-2 pb-2 fs-14'
               href='https://github.com/pooyagolchian/pooyagolchian.github.io'
               target='_blank'>NUXT.js SSG blog</a></li>
        <li><a class='app-title d-flex flex-row pt-2 pb-2 fs-14' href='https://github.com/pooyagolchian/memegen'
               target='_blank'>Meme
          generator React.js application</a></li>
        <li><a class='app-title d-flex flex-row pt-2 pb-2 fs-14' href='https://www.npmjs.com/package/scss-helper'
               target='_blank'>
          Mini UI SCSS helper, Grid, Typography, etc.
        </a></li>
        <li><a class='app-title d-flex flex-row pt-2 pb-2 fs-14'
               href='https://www.npmjs.com/package/vuetify-form-base-ssr'
               target='_blank'>
          Customize Vuetify.js form builder for Nuxt.js for panel.azkivam.com
        </a></li>
        <li>
          <a class='app-title d-flex flex-row pt-2 pb-2 fs-14'
             href='https://github.com/pooyagolchian/docker-and-kubernetes-tutorial'
             target='_blank'>
            Docker, Kubernetes | tutorial and cheatsheet
          </a>
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
      .limit(6)
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

