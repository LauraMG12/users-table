<script setup lang="ts">
interface AppButtonProps {
  text: string;
}
defineProps<AppButtonProps>();
</script>

<template>
  <button class="button">
    <p class="button-text">{{ text }}</p>
  </button>
</template>

<style scoped lang="scss">
.button {
  background-color: #3a3a3a;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  p {
    margin: 0;
  }
}
</style>
