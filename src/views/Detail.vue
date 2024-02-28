<template>
  <div class="container pt-10 mx-auto p-4">
    <h1 class="text-3xl font-semibold mb-4">Todo Details</h1>
    <div>
      <p class="text-4xl font-bold">{{ todo }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapGetters(["todos"]),
    todo() {
      return this.todos[Number(this.id)];
    },
  },
};
</script>
