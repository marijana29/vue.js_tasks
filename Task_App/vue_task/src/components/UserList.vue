<template>
  <section class="user-list">
    <nav class="user-list__nav">
      <p>{{ users.length }} Users</p>
      <button
        @click="sortUsers"
        :class="{ 'user-list__nav-filter--active': sortOrder === 'asc' }"
      >
        Asc ⇧
      </button>
      <button
        @click="sortUsers"
        :class="{ 'user-list__nav-filter--active': sortOrder === 'desc' }"
      >
        Desc ⇩
      </button>
      <a
        href="#"
        v-for="user in users"
        :key="user.id"
        class="user-list__nav-item"
        @click="showUserDetails(user)"
        :class="{ 'user-list__nav-item--active': user === selectedUser }"
      >
        {{ user.username }}</a
      >
    </nav>
    <!-- Add Detail component here -->
    <UserListDetail :user="selectedUser" />
  </section>
</template>

<script>
import UserListDetail from "@/components/UserListDetail.vue";
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "",
          phone: "1-770-736-8031 x56442",
          company: {
            name: "Romaguera-Crona",
          },
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          phone: "010-692-6593 x09125",
          company: {
            name: "Deckow-Crist",
          },
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          phone: "1-463-123-4447",
          company: {
            name: "Romaguera-Jacobson",
          },
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          phone: "493-170-9623 x156",
          company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services",
          },
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
          username: "Kamren",
          email: "Lucio_Hettinger@annie.ca",
          phone: "(254)954-1289",
          company: {
            name: "Keebler LLC",
          },
        },
        {
          id: 6,
          name: "Mrs. Dennis Schulist",
          username: "Leopoldo_Corkery",
          email: "Karley_Dach@jasper.info",
          phone: "1-477-935-8478 x6430",
          company: {
            name: "Considine-Lockman",
          },
        },
        {
          id: 7,
          name: "Kurtis Weissnat",
          username: "Elwyn.Skiles",
          email: "Telly.Hoeger@billy.biz",
          phone: "",
          company: {
            name: "Johns Group",
          },
        },
        {
          id: 8,
          name: "Nicholas Runolfsdottir V",
          username: "Maxime_Nienow",
          email: "Sherwood@rosamond.me",
          phone: "586.493.6943 x140",
          company: {
            name: "Abernathy Group",
          },
        },
        {
          id: 9,
          name: "Glenna Reichert",
          username: "Delphine",
          email: "Chaim_McDermott@dana.io",
          phone: "(775)976-6794 x41206",
          company: {
            name: "",
          },
        },
        {
          id: 10,
          name: "Clementina DuBuque",
          username: "Moriah.Stanton",
          email: "Rey.Padberg@karina.biz",
          phone: "024-648-3804",
          company: {
            name: "Hoeger LLC",
          },
        },
      ],
      selectedUser: null,
      sortOrder: "asc",
    };
  },
  methods: {
    showUserDetails(user) {
      this.selectedUser = user;
      console.log("Selected User:", this.selectedUser);
    },
    sortUsers() {
      if (this.sortOrder === "asc") {
        this.sortOrder = "desc";
        this.users.reverse();
      } else {
        this.sortOrder = "asc";
      }
    },
  },
  components: {
    UserListDetail,
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.user-list {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  width: 80%;
  margin: 0 auto;
  border: 3px solid #00a8ff;
  border-radius: 5px;
}
.user-list__nav {
  width: 40%;
  padding: 1rem;
}
.user-list__nav-filter {
  text-transform: uppercase;
  font-size: 0.7rem;
  line-height: 1;
  color: #00a8ff;
  border: 2px solid #00a8ff;
  background-color: transparent;
  padding: 2px;
  margin-right: 5px;
  margin-bottom: 15px;
}
.user-list__nav-filter--active {
  color: #fff;
  border-color: transparent;
  background-color: #00a8ff;
}
.user-list__nav-item {
  display: block;
  text-decoration: none;
  color: #00a8ff;
  padding: 5px;
  border: 2px solid transparent;
  border-radius: 3px;
  margin-bottom: 2px;
}
.user-list__nav-item:hover {
  border-color: #00a8ff;
}
.user-list__nav-item--active {
  background-color: #00a8ff;
  color: #fff;
  border-color: transparent;
}
</style>
