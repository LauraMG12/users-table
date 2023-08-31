<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";

import AppButton from "@/components/AppButton.vue";
import { useUsersStore } from "@/store/usersStore";

const usersStore = useUsersStore();
const { users, showldRowsHaveColor } = storeToRefs(usersStore);

const headers = ref<string[]>([
  "Foto",
  "Nombre",
  "Apellido",
  "País",
  "Acciones",
]);

function setAltValue(name: string, surname: string): string {
  return `${name}
            ${surname}
            profile
            image`;
}
</script>

<template>
  <table>
    <tr>
      <th v-for="header in headers" :key="header">{{ header }}</th>
    </tr>

    <tr
      v-for="user in users"
      :key="user.id"
      :class="{ color: showldRowsHaveColor }"
    >
      <td>
        <img :src="user.picture" :alt="setAltValue(user.name, user.surname)" />
      </td>
      <td>{{ user.name }}</td>
      <td>{{ user.surname }}</td>
      <td>{{ user.country }}</td>
      <td><AppButton text="Delete" /></td>
    </tr>
  </table>
</template>

<style scoped lang="scss">
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
