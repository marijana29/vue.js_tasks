Vue.createApp({
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    switchTab(tabNumber) {
      this.activeTab = tabNumber;
    },
  },
}).mount("#app");
