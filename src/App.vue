<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <p>Welcome to Open Library !!!</p>
    <RouterView />
  </div>
</template>

<style>
/* CSS style for App view */
.wrapper > p {
  font-weight: bold;
}
</style>

