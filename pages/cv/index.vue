<template>
  <div class='col-12'>
    <div class='cv-container'>
      <div class='col-12 header-main p-0'>
        <div class='font-weight-light fs-45'>
          <nuxt-link class='header-main__title' to='/'>
            <span class='text-black'> Pooya </span>
            <span class='font-weight-lighter text-muted'> Golchian </span>
          </nuxt-link>
        </div>
        <div class='text-muted font-weight-light fs-20'>
          Senior Frontend Developer
        </div>
      </div>

      <div class='row col col-12 flex-column'>
        <ul class='row fs-16 pt-20 pb-20 info-list'>
          <li class='col-auto p-0 pr-10'>
            <span class='text-muted'>
              <i class='fs-20 lnr lnr-smartphone'></i>
            </span>
            +989306016111
          </li>
          <li class='col-auto p-0 pr-10'>
            <span class='text-muted'>
              <i class='fs-20 lnr lnr-link'></i>
            </span>

            <nuxt-link to='/'> pooyagolchian.com</nuxt-link>
          </li>
          <li class='col-auto p-0 pr-10'>
            <span class='text-muted'>
              <i class='fs-20 lnr lnr-map-marker'></i>
            </span>
            Dubai,United Arab Emirates | Iran,Tehran
          </li>
          <li class='col-auto p-0 pr-10'>
            <span class='text-muted'>
              <i class='fs-20 lnr lnr-envelope'></i>
            </span>
            pooya.golchian@gmail.com
          </li>
          <li class='col-auto p-0 pr-10'>
            <span class='text-muted'>
              <i class='fs-20 lnr lnr-link'></i>
            </span>
            <a href='https://github.com/pooyagolchian' target='_blank'
            >Github</a
            >
          </li>
          <li class='col-auto p-0 pr-10'>
            <span class='text-muted'
            ><span class='text-muted'>
                <i class='fs-20 lnr lnr-link'></i> </span
            ></span>
            <a href='https://www.linkedin.com/in/pooyagolchian/' target='_blank'
            >Linkedin</a
            >
          </li>
        </ul>
      </div>
      <div class='row pt-10 justify-content-between'>
        <div class='col col-12 col-sm-12 col-md-8 col-print-8'>
          <div class='cv-header'>EXPERIENCE</div>
          <ul class='exp-list'>
            <li v-for='(item, index) in expItem' :key='index' class='pt-10'>
              <div class='row justify-content-between'>
                <div class='col col-auto font-weight-light fs-22'>
                  {{ item.jobTitle }}
                </div>
                <div class='col-auto fs-15 text-muted font-weight-lighter'>
                  {{ item.location }}
                </div>
              </div>

              <div class='row justify-content-between fs-11 text-muted'>
                <div class='text-muted fs-16 font-weight-lighter col-auto'>
                  {{ item.company }}
                </div>
                <div class='col-auto fs-14'>{{ item.date }}</div>
              </div>
              <ul class='company-layout'>
                <li v-for='(achiveItem, index) in item.jobItem' :key='index'>
                  {{ achiveItem }}
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class='col col-12 col-sm-12 col-md-4 col-print-4'>
          <div class='cv-header'>LANGUAGES</div>
          <ul class='cv-item'>
            <li class='pt-10 fs-15'>
              English <span class='text-muted'>(Fluent)</span>
            </li>
            <li class='pb-5 fs-15'>
              Persian <span class='text-muted'>(Native)</span>
            </li>
          </ul>

          <div class='cv-header'>SKILLS</div>
          <div class='pt-10 pb-10'>
            <ul class='skills row'>
              <li v-for='(item, index) in skills' :key='index' class='col-auto'>
                {{ item }}
              </li>
            </ul>
          </div>

          <div class='cv-header'>EDUCATION</div>
          <div v-for='(item, index) in education' :key='index' class='pt-10'>
            <div class='font-weight-light fs-15'>{{ item.degree }}</div>
            <div class='text-muted font-weight-lighter'>
              {{ item.university }}
            </div>
            <div class='row fs-14 text-muted'>
              <div class='col-auto'>{{ item.date }}</div>
              <div class='col-auto'>{{ item.location }}</div>
            </div>
          </div>

          <div class='cv-header pt-10'>OPENSOURCE</div>
          <div v-for='(item, index) in opensource' :key='index' class='pt-7'>
            <div class='fs-14 font-weight-light'>
              <a :href='item.link' target='_blank'>
                {{ item.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'resume',
  head() {
    return {
      title: 'CV',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Pooya Golchian CV'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Pooya Golchian CV'
        }
      ]
    };
  },
  data() {
    return {
      skills: [
        'React.js',
        'Redux',
        'React Query',
        'React Hook',
        'Vue.js',
        'Nuxt.js',
        'GraphQL',
        'AXIOS',
        'Rest API',
        'Gatsby',
        'Next.js',
        'Javascript',
        'JQuery',
        'Typescript',
        'Webpack',
        'Headless CMS',
        'JAM stack',
        'Scss',
        'Docker',
        'Git',
        'Cypress',
        'Jest',
        'Enyzme',
        'Figma'
      ],
      opensource: [
        {
          title: 'VUE.js multiple theme color NPM package',
          link: 'https://www.npmjs.com/package/vue-multiple-themes'
        },
        {
          title: 'VUE.js icon rating NPM package',
          link: 'https://www.npmjs.com/package/vue-js-star-rating'
        },
        {
          title: 'NUXT.js SSG blog',
          link: 'https://github.com/pooyagolchian/pooyagolchian.github.io'
        },
        {
          title: 'Meme generator React.js application',
          link: 'https://github.com/pooyagolchian/memegen'
        },

        {
          title: 'Mini UI SCSS helper, Grid, Typography, etc.',
          link: 'https://www.npmjs.com/package/scss-helper'
        },
        {
          title:
            'Customize Vuetify.js form builder for Nuxt.js for panel.azkivam.com',
          link: 'https://www.npmjs.com/package/vuetify-form-base-ssr'
        },
        {
          title: 'Docker, Kubernetes | tutorial and cheatsheet',
          link: 'https://github.com/pooyagolchian/docker-and-kubernetes-tutorial'
        }
      ],
      education: [
        {
          degree: 'Mastr of Softwar Engineering (M.SE)',
          university: 'Islamic Azad University, Karaj',
          date: '2014 - 2017',
          location: 'Iran, Karaj'
        },
        {
          degree: 'Bachelor of Software Engineering (B.SE)',
          university: 'Islamic Azad University, Karaj',
          date: '2009 - 2013',
          location: 'Iran, Karaj'
        }
      ],
      expItem: [
        {
          jobTitle: 'Senior Frontend Developer | React.js/Vue.js/Nuxt.js',
          company: 'Afra Sarmaye Digital Software Engineering Company',
          date: '5/2021 - NOW',
          location: 'Iran, Tehran',
          jobItem: [
            'Developed three admin panels with React.js and Redux and use best practice development workflow with functional programming.',
            'Implemented E2E test with Cypress. Developed Unit test and Integration test in edge cases for business flow.',
            'Implemented an admin panel for customers and CRM to improve automation of sales and document management.',
            'Utilized Nuxt.js for SSR rendering. Improved 40% of extra code with purge libraries.',
            'Developed NPM package for generating forms that provide from BPMN from the database.',
            'Dockerized all applications that we developed with Nuxt.js',
            'azkivam.com | panel.azkivam.com'
          ]
        },

        {
          jobTitle: 'Senior Frontend Developer | React.js/Vue.js',
          company:
            'Abr Dade Fanavari Haftsin Software and Telecom Engineering Company',
          date: '11/2019 - 5/2021',
          location: 'Iran, Tehran',
          jobItem: [
            'Designed and implemented flight and hotel booking front-end structure for reservation system.',
            'Developed React.js application with Electron.js for some business issues and maintained React.js application.',
            'Developed reusable components for Vue.js and make private package repositories for components that they used in different projects.',
            'Developed 10 Admin panel and back-office website with ant-design, Element UI, Vuetify.js, MUI',
            'Built automatic backup with S3, Bash, Linux systemd',
            'Dockerized all applications and configure Github Action and use ECS',
            'yiata.com | mobile.get3000.com | get3000.com'
          ]
        },
        {
          jobTitle: 'Senior Frontend Developer | React.js/Next.js',
          company: 'Iman Sarmaye Noavaran Iranian Software Engineering Company',
          date: '06/2019 - 11/2019',
          location: 'Iran, Tehran',
          jobItem: [
            'Developed React.js application with one million active users in insurance technology.',
            'Developed custom React.js component for Admin panel with an ANT design framework',
            'Developed 2 Admin panel and back-office website with an ANT design',
            'Developed a website with React.js and Next.js for SSR rendering',
            'azki.com'
          ]
        },
        {
          jobTitle: 'Frontend Developer | React.js',
          company: 'ENTEKHAB Investment Development Group',
          date: '09/2017 - 06/2019',
          location: 'Iran, Tehran',
          jobItem: [
            'Developed custom React.js component for local TV application and wrap with Electron.js',
            'Developed an enterprise contact application that all departments have used them',
            'Developed  Admin panel and back-office website with ant-design and React.js'
          ]
        },

        {
          jobTitle: 'Frontend Developer | Drupal Developer',
          company: 'Dadeban Samaneh Software Engineering Company',
          date: '09/2015 - 09/2017',
          location: 'Iran, Tehran',
          jobItem: [
            'Redesigned & built new Axprint.com, OO SCSS & reduce the size of CSS to 50K, and built a Modular page',
            'Built fully customizable modern blog and website theme for Drupal7',
            'Built marketing landing pages A to Z like Referral, etc. Analytics and help to selling team',
            'Built automated tasks for printer and server task batch script for print workflow JDF (Job Definition Format)',
            'Experience with pure javascript (OOP, Modules, ES6) and build reusable modules',
            'axprint.com | blog.axprint.com | pamp.com'
          ]
        },

        {
          jobTitle: 'Drupal Developer',
          company: 'Rayvarz Software Engineering Company',
          date: '01/2014 - 08/2015',
          location: 'Iran, Tehran',
          jobItem: [
            'Built Drupal 7 portal & website for banking and government customer',
            'Built Mobile-first and responsive html5 website and landing pages',
            'Built headless with Service modules in drupal 7',
            'rayvarz.com | bpms.rayvaz.com'
          ]
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>

* {
  cursor: default !important;
}

body {
  overflow: hidden;
}

a {
  color: black !important;

  &:hover {
    text-decoration: none !important;
    color: black !important;
  }
}

.header-main {
  text-align: left;

  &__title {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
}

@media print {
  .cv-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  //@page {
  //  margin-top: 20px;
  //  margin-bottom: 100px;
  //}
  //body {
  //  padding-top: 50px;
  //  padding-bottom: 50px;
  //}
}

.cv-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.cv-header {
  border-bottom: 1px solid black;
  font-weight: normal;
  font-size: 25px;
}

.info-list {
  padding: 0;
  margin: 0;

  li {
    margin: 0;
    list-style: none;
    padding-bottom: 7px;
  }
}

.cv-item {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    padding-bottom: 3px;
  }
}

.exp-list {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    padding-bottom: 3px;
    border-bottom: 1px #ddd dotted;

    &:last-child {
      border-bottom: none;
    }
  }
}

.company-layout {
  padding: 5px 0 5px 15px;
  margin: 0;

  li {
    font-size: 15px;
    border-bottom: none;
    list-style: square;
    margin-left: 16px;
  }
}

.skills {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
    border-bottom: 1px dotted #333;
    padding: 2px 2px 0 2px;
    margin: 0 9px 6px 0px;
    font-size: 16px;
  }
}
</style>
