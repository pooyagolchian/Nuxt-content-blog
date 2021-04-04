<template>
  <div class="col-12">
    <div class="cv-container pt-50 pb-50">
      <div class="row flex-column">
        <div class="font-weight-bolder fs-35 text-uppercase">
          Pooya Golchian
        </div>
        <div class="text-muted font-weight-bolder fs-15">
          Software Engineer [Web & DevOps Engineer]
        </div>
        <ul class="row fs-16 pt-15 info-list">
          <li class="col-auto p-0 pr-10">
            <span class="text-muted">
              <fa :icon="['fas', 'mobile-alt']"
            /></span>
            +989306016111
          </li>
          <li class="col-auto p-0 pr-10">
            <span class="text-muted"> <fa :icon="['fas', 'globe']" /></span>
            <a target="blank" href="https://pooyagolchian.ir">
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
            pooyagolchian
          </li>
          <li class="col-auto p-0 pr-10">
            <span class="text-muted"
              ><span class="text-muted"><fa :icon="['fab', 'linkedin']" /></span
            ></span>
            pooyagolchian
          </li>
        </ul>
      </div>
      <div class="row pt-20 justify-content-between">
        <div class="col-9 pl-0">
          <div class="cv-header">EXPERIENCE</div>
          <ul class="exp-list">
            <li v-for="(item, index) in expItem" :key="index" class="pt-10">
              <div class="font-weight-bolder fs-20">{{ item.jobTitle }}</div>
              <div class="text-muted fs-14 font-weight-bold">
                {{ item.company }}
              </div>
              <div class="row fs-12 text-muted">
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
        <div class="col-3 pr-0 flex-column">
          <div class="col-12 p-0">
            <div class="cv-header">LANGUAGES</div>
            <ul class="cv-item">
              <li class="pt-10 pb-10 fs-13">
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
        'Next.js',
        'Git',
        'Linux',
        'Shell script',
        'AWS',
        'Github Action',
        'Express.js',
        'MongoDB',
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
          jobTitle: 'Frontend Developer | DevOps Engineer',
          company: 'haftcin.com',
          date: '11/2019 - Ongoing',
          location: 'Iran,Tehran',
          jobItem: [
            'Developing custom Vue.js component.',
            'Developing a custom grid system with Flex-Box and CSS-Grid',
            'Developing 10 Admin panel and back-office website with ant-design, Element UI, Vutify',
            'Working with S3 and use AWS API CLI for automatic backup',
            'Working with Arango DB (Backup, Restore, Maintenance)',
            'Developing custom Webpack configuration with Vue.js for Dotnet core',
            'Configured Jenkins, AWS EC2, ECR, S3 , Configured code commit and policies',
            'yiata.com | get3000.com | mobile.get3000.com | company.krd | beinstar.com | xpaychain.com',
          ],
        },
        {
          jobTitle: 'Frontend Developer',
          company: 'azki.com',
          date: '09/2019 - 11/2019',
          location: 'Iran,Tehran',
          jobItem: [
            'Developing custom Vue.js component for Admin panel with ANT design framework',
            'Developing custom mini UI framework with bootstrap4',
            'Developing 2 Admin panel and back-office website with ANT design',
            'Developing and fix in open-source projects like ant-design (Date picker filter in data table)',
            'Developing a website with the Laravel Blade template engine and JQuery. (ES6, Modules, Webpack, LARAVEL Mix)',
          ],
        },
        {
          jobTitle: 'Frontend Developer | DevOps Engineer',
          company: 'ENTEKHAB Investment Development Group',
          date: '09/2017 - 09/2019',
          location: 'Iran,Tehran',
          jobItem: [
            'Develop custom React.js component for local TV application and wrap with Electron.js',
            'Develop a contact application with react native.',
            'Customize Bootstap4 Sass for projects',
            'Develop two Admin panel and back-office website with ant-design',
            'Experience with Twig, Symfony4',
            'Configure Direct Amin, Gitlab CI/CD',
            'Develop Drupal-based newsroom and portal for some company of Entekhab holding',
            'Entekhab.com | iranef.com | iranef.com/mag | Entekhab.tv | peyeshpress.com | snowaeps.com',
          ],
        },

        {
          jobTitle: 'Frontend Developer',
          company: 'axprint.com',
          date: '09/2015 - 09/2017',
          location: 'Iran,Tehran',
          jobItem: [
            'Redesign axprint.com with JQuery and pure Javascript',
            'Drupal 7 developer (Theme designer and Developer)',
            'Develop custom mini-framework with Bourbon SCSS pre-compiler and Neat grid system',
            'Work with Balsamiq and Adobe illustrator.',
            'Linux server administration',
            'Build custom ES2015 modules',
            'Refactor Axprint.com with the first version of Gatsby',
            'axprint.com | tablou.ir ',
          ],
        },

        {
          jobTitle: 'Frontend Developer',
          company: 'rayvarz.com',
          date: '01/2014 - 08/2015',
          location: 'Iran,Tehran',
          jobItem: [
            'Develop 20 portal with Drupal 7',
            'Develop custom components with JQuery like image slider, grid system, masonry grid system, ….',
            'Design logo, vector, icon set for BPMS, and e-office application',
            'Rayvarz.com | bpms.rayvarz.com | abfa-shiraz.com | notary.ir | saham.parsian-bank.ir',
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@media print {
  .cv-container {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
  }
  @page {
    margin-top: 0;
    margin-bottom: 0;
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
    font-size: 12px;
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

    font-size: 13px;
  }
}
</style>
