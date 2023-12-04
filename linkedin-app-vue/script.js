const app = new Vue({
  el: "#app",
  data: {
    linkedinUser: [],
    pendingRequests: parseInt(localStorage.getItem("pendingRequests")) || 0,
  },
  methods: {
    getContacts() {
      fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
        .then((response) => response.json())
        .then((jsonData) => {
          this.linkedinUser = jsonData.map((contact) => {
            contact.connectionStatus = "Connect";
            return contact;
          });
        });
    },

    getNewSuggestion() {
      return fetch(
        "https://dummy-apis.netlify.app/api/contact-suggestions?count=1"
      )
        .then((response) => response.json())
        .then((jsonData) => {
          const newContact = jsonData[0];
          newContact.connectionStatus = "Connect";
          this.linkedinUser.push(newContact);
          return newContact;
        });
    },

    updatePendingRequests(count) {
      const pendingContainer = document.querySelector(".pending-container");
      if (pendingContainer) {
        pendingContainer.innerText = `Pending Requests: ${count}`;
      }
    },

    removeContact(contact) {
      this.linkedinUser = this.linkedinUser.filter((c) => c !== contact);

      this.getNewSuggestion();
    },
    toggleConnectionStatus(contact) {
      if (contact.connectionStatus === "Connect") {
        contact.connectionStatus = "Pending";
        this.pendingRequests += 1;
      } else {
        contact.connectionStatus = "Connect";
        this.pendingRequests = Math.max(0, this.pendingRequests - 1);
      }

      localStorage.setItem("pendingRequests", this.pendingRequests);
      this.updatePendingRequests(this.pendingRequests);
    },
  },
  created() {
    this.getContacts();
  },
});
