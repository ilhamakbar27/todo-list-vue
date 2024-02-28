<template>
  <div class="mb-4 bg-white mt-5 rounded shadow-lg">
    <div class="p-6">
      <h2 class="text-lg font-bold">{{ note.title }}</h2>
      <p class="text-sm">{{ note.content }}</p>
      <p class="text-xs text-gray-500">{{ note.date }}</p>
      <div class="mt-4">
        <router-link
          :to="{ name: 'Details', params: { id: index }}"
          class="text-sm text-white bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded mr-2">
          See details
        </router-link>
        <button
          @click="removeNote"
          class="text-sm text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded mr-2">
          Delete
        </button>
        <button
          @click="editNote"
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
  props: ["note", "index"],
  methods: {
    removeNote() {
      this.$emit("remove", this.index);
    },
    editNote() {
      this.$emit("edit", this.index);
    },
  },
};
</script>