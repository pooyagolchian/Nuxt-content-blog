<template>
  <div class="col-12 p-0 about">
    <div class="container">
      <div class="row pb-30">
        <div
          class="col-12 col-sm-12 justify-content-center text-left d-flex flex-column p-0"
        >
          <h1 class="fs-18 app-title text-left font-weight-bold pt-10">
            I'm Pooya Golchian
          </h1>
          <ul class="pb-10 app-subtitle">
            <li>Senior Frontend Developer (React.js/Vue.js)</li>
            <li>Code, Coffee, Crypto</li>
          </ul>
          <p class="fs-14 app-title">
            I have worked as a front-end developer since 2012. I like to
            transfer the design to code. Web application architecture, UX, and
            front-end are my favorite things that I enjoyed in my work career.
            Moreover, problem-solving, communication, and leadership that other
            skills I have been developing in five recent years. I have worked
            with different startup and organization software engineering
            companies in Iran. Close communication with the product team and
            working with scrum methodology during these years made me agile and
            flexible for the different circumstances that every application
            would be in it. In addition, I have worked with DevOps tools. I'm an
            engineer at my heart. On top of that, I'd love javascript to the
            bone. I like to be in an international career to improve my work
            environment and expand my knowledge horizon.
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
