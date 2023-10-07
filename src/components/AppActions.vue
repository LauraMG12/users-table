<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";

import { useUsersStore } from "@/store/usersStore";
import { ref, watch } from "vue";

import { SortBy } from "../interfaces";

const usersStore = useUsersStore();
const input = ref<string>("");

watch(input, () => {
  usersStore.setFilterCountry(input.value);
});
</script>

<template>
  <div class="options">
    <AppButton text="Color rows" @click="usersStore.toggleRowsColor()" />
    <AppButton
      text="Order by country"
      @click="usersStore.setSorting(SortBy.COUNTRY)"
    />
    <AppButton text="Reset users" @click="usersStore.handleReset()" />
    <input
      class="filter"
      type="text"
      placeholder="Filter by country"
      v-model="input"
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
