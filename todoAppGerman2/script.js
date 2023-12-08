new Vue({
  el: "#app",
  data: {
    newTodoDescription: "",
    filter: "all",
    todos: [],
  },
  mounted() {
    this.loadTodos();
  },
  methods: {
    loadTodos() {
      if (localStorage) {
        const storedTodos = localStorage.getItem("todos");
        this.todos = storedTodos ? JSON.parse(storedTodos) : [];
      } else {
        console.error("Local storage is not available.");
      }
    },
    handleCheckboxChange(todo) {
      this.saveTodos();
    },
    addNewTodo() {
      const description = this.newTodoDescription.trim();

      if (
        description !== "" &&
        !this.todos.some(
          (todo) => todo.description.toLowerCase() === description.toLowerCase()
        )
      ) {
        const newTodo = {
          description: description,
          done: false,
          id: Date.now(),
        };

        this.todos.push(newTodo);
        this.newTodoDescription = "";
        this.saveTodos();
      } else {
        alert("Duplicate description. Please enter a unique description.");
      }
    },

    removeDoneTodos() {
      const doneTodos = this.todos.filter((todo) => todo.done);

      if (doneTodos.length > 0) {
        this.todos = this.todos.filter((todo) => !todo.done);
        this.saveTodos();
      } else {
        alert("There are no todos marked as done to remove.");
      }
    },
    saveTodos() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "open") {
        return this.todos.filter((todo) => !todo.done);
      } else if (this.filter === "done") {
        return this.todos.filter((todo) => todo.done);
      }
    },
  },
});
