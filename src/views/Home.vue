<template>
  <main>
    <label for="Title">Enter the Title</label>
    <input type="text" name="Title" id="Title" v-model="titleStore.enteredTitle">
    <Button @buttonSubmit="titleStore.onSubmit()" />
  </main>
</template>

<script setup>
import Button from '../components/Button.vue'
import { useTitleStore } from "@/stores/titleSearch.js";

const titleStore = useTitleStore() 
</script>

<style>
/* CSS style for Home View */
main {
  background-color: #e3927754;
  padding: 25px;
  width: 100%;
  border-radius: 5px;
}
label {
  font-size: 16px;
  margin: 25px;
  font-weight: bold;
}
input:focus, input:hover {
  outline: none;
}
</style>
