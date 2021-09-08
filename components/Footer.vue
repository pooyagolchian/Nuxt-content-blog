<template>
  <div class='footer col col-12 p-0 m-0 pt-20'>
    <div class='col-12 d-flex align-items-center justify-content-center text-sm-center pt-10'>
      <ul class='footer-social row'>
        <li class='col col-auto'>
          <a
            class='col-auto  app-title font-weight-light fs-12'
            href='https://github.com/pooyagolchian'
            target='_blank'
          >
            Github
          </a>
        </li>
        <li class='col col-auto'>
          <a
            class='col-auto  app-title font-weight-light fs-12'
            href='https://linkedin.com/in/pooyagolchian'
            target='_blank'
          >
            Linkedin
          </a>
        </li>
        <li class='col col-auto'>
          <a
            class='col-auto  app-title font-weight-light fs-12'
            href='https://dribbble.com/pooyagolchian'
            target='_blank'
          >
            Dribbble
          </a>
        </li>
        <li class='col col-auto'>
          <a
            class='col-auto  app-title font-weight-light fs-12'
            href='https://dev.to/pooyagolchian'
            target='_blank'
          >
            Dev
          </a>
        </li>


        <li class='col col-auto'>
          <a
            class='col-auto  app-title font-weight-light fs-12'
            href='https://stackoverflow.com/users/2257357/pooya-golchian'
            target='_blank'
          >
            Stackoverflow
          </a>
        </li>
        <li class='col col-auto'>
          <a
            class='col-auto  app-title font-weight-light fs-12'
            href='/blog/rss.xml'
            target='_blank'
          >
            RSS
          </a>
        </li>


      </ul>
    </div>

    <div class='app-subtitle footer-copyright fs-12 d-flex align-items-center justify-content-center pt-20 pb-20'>
      <span>Develop with</span> <span class='lnr lnr-heart pr-3 pl-3'> </span> -
      {{ new Date().getFullYear() }}
    </div>
  </div>

</template>
