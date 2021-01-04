<script>
export default {
  name: 'VueMultipleThemes',
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

<style lang="css">
:root {
  --app-background-color: #ffffff;
  --app-title-color: #333333;
  --app-subtitle-color: #555555;
}
[theme='dark'] {
  --app-background-color: #333333;
  --app-title-color: #ffffff;
  --app-subtitle-color: #dddddd;
}
[theme='sepia'] {
  --app-background-color: #d0bc91;
  --app-title-color: #8a6c44;
  --app-subtitle-color: #5f4938;
}
[theme='black'] {
  --app-background-color: #000000;
  --app-title-color: #ffffff;
  --app-subtitle-color: #dddddd;
}
[theme='coffee'] {
  --app-background-color: #394545;
  --app-title-color: #aab1b3;
  --app-subtitle-color: #e9e5e3;
}
[theme='rose'] {
  --app-background-color: #2e1a1e;
  --app-title-color: #bcb8ce;
  --app-subtitle-color: #d5ddef;
}
.app-background {
  background-color: var(--app-background-color);
}
.app-title {
  color: var(--app-title-color);
}
.app-subtitle {
  color: var(--app-subtitle-color);
  padding-top: 10px;
}
.change-theme-box {
  cursor: pointer;
  color: var(--app-subtitle-color);
  font-size: 20px;
  font-weight: bold;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
