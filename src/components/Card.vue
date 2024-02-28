<template>
  <div class="mb-4 bg-white mt-5 rounded shadow-lg">
    <div class="p-6">
      <p class="text-lg font-bold">{{ todo }}</p>
      <div class="mt-4">
        <router-link
        :to="{ name: 'Details', params: { id: index }}"
          class="text-sm text-white bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded mr-2">
          See details
        </router-link>
        <button
          @click="removeTodo"
          class="text-sm text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded mr-2">
          Delete
        </button>
        <button
          @click="editTodo"
          class="text-sm text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded">
          Edit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["todo", "index"],
  methods: {
    removeTodo() {
      this.$emit("remove", this.index);
    },
    editTodo() {
      this.$emit("edit", this.index);
    },
  },
};
</script>

