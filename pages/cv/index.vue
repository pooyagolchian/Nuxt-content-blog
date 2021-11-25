<template>
  <div class='col-12'>
    <div class='cv-container'>
      <div class='row col col-12 flex-column'>
        <div class='font-weight-light fs-45 text-uppercase'>
          <nuxt-link to='/'> Pooya Golchian</nuxt-link>
        </div>
        <div class='text-muted font-weight-light fs-20'>
          Frontend Developer
        </div>
        <ul class='row fs-16 pt-15 info-list'>
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
            Iran,Tehran
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
            <a
              href='https://github.com/pooyagolchian'
              target='_blank'

            >Github</a
            >
          </li>
          <li class='col-auto p-0 pr-10'>
            <span class='text-muted'
            ><span class='text-muted'>
               <i class='fs-20 lnr lnr-link'></i>
            </span
            ></span>
            <a
              href='https://www.linkedin.com/in/pooyagolchian/'
              target='_blank'

            >Linkedin</a
            >
          </li>
        </ul>
      </div>
      <div class='row pt-10 justify-content-between'>
        <div class='col col-12 col-sm-12 col-md-12 col-lg-8 col-print-8'>
          <div class='cv-header'>EXPERIENCE</div>
          <ul class='exp-list'>
            <li v-for='(item, index) in expItem' :key='index' class='pt-10'>
              <div class='font-weight-light fs-20'>{{ item.jobTitle }}</div>
              <div class='text-muted fs-16 font-weight-lighter'>
                {{ item.company }}
              </div>
              <div class='row fs-14 text-muted'>
                <div class='col-auto'>{{ item.date }}</div>
                <div class='col-auto'>{{ item.location }}</div>
              </div>
              <ul class='company-layout'>
                <li v-for='(achiveItem, index) in item.jobItem' :key='index'>
                  {{ achiveItem }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class='col col-12 col-sm-12 col-md-12 col-lg-4 col-print-4'>
          <div class='col-12'>
            <div class='cv-header'>LANGUAGES</div>
            <ul class='cv-item'>
              <li class='pt-10 fs-15'>
                English <span class='text-muted fs-12'>(Intermediate)</span>
              </li>
              <li class='pb-5 fs-15'>
                Persian <span class='text-muted fs-12'>(Native)</span>
              </li>
            </ul>
          </div>

          <div class='col-12 pt-10'>
            <div class='cv-header'>SKILLS</div>
            <div class='pt-10 pb-10'>
              <ul class='skills row'>
                <li
                  v-for='(item, index) in skills'
                  :key='index'
                  class='col-auto'
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <div class='col-12'>
            <div class='cv-header'>EDUCATION</div>
            <div v-for='(item, index) in education' :key='index' class='pt-10'>
              <div class='font-weight-light fs-15'>{{ item.degree }}</div>
              <div class='text-muted fs-12 font-weight-lighter'>
                {{ item.university }}
              </div>
              <div class='row fs-12 text-muted'>
                <div class='col-auto'>{{ item.date }}</div>
                <div class='col-auto'>{{ item.location }}</div>
              </div>
            </div>
          </div>

          <div class='col-12 mt-5'>
            <div class='cv-header'>OPENSOURCE</div>
            <div v-for='(item, index) in opensource' :key='index' class='pt-10'>
              <div class='fs-15'>
                <a :href='item.link' target='_blank'>
                  {{ item.title }}
                </a>
              </div>

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
          content: 'Pooya Golchian CV',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Pooya Golchian CV',
        },
      ],
    };
  },
  data() {
    return {
      skills: [
        'Vue.js',
        'Nuxt.js',
        'Javascript',
        'Typescript',
        'React',
        'Redux',
        'Headless CMS',
        'JAM stack'
      ],

      opensource: [
        {
          title: 'VUE.js multiple theme color NPM package',
          link: 'https://www.npmjs.com/package/vue-multiple-themes',
        },
        {
          title: 'VUE.js icon rating NPM package',
          link: 'https://www.npmjs.com/package/vue-js-star-rating',
        },
        {
          title: 'NUXT.js SSG blog',
          link: 'https://github.com/pooyagolchian/pooyagolchian.github.io',
        },
        {
          title: 'Meme generator React.js application',
          link: 'https://github.com/pooyagolchian/memegen',
        },

        {
          title: 'Mini UI SCSS helper, Grid, Typography, etc.',
          link: 'https://www.npmjs.com/package/scss-helper',
        },
        {
          title:
            'Customize Vuetify.js form builder for Nuxt.js for panel.azkivam.com',
          link: 'https://www.npmjs.com/package/vuetify-form-base-ssr',
        },
        {
          title: 'Docker, Kubernetes | tutorial and cheatsheet',
          link: 'https://github.com/pooyagolchian/docker-and-kubernetes-tutorial',
        },
      ],

      education: [
        {
          degree: 'Mastr of Softwar Engineering (M.SE)',
          university: 'Islamic Azad University, Karaj',
          date: '2014 - 2017',
          location: 'Iran, Karaj',
        },
        {
          degree: 'Bachelor of Software Engineering (B.SE)',
          university: 'Islamic Azad University, Karaj',
          date: '2009 - 2013',
          location: 'Iran, Karaj',
        },
      ],
      expItem: [
        {
          jobTitle: 'Senior Frontend Developer',
          company: 'Afra Sarmaye Digital Software Engineering Company',
          date: '5/2021 - NOW',
          location: 'Iran,Tehran',
          jobItem: [
            'Build panel.azkivam.com with Nuxt.js',
            'Build azkivam.com with Nuxt.js',
            'Build dynamic form builder for Cummunda BPMS',
            'Build reusable components for panel and website',
            'azkivam.com | panel.azkivam.com',
          ],
        },

        {
          jobTitle: 'Senior Frontend Developer',
          company: 'Abr Dade Fanavari Haftsin Software and Telecom Engineering Company',
          date: '11/2019 - 5/2021',
          location: 'Iran,Tehran',
          jobItem: [
            'Developed custom Vue.js component',
            'Developed custom grid system with Flex-Box and CSS-Grid',
            'Developed 10 Admin panel and back-office website with ant-design, Element UI, Vuetify.js',
            'Experience with Express.js',
            'Experience with Typescript',
            'Developed best practice design patterns like Factory and Pub/Sub',
            'Customized Webpack with dotNet core versions 2 and 3',
            'Built automatic backup with S3, Bash, Linux systemd',
            'Worked with Arango DB, Mongo DB (Backup, Restore, Maintenance)',
            'Dockerized all applications and configure Github Action and use ECS',
            'Built private DNS solution with Wireguard, Shadowsocks R',
            'Configure Ansible for EC2',
            'Built poor-mans-VPN',
            'yiata.com | mobile.get3000.com | get3000.com',
          ],
        },
        {
          jobTitle: 'Senior Frontend Developer',
          company: 'Iman Sarmaye Noavaran Iranian Software Engineering Company',
          date: '06/2019 - 11/2019',
          location: 'Iran,Tehran',
          jobItem: [
            'Developed custom Vue.js component for Admin panel with ANT design framework',
            'Developed custom mini UI framework with bootstrap4',
            'Developed 2 Admin panel and back-office website with ANT design',
            'Developed and fix in open-source projects like ant-design (Date picker filter in data table)',
            'Developed a website with the Laravel Blade template engine and JQuery. (ES6, Modules, Webpack, LARAVEL Mix)',
            'azki.com',
          ],
        },
        {
          jobTitle: 'Frontend Developer',
          company: 'ENTEKHAB Investment Development Group',
          date: '09/2017 - 06/2019',
          location: 'Iran,Tehran',
          jobItem: [
            'Developed custom React.js component for local TV application and wrap with Electron.js',
            'Developed a contact application with react native',
            'Customized Bootstap4 Sass for projects',
            'Developed two Admin panel and back-office website with ant-design',
            'Worked with Twig, Symfony4',
            'Developed Drupal-based newsroom and portal for some company of Entekhab holding',
            'Configured Direct Admin, Gitlab CI, Ansible, Rabbitmq, Jenkins ',
            'Configured Grafana, Zabbix',
          ],
        },

        {
          jobTitle: 'Frontend Developer | Drupal Developer',
          company: 'Dadeban Samaneh Software Engineering Company',
          date: '09/2015 - 09/2017',
          location: 'Iran,Tehran',
          jobItem: [
            'Redesigned & built new Axprint.com, OO SCSS & reduce the size of CSS to 50K, and built a Modular page',
            'Built fully customizable modern blog and website theme for Drupal7',
            'Built marketing landing pages A to Z like Referral, etc. Analytics and help to selling team',
            'Built automated tasks for printer and server task batch script for print workflow JDF (Job Definition Format)',
            'Experience with pure javascript (OOP, Modules, ES6) and build reusable modules',
            'Developed customer grid system with the Bourbon preprocessor Sass framework',
            'axprint.com | blog.axprint.com | pamp.com',
          ],
        },

        {
          jobTitle: 'Drupal Developer',
          company: 'Rayvarz Software Engineering Company',
          date: '01/2014 - 08/2015',
          location: 'Iran,Tehran',
          jobItem: [
            'Built Drupal 7 portal & website for banking and government customer',
            'Designed pixel-perfect PSD, Logo design, Booklet design with Adobe InDesign',
            'Built Mobile-first and responsive html5 website and landing pages',
            'Customized Boostrap2 with less',
            'Developed Drupal theme with bootstrap3',
            'Developed custom Drupal modules',
            'Built headless with Service modules in drupal 7',
            'Migrated all projects Drupal 6 to Drupal 7',
            'Worked with theme building',
            'Worked with Jquery and pure javascript',
            'Developed an admin panel with Jquery and Drupal 7',
            'rayvarz.com | bpms.rayvaz.com',
          ],
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
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

@media print {
  .cv-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  @page {
    margin-top: 20px;
    margin-bottom: 100px;
  }
  body {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

.cv-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.cv-header {
  border-bottom: 1px solid black;
  font-weight: lighter;
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
    font-size: 14px;
    border-bottom: none;
    list-style: square;
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
    font-size: 14px;
  }
}
</style>
