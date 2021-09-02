<template>
  <div class='footer'>
    <div class='col-auto text-sm-center pt-10'>
      <ul class='footer-social'>
        <li>
          <a
            class='col-auto app-title font-weight-light fs-12'
            href='https://github.com/pooyagolchian'
            target='_blank'
          >
            Github
          </a>
        </li>
        <li>
          <a
            class='col-auto app-title font-weight-light fs-12'
            href='https://linkedin.com/in/pooyagolchian'
            target='_blank'
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            class='col-auto app-title font-weight-light fs-12'
            href='https://dribbble.com/pooyagolchian'
            target='_blank'
          >
            Dribbble
          </a>
        </li>
        <li>
          <a
            class='col-auto app-title font-weight-light fs-12'
            href='https://dev.to/pooyagolchian'
            target='_blank'
          >
            Dev
          </a>
        </li>

        <li>
          <a
            class='col-auto app-title font-weight-light fs-12'
            href='/blog/rss.xml'
            target='_blank'
          >
            RSS
          </a>
        </li>
      </ul>
    </div>

    <div class='app-subtitle footer-copyright fs-12 col-auto d-flex align-items-center pb-10'>
      <span class='pr-3'>Develop with</span> <span class='lnr lnr-heart pt-3 pb-3'> </span> -
      {{ new Date().getFullYear() }}
    </div>
  </div>

</template>
