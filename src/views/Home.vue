<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-semibold mb-8">Todo List</h1>
    <div class="flex mb-4">
      <input
        v-model="newTodo"
        @keyup.enter="addNewTodo"
        class="flex-grow border border-gray-300 rounded-l py-2 px-4"
        placeholder="Add a new todo" />
      <button
        @click="addNewTodo"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">
        Add
      </button>
    </div>
    <div class="list-disc pl-8">
      <Card
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :index="index"
        @remove="removeTodo"
        @edit="editTodo" />
      <p
        class="text-center pt-24 font-semibold text-gray-500 text-3xl"
        v-if="todos.length === 0">
        Todo list is empty. Add a todo here.
      </p>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Card,
  },
  data() {
    return {
      newTodo: "",
      editingIndex: -1,
      error: null,
    };
  },
  computed: {
    ...mapGetters(["todos"]),
  },
  methods: {
    ...mapActions(["addTodo", "removeTodo"]),
    addNewTodo() {
      try {
        if (this.newTodo.trim() === "") {
          throw new Error("Todo cannot be empty");
        }

        if (this.editingIndex !== -1) {
          this.todos[this.editingIndex] = this.newTodo;
          this.editingIndex = -1;
        } else {
          this.addTodo(this.newTodo);
        }

        this.newTodo = "";
      } catch (error) {
        this.error = error.message;
      }
    },
    removeTodoItem(index) {
      this.removeTodo(index);
    },
    editTodo(index) {
      this.editingIndex = index;
      this.newTodo = this.todos[index];
    },
  },
};
</script>


