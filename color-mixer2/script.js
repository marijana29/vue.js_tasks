Vue.createApp({
  data() {
    return {
      redValue: 65,
      greenValue: 105,
      blueValue: 225,
      displayColor: "",
    };
  },
  computed: {
    hexColor() {
      const toHex = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };
      return `#${toHex(this.redValue)}${toHex(this.greenValue)}${toHex(
        this.blueValue
      )}`;
    },
  },
  methods: {
    updateColor() {
      this.displayColor = `rgb(${this.redValue},${this.greenValue},${this.blueValue}) ${this.hexColor}`;
      document.body.style.backgroundColor = `rgb(${this.redValue},${this.greenValue},${this.blueValue})`;
    },
    fetchColor() {
      fetch("https://dummy-apis.netlify.app/api/color")
        .then((response) => response.json())
        .then((jsonData) => {
          const rgb = jsonData.rgb;

          this.redValue = rgb.r;
          this.greenValue = rgb.g;
          this.blueValue = rgb.b;

          this.updateColor();
        });
    },
  },
  watch: {
    redValue: "updateColor",
    greenValue: "updateColor",
    blueValue: "updateColor",
  },
  mounted() {
    this.updateColor();
  },
}).mount("#app");
