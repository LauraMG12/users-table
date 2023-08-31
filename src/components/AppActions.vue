<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";

import { useUsersStore } from "@/store/usersStore";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const usersStore = useUsersStore();
const { countryFilterText } = storeToRefs(usersStore);

watch(countryFilterText, () => {
  usersStore.filterByCountry();
});
</script>

<template>
  <div class="options">
    <AppButton text="Colorear filas" @click="usersStore.toggleRowsColor()" />
    <AppButton
      text="Ordenar por país"
      @click="usersStore.toggleOrderByCountry()"
    />
    <AppButton
      text="Restaurar estado inicial"
      @click="usersStore.resetUsers()"
    />
    <input
      class="filter"
      type="text"
      placeholder="Filtrar por país"
      v-model="countryFilterText"
    />
  </div>
</template>

<style scoped lang="scss">
.options {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  .filter {
    border-radius: 10px;
    padding: 0 10px;
    background-color: #f0f0f0;
  }
}
</style>
