<template>
  <div class="button_wrapper">
    <button @click="$emit('buttonSubmit')">Submit</button>
  </div>
</template>

<script setup> 
  const emit = defineEmits(['buttonSubmit'])
</script>

<style>
/* CSS style for button component */
.button_wrapper {
  margin-top: 25px;
}
button {
  padding: 5px;
  font-size: 16px;
  width: 125px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
}
</style>
