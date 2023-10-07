<script setup lang="ts">
import { storeToRefs } from "pinia";

import AppButton from "@/components/AppButton.vue";
import { useUsersStore } from "@/store/usersStore";

import { SortBy } from "../interfaces";

const usersStore = useUsersStore();
const { showRowsColor } = storeToRefs(usersStore);

function setAltValue(name: string, surname: string): string {
  return `${name}
            ${surname}
            profile
            image`;
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Photo</th>
        <th class="clickable" @click="usersStore.setSorting(SortBy.NAME)">
          Name
        </th>
        <th class="clickable" @click="usersStore.setSorting(SortBy.SURNAME)">
          Surname
        </th>
        <th class="clickable" @click="usersStore.setSorting(SortBy.COUNTRY)">
          Country
        </th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in usersStore.sortedUsers"
        :key="user.id"
        :class="{ color: showRowsColor }"
      >
        <td>
          <img
            :src="user.picture"
            :alt="setAltValue(user.name, user.surname)"
          />
        </td>
        <td>{{ user.name }}</td>
        <td>{{ user.surname }}</td>
        <td>{{ user.country }}</td>
        <td>
          <AppButton text="Delete" @click="usersStore.handleDelete(user.id)" />
        </td>
      </tr>
    </tbody>
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
      background-color: #d7e8fb;
    }
    &:not(:nth-child(2n)) {
      background-color: #e3f1fa;
    }
    &:hover {
      background-color: #49a6fd;
    }
  }
  &:hover {
    background-color: #49a6fd;
  }
}
th {
  background-color: #3a3a3a;
  color: rgb(255, 255, 255);
  &.clickable {
    cursor: pointer;
  }
}
td {
  text-align: center;
}
</style>
