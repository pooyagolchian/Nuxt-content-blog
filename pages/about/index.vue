<template>
  <div class="col-12 about">
    <div class="container">
      <div class="row pb-30">
        <div
          class="
            col-12 col-sm-12
            justify-content-center
            text-left
            d-flex
            flex-column
          "
        >
          <h1 class="fs-18 pt-20 app-title text-left font-weight-bold pt-50">
            I'm Pooya Golchian
          </h1>
          <ul class="pb-20 app-subtitle">
            <li>Senior Frontend Developer (Vue.js/React.js)</li>
            <li>Code, Coffee, Crypto</li>
          </ul>
          <p class="fs-14 app-title">
            I was born in Tehran in 1990. When my father bought a computer for
            our home, I fell in love with it. I start to learned Linux with
            Ubuntu and Fedora when I was 16 years old. Now, I have a master's
            degree in computer engineering. I have 10 years' experience in web
            development. I have been using Javascript for web development. I
            have 4 years of experience in Vue.js and, Nuxt.js. I worked with
            React.js too. I have developed lots of web applications with
            high-tech frameworks. I have experience with PHP, WordPress, Drupal,
            headless CMS, and JAM STACK architecture. For more information about
            my professional full-time work, please see my
            <nuxt-link to="/cv">CV</nuxt-link>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About Pooya Golchian',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'About Pooya Golchian',
        },
      ],
    };
  },
};
</script>
