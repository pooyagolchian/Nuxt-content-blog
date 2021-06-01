<template>
  <div class="col-12">
    <div class="cv-container pt-20 pb-20">
      <div class="row flex-column">
        <div class="font-weight-bolder fs-35 text-uppercase">
          Pooya Golchian
        </div>
        <div class="text-muted font-weight-bolder fs-15">Frontend Engineer</div>
        <ul class="row fs-16 pt-15 info-list">
          <li class="col-auto p-0 pr-10">
            <span class="text-muted">
              <fa :icon="['fas', 'mobile-alt']"
            /></span>
            +989306016111
          </li>
          <li class="col-auto p-0 pr-10">
            <span class="text-muted"> <fa :icon="['fas', 'globe']" /></span>
            <a target="_blank" href="https://pooyagolchian.ir">
              pooyagolchian.ir
            </a>
          </li>
          <li class="col-auto p-0 pr-10">
            <span class="text-muted">
              <fa :icon="['fas', 'map-marker-alt']" />
            </span>
            Iran,Tehran
          </li>
          <li class="col-auto p-0 pr-10">
            <span class="text-muted"><fa :icon="['fas', 'inbox']" /></span>
            pooya.golchian@gmail.com
          </li>
          <li class="col-auto p-0 pr-10">
            <span class="text-muted"><fa :icon="['fab', 'github']" /></span>
            <a
              href="https://github.com/pooyagolchian"
              target="_blank"
              rel="noopener noreferrer"
              >Github</a
            >
          </li>
          <li class="col-auto p-0 pr-10">
            <span class="text-muted"
              ><span class="text-muted"><fa :icon="['fab', 'linkedin']" /></span
            ></span>
            <a
              href="https://www.linkedin.com/in/pooyagolchian/"
              target="_blank"
              rel="noopener noreferrer"
              >Linkedin</a
            >
          </li>
        </ul>
      </div>

      <div class="row pt-10">
        <div class="cv-header col-12 p-0">About</div>
        <p class="pt-20 text-justify">
          I am a frontend developer who curious about clean code. I am so
          enthusiastic about javascript and frontend technology. I have good
          knowledge of Linux and Operating systems. One of my hubbies is
          Opensource contributing and use them in the application. I love Vue.js
          and React.js. I worked as a Vue.js developer for 3 years and a
          React.js developer for 1 year. I learned a React.js new feature like
          React Hook, etc. I want to work with a team that beliefs in clean code
          and test. I am a fast learner and curious about high-tech stuff. I've
          been worked as a web developer since 2012. My first struggle in this
          field is related to Drupal.
        </p>
      </div>

      <div class="row pt-10 justify-content-between">
        <div class="col-8 pl-0">
          <div class="cv-header">EXPERIENCE</div>
          <ul class="exp-list">
            <li v-for="(item, index) in expItem" :key="index" class="pt-10">
              <div class="font-weight-bolder fs-20">{{ item.jobTitle }}</div>
              <div class="text-muted fs-16 font-weight-bold">
                {{ item.company }}
              </div>
              <div class="row fs-14 text-muted">
                <div class="col-auto">{{ item.date }}</div>
                <div class="col-auto">{{ item.location }}</div>
              </div>
              <ul class="company-layout">
                <li v-for="(achiveItem, index) in item.jobItem" :key="index">
                  {{ achiveItem }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col-4 pr-0 flex-column">
          <div class="col-12 p-0">
            <div class="cv-header">LANGUAGES</div>
            <ul class="cv-item">
              <li class="pt-10 pb-10 fs-15">
                English <span class="text-muted">(Intermediate)</span>
              </li>
            </ul>
          </div>

          <div class="col-12 p-0 pt-10">
            <div class="cv-header">SKILLS</div>
            <div class="pt-10 pb-10">
              <ul class="skills row">
                <li
                  class="col-auto"
                  v-for="(item, index) in skills"
                  :key="index"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <div class="col-12 p-0">
            <div class="cv-header">EDUCATION</div>
            <div v-for="(item, index) in education" :key="index" class="pt-10">
              <div class="font-weight-bolder fs-15">{{ item.degree }}</div>
              <div class="text-muted fs-12 font-weight-bold">
                {{ item.university }}
              </div>
              <div class="row fs-12 text-muted">
                <div class="col-auto">{{ item.date }}</div>
                <div class="col-auto">{{ item.location }}</div>
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
  data() {
    return {
      skills: [
        'Vue.js',
        'Nuxt.js',
        'Javascript',
        'Typescript',
        'React',
        'Redux',
        'Git',
        'Git-flow',
        'Git-hook',
        'Linux/windows/macOS',
        'Shell script',
        'Heroku',
        'AWS',
        'AWS EC2',
        'AWS ECS',
        'Github Action',
        'Express.js',
        'MongoDB',
        'ArangoDB',
        'Wireguard',
        'TCP/IP',
        'LPIC1,2',
        'Docker',
        'Kubernetes',
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
          jobTitle: 'DevOps Engineer',
          company: 'haftcin.com',
          date: '3/2021 - 5/2021',
          location: 'Iran,Tehran',
          jobItem: [
            'Built automatic backup with S3, Bash, Linux systemd',
            'Worked with Arango DB, Mongo DB (Backup, Restore, Maintenance)',
            'Dockerized all applications and configure Github Action and use ECS.',
            'Built private DNS solution with Wireguard, Shadowsocks R',
            'Configure Ansible for EC2',
          ],
        },

        {
          jobTitle: 'Frontend Developer',
          company: 'haftcin.com',
          date: '11/2019 - 3/2021',
          location: 'Iran,Tehran',
          jobItem: [
            'Developed custom Vue.js component',
            'Developed custom grid system with Flex-Box and CSS-Grid',
            'Developed 10 Admin panel and back-office website with ant-design, Element UI, Vuetify.js',
            'Experience with Express.js',
            'Experience with Typescript.',
            'Developed best practice design patterns like Factory and Pub/Sub.',
            'Customized Webpack with dotNet core versions 2 and 3.',
          ],
        },
        {
          jobTitle: 'Frontend Developer',
          company: 'azki.com',
          date: '06/2019 - 11/2019',
          location: 'Iran,Tehran',
          jobItem: [
            'Developed custom Vue.js component for Admin panel with ANT design framework',
            'Developed custom mini UI framework with bootstrap4',
            'Developed 2 Admin panel and back-office website with ANT design',
            'Developed and fix in open-source projects like ant-design (Date picker filter in data table)',
            'Developed a website with the Laravel Blade template engine and JQuery. (ES6, Modules, Webpack, LARAVEL Mix)',
          ],
        },

        {
          jobTitle: ' DevOps Engineer',
          company: 'ENTEKHAB Investment Development Group',
          date: '09/2018 - 06/2019',
          location: 'Iran,Tehran',
          jobItem: [
            'Configured Direct Admin, Gitlab CI, Ansible, Rabbitmq, Jenkins ',
            'Configured Grafana, Zabbix',
          ],
        },
        {
          jobTitle: 'Frontend Developer',
          company: 'ENTEKHAB Investment Development Group',
          date: '09/2017 - 09/2018',
          location: 'Iran,Tehran',
          jobItem: [
            'Developed custom React.js component for local TV application and wrap with Electron.js',
            'Developed a contact application with react native.',
            'Customized Bootstap4 Sass for projects',
            'Developed two Admin panel and back-office website with ant-design',
            'Worked with Twig, Symfony4',
            'Developed Drupal-based newsroom and portal for some company of Entekhab holding',
          ],
        },

        {
          jobTitle: 'Web Developer',
          company: 'axprint.com',
          date: '09/2015 - 09/2017',
          location: 'Iran,Tehran',
          jobItem: [
            'Redesigned & built new Axprint.com, OO SCSS & reduce the size of CSS to 50K, and built a Modular page.',
            'Built fully customizable modern blog and website theme for Drupal7.',
            'Built marketing landing pages A to Z like Referral, etc. Analytics and help to selling team.',
            'Built automated tasks for printer and server task batch script for print workflow job definition format (JDF).',
            'Experience with pure javascript (OOP, Modules, ES6) and build reusable modules.',
            'Developed customer grid system with the Bourbon preprocessor Sass framework.',
          ],
        },

        {
          jobTitle: 'Drupal Developer',
          company: 'rayvarz.com',
          date: '01/2014 - 08/2015',
          location: 'Iran,Tehran',
          jobItem: [
            'Built Drupal7 portal & website for banking and government customer.',
            'Designed pixel-perfect PSD, Logo design, Booklet design with Adobe InDesign.',
            'Built Mobile-first and responsive html5 website and landing pages.',
            'Customize Boostrap V2 with less.',
            'Developed Drupal theme with bootstrap3.',
            'Developed custom Drupal modules.',
            'Built headless with Service modules in drupal7.',
            'Migrated all projects Drupal 6 to Drupal 7.',
            'Worked with theme building.',
            'Worked with Jquery and pure javascript.',
            'Developed an admin panel with Jquery and Drupal7.',
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media print {
  .cv-container {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
  }
  @page {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  body {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
.cv-container {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
}
.cv-header {
  border-bottom: 3px solid black;
  font-weight: bolder;
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
    border-bottom: 1px solid #333;
    padding: 2px 2px 0 2px;
    margin: 0 9px 6px 0px;
    font-size: 14px;
  }
}
</style>
