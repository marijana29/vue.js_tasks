new Vue({
  el: "#app",
  data: {
    count: 0,
    steps: 0,
  },
  computed: {
    backgroundSize() {
      return `${this.steps % 100}% 100%`;
    },
  },
  methods: {
    updateCounter() {
      this.count += 1;
      this.steps += 1;

      if (this.steps === 100) {
        this.steps = 0;
      }
    },
    resetCounter() {
      this.count = 0;
      this.steps = 0;
    },
  },
});
