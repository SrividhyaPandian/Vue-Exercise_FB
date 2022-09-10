<template>
  <div class="list_wrapper">
    <p>Title values in the first 10 Entries for the term <span class="term">{{titleStore.enteredTitle.toUpperCase()}}</span></p>
    <ol class="listOfTitles">
      <li v-for="(title, index) in titleStore.listToDisplay" :key="index"> {{title}}</li>
    </ol>
    <button type="button" @click="titleStore.returnToHome">Back to home</button>
  </div>
</template>

<script setup>
  import { useTitleStore } from "@/stores/titleSearch.js";
  const titleStore = useTitleStore()
</script>

<style>
.list_wrapper {
  font-family: sans-serif;
  font-size: 16px;
  background-color: bisque;
  padding: 25px;
}
.list_wrapper > p > span {
  font-weight: bold;
}
.list_wrapper > .listOfTitles {
  text-align: left;
}
.list_wrapper > .listOfTitles > li {
  padding: 15px;
}
.list_wrapper > .listOfTitles > li:nth-child(even) {
  background-color: beige;
}
</style>
