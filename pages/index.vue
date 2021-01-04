<template>
  <div>
    <div class="vue-multiple-themes">
      <span
        v-if="changeThemeOff"
        class="change-theme-box"
        @click="changeTheme()"
      >
        {{ themeName }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      theme: 'light',
      counter: 0,
      themeName: this.defaultTheme,
      showChangeTheme: this.changeThemeOff,
      defaultTheme: 'light',
      themeColorList: ['light', 'dark', 'sepia', 'black', 'coffee', 'rose'],
      changeThemeOff: true,
    }
  },
  computed: {
    showChangeThemeHandler() {
      if (!this.showChangeTheme) {
        this.theme = this.defaultTheme
        this.themeName = this.theme
        this.themeColor(this.theme)
      }
    },
  },
  methods: {
    themeColor(themeColor) {
      this.theme = `${themeColor}`
      document.title = 'Multiple Themes in Vue.js'
      const bodyElement = document.body
      bodyElement.classList.add('app-background')
      const htmlElement = document.documentElement
      htmlElement.setAttribute('theme', `${themeColor}`)
      localStorage.setItem('theme', JSON.stringify(`${themeColor}`))
    },
    changeTheme() {
      this.counter = this.counter + 1
      if (this.counter === this.themeColorList.length) {
        this.counter = 0
      }
      this.themeName = this.themeColorList[this.counter]
      this.themeColor(this.themeName)
    },
  },
  mounted() {
    if (!this.showChangeTheme) this.showChangeThemeHandler
    if (localStorage.getItem('theme') && this.showChangeTheme) {
      this.theme = JSON.parse(localStorage.getItem('theme'))
      this.themeName = this.theme
      this.themeColor(this.theme)
    } else {
      this.theme = this.defaultTheme
      this.themeName = this.theme
      this.themeColor(this.theme)
    }
  },
}
</script>
