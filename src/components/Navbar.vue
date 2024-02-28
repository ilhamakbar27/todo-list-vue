<template>
  <div
    class="flex px-24 items-center justify-between bg-blue-500 p-5 text-white">
    <h1 class="text-2xl font-bold">Todo List</h1>
    <router-link to="/" class="hover:underline text-xl">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
