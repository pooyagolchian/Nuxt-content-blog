<template>
  <div class="row pb-15 m-0">
    <div class="col-12 p-0 pt-5 qoute-animate">
      <blockquote
        class="d-flex app-title pt-5 font-weight-light fs-18 font-normal"
      >
        Invent yourself and then reinvent yourself and stay out of the clutches
        of mediocrity.
      </blockquote>
      <div
        class="d-flex justify-content-end app-subtitle font-weight-lighter fs-12"
      >
        ― Charles Bukowski, The Pleasures of the Damned.
      </div>
    </div>

    <div class="divider"></div>
    <div class="col-12 col-sm-12 col-md-12 blog p-0">
      <div class="col-12 p-0">
        <app-search-input class="pt-5" />
      </div>
      <div class="row pb-10">
        <div
          v-for="article of articles"
          :key="article.slug"
          class="col-12 col-sm-12 col-md-6 col-lg-4 pt-5 pb-5 articles-animate"
        >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="cp mb-20 link"
            tag="a"
          >
            <div class="w-100">
              <h2 class="app-title fs-16 font-weight-normal pt-10">
                {{ article.title }}
              </h2>
              <div class="app-subtitle fs-11">
                <span class="lnr lnr-clock pr-5"></span
                >{{ formatDate(article.date) }}
              </div>
              <div class="text-muted fs-14 fa-15 pt-10">
                {{ article.description }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="col-12 col-sm-12 col-md-12 info">
      <div class="row pb-10">
        <h1 class="fs-18 pt-20 app-title text-left">I'm Pooya Golchian</h1>
        <ul class="col-12 fs-16 app-subtitle font-weight-light">
          <li>Senior Frontend Developer (React.js/Vue.js)</li>
          <li class="fs-14">Code, Coffee, Crypto</li>
        </ul>
        <p class="fs-14 app-title pt-10 m-0">
          I have worked as a front-end developer since 2012. I like to transfer
          the design to code. Web application architecture, UX, and front-end
          are my favorite things that I enjoyed in my work career. Moreover,
          problem-solving, communication, and leadership that other skills I
          have been developing in five recent years. I have worked with
          different startup and organization software engineering companies in
          Iran. Close communication with the product team and working with scrum
          methodology during these years made me agile and flexible for the
          different circumstances that every application would be in it. In
          addition, I have worked with DevOps tools. I'm an engineer at my
          heart. On top of that, I'd love javascript to the bone. I like to be
          in an international career to improve my work environment and expand
          my knowledge horizon.
        </p>
      </div>
    </div>

    <div class="col col-12 p-0">
      <div class="divider"></div>
      <div class="font-weight-normal app-title pt-10 fs-20 pb-10">
        Open-Source project
      </div>
      <ul class="project-list">
        <li>
          <a
            class="app-title d-flex flex-row pt-2 pb-2 fs-14"
            href="https://github.com/pooyagolchian/react-weather-app"
            target="_blank"
            >Weather application with React.js/Typescript</a
          >
        </li>
        <li>
          <a
            class="app-title d-flex flex-row pt-2 pb-2 fs-14"
            href="https://github.com/pooyagolchian/dogstagram"
            target="_blank"
            >Dogstagram(Dogs Instagram) - React.js/redux-tool-kit/Typescript</a
          >
        </li>
        <li>
          <a
            class="app-title d-flex flex-row pt-2 pb-2 fs-14"
            href="https://www.npmjs.com/package/vue-multiple-themes"
            target="_blank"
            >VUE.js multiple theme color NPM package</a
          >
        </li>
        <li>
          <a
            class="app-title d-flex flex-row pt-2 pb-2 fs-14"
            href="https://www.npmjs.com/package/vue-js-star-rating"
            target="_blank"
            >VUE.js icon rating NPM package</a
          >
        </li>
        <li>
          <a
            class="app-title d-flex flex-row pt-2 pb-2 fs-14"
            href="https://github.com/pooyagolchian/pooyagolchian.github.io"
            target="_blank"
            >NUXT.js SSG blog</a
          >
        </li>
        <li>
          <a
            class="app-title d-flex flex-row pt-2 pb-2 fs-14"
            href="https://github.com/pooyagolchian/memegen"
            target="_blank"
            >Meme generator React.js application</a
          >
        </li>
        <li>
          <a
            class="app-title d-flex flex-row pt-2 pb-2 fs-14"
            href="https://www.npmjs.com/package/scss-helper"
            target="_blank"
          >
            Mini UI SCSS helper, Grid, Typography, etc.
          </a>
        </li>
        <li>
          <a
            class="app-title d-flex flex-row pt-2 pb-2 fs-14"
            href="https://www.npmjs.com/package/vuetify-form-base-ssr"
            target="_blank"
          >
            Customize Vuetify.js form builder for Nuxt.js for panel.azkivam.com
          </a>
        </li>
        <li>
          <a
            class="app-title d-flex flex-row pt-2 pb-2 fs-14"
            href="https://github.com/pooyagolchian/docker-and-kubernetes-tutorial"
            target="_blank"
          >
            Docker, Kubernetes | tutorial and cheatsheet
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .sortBy('date', 'desc')
      .limit(6)
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

  mounted() {
    gsap.from('.articles-animate', {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: gsap.easeInOut,
    });
    gsap.from('.qoute-animate', {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: gsap.ease,
    });
  },
};
</script>
