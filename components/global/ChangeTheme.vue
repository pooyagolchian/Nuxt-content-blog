<script>
export default {
  name: 'ChangeTheme',
  props: {
    defaultTheme: {
      default: 'light',
      type: String,
    },
    themeColorList: {
      default: ['light', 'dark', 'sepia', 'black', 'coffee', 'rose'],
      type: Array,
    },
    changeThemeOff: {
      default: true,
      type: Boolean,
    },
  },
  data() {
    return {
      theme: this.defaultTheme,
      counter: 0,
      themeName: this.defaultTheme,
      showChangeTheme: this.changeThemeOff,
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
    if (!this.showChangeTheme) this.showChangeThemeHandler()
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

<template>
  <div class="vue-multiple-themes">
    <span v-if="changeThemeOff" class="change-theme-box" @click="changeTheme()">
      {{ themeName }}
    </span>
  </div>
</template>
