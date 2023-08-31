<script setup lang="ts">
import AppActions from "@/components/AppActions.vue";
import UsersTable from "@/components/UsersTable.vue";

import { fetchUsersFromApi } from "./AppHelper";

fetchUsersFromApi();
</script>

<template>
  <header>
    <h1>Lista de usuarios</h1>
  </header>
  <nav>
    <AppActions />
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
