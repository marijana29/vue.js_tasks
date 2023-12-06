Vue.createApp({
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.title = this.darkMode ? "Night Mode" : "Day Mode";
      document.body.classList.toggle("setting--dark", this.darkMode);
    },
  },
}).mount("#app");
