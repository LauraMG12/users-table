<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";
import { setUsersFromApi, headers, users, CompleteName } from "@/store/state";
import { ref } from "vue";

fetch("https://randomuser.me/api/?results=100&inc=picture,name,nat,id")
  .then((res) => res.json())
  .then((res) => setUsersFromApi(res.results));

const displayedUsers = ref(users);
const showldRowsHaveColor = ref<boolean>(false);
const showldOrderUsersByCountry = ref<boolean>(false);

function setAltValue(name: CompleteName): string {
  return `${name.first}
            ${name.last}
            profile
            image`;
}

function toggleRowsColor(): void {
  showldRowsHaveColor.value = !showldRowsHaveColor.value;
}
function toggleOrderByCountry(): void {
  showldOrderUsersByCountry.value = !showldOrderUsersByCountry.value;
  if (showldOrderUsersByCountry.value && users.value) {
    displayedUsers.value = users.value.sort((a, b) =>
      a.nat > b.nat ? 1 : b.nat > a.nat ? -1 : 0
    );
  } else {
    displayedUsers.value = users.value;
  }
}
</script>

<template>
  <header><h1>Lista de usuarios</h1></header>
  <nav class="filters">
    <AppButton text="Colorear filas" @click="toggleRowsColor()" />
    <AppButton text="Ordenar por país" @click="toggleOrderByCountry()" />
  </nav>
  <main>
    <table>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>

      <tr
        v-for="user in displayedUsers"
        :key="user.id.value"
        :class="{ color: showldRowsHaveColor }"
      >
        <td>
          <img :src="user.picture.medium" :alt="setAltValue(user.name)" />
        </td>
        <td>{{ user.name.first }}</td>
        <td>{{ user.name.last }}</td>
        <td>{{ user.nat }}</td>
        <td><AppButton text="Delete" /></td>
      </tr>
    </table>
  </main>
</template>

<style scoped lang="scss">
.filters {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
h1 {
  text-align: center;
}
table {
  width: 100%;
  border-collapse: collapse;
}
tr {
  border-bottom: 1px solid #cecece;
  &.color {
    &:nth-child(2n) {
      background-color: #c9e2ff;
    }
    &:not(:nth-child(2n)) {
      background-color: #e0f2fd;
    }
  }
}
th {
  background-color: #3a3a3a;
  color: rgb(255, 255, 255);
}
td {
  text-align: center;
}
</style>
