<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";

import AppButton from "@/components/AppButton.vue";

import { useUsersStore } from "@/store/usersStore";
const usersStore = useUsersStore();
const { showldRowsHaveColor } = storeToRefs(usersStore);
const showldOrderUsersByCountry = ref<boolean>(false);

function toggleRowsColor(): void {
  showldRowsHaveColor.value = !showldRowsHaveColor.value;
}
function toggleOrderByCountry(): void {
  showldOrderUsersByCountry.value = !showldOrderUsersByCountry.value;
}
</script>

<template>
  <div class="options">
    <AppButton text="Colorear filas" @click="toggleRowsColor()" />
    <AppButton text="Ordenar por país" @click="toggleOrderByCountry()" />
  </div>
</template>

<style scoped lang="scss">
.options {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
