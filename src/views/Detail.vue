<template>
  <div class="container pt-10 mx-auto p-4">
    <h1 class="text-4xl font-semibold mb-4">Note Details</h1>
    <div class="flex flex-col gap-3">
      <h2 class="text-3xl font-bold">{{ note.title }}</h2>
      <p class="text-lg">{{ note.content }}</p>
      <p class="text-sm text-gray-500">{{ note.date }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapGetters(["notes"]),
    note() {
      return this.notes[Number(this.id)];
    },
  },
};
</script>
