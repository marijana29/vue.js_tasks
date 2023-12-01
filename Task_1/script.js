Vue.createApp({
  data() {
    return {
      userName: "John Doe",
    };
  },
  methods: {
    getCurrentDateTime() {
      const currentDate = new Date();
      return currentDate.toLocaleString("en-US");
    },
  },
}).mount("#app");
