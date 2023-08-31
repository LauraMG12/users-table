<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUsersStore } from "@/store/usersStore";

import AppActions from "@/components/AppActions.vue";
import UsersTable from "@/components/UsersTable.vue";

import { fetchUsersFromApi } from "./AppHelper";

const usersStore = useUsersStore();
const { showldRowsHaveColor } = storeToRefs(usersStore);

fetchUsersFromApi();
</script>

<template>
  <header>
    <h1>Lista de usuarios</h1>
  </header>
  <nav>
    <AppActions @rows-color-changed="showldRowsHaveColor = $event" />
  </nav>
  <main>
    <UsersTable />
  </main>
</template>

<style lang="scss">
h1 {
  text-align: center;
}
</style>
