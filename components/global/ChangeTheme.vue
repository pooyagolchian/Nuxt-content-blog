<template>
  <div class="vue-multiple-themes">
    <span v-if="changeThemeOff" class="change-theme-box" @click="changeTheme()">
      <div v-if="!themeSwitch">
        <span class="lnr lnr-sun fs-20"></span>
      </div>
      <div v-else>
        <span class="lnr lnr-moon fs-20"></span>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'ChangeTheme',
  props: {
    defaultTheme: {
      default: 'light',
      type: String,
    },
    themeColorList: {
      default: ['light', 'dark'],
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
      themeSwitch: false,
      themeName: this.defaultTheme,
      showChangeTheme: this.changeThemeOff,
    };
  },

  methods: {
    themeColor(themeColor) {
      this.theme = `${themeColor}`;
      const bodyElement = document.body;
      bodyElement.classList.add('app-background');
      const htmlElement = document.documentElement;
      htmlElement.setAttribute('theme', `${themeColor}`);
      localStorage.setItem('theme', JSON.stringify(`${themeColor}`));
    },
    changeTheme() {
      this.themeSwitch = !this.themeSwitch;
      this.themeSwitch ? this.themeColor('dark') : this.themeColor('light');
    },
  },
  mounted() {
    if (localStorage.getItem('theme') && this.showChangeTheme) {
      this.theme = JSON.parse(localStorage.getItem('theme'));
      const htmlElement = document.documentElement;
      htmlElement.setAttribute('theme', this.theme);
      if (this.theme === 'light') {
        this.themeSwitch = false;
      } else {
        this.themeSwitch = true;
      }
      this.themeName = this.theme;
      this.themeColor(this.theme);
    } else {
      this.theme = this.defaultTheme;
      this.themeName = this.theme;
      this.themeColor(this.theme);
    }
  },
};
</script>
