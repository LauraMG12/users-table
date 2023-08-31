import { defineStore } from "pinia";
import type { FormatedUser } from "../interfaces";

export const useUsersStore = defineStore("fetchedUsers", {
  // DATA -> ref()
  state: () => ({
    fetchedUsers: [] as FormatedUser[],

    users: [] as FormatedUser[],
    orderedUsersByCountry: [] as FormatedUser[],

    countryFilterText: "" as string,
    showldRowsHaveColor: false as boolean,
    shouldOrderUsersByCountry: false as boolean,
  }),
  // COMPUTED -> computed()
  getters: {
    displayedUsers: (state) => {
      return state.shouldOrderUsersByCountry
        ? state.orderedUsersByCountry
        : state.users;
    },
  },
  // METHODS -> function()
  actions: {
    deleteUser(id: number): void {
      deleteUserFromState(this.users, id);
      deleteUserFromState(this.orderedUsersByCountry, id);

      function deleteUserFromState(state: FormatedUser[], id: number): void {
        const removedUserIndex = state.findIndex((user) => user.id === id);
        state.splice(removedUserIndex, 1);
      }
    },
    filterByCountry(): void {
      this.orderedUsersByCountry.filter((user) =>
        user.country.startsWith(this.countryFilterText)
      );
      this.users.filter((user) =>
        user.country.startsWith(this.countryFilterText)
      );
    },
    resetUsers(): void {
      this.users = this.fetchedUsers;
      this.setOrderedUsersByCountry();
    },
    setUsersFromApi(response: FormatedUser[]): void {
      this.fetchedUsers = response;
      this.users = JSON.parse(JSON.stringify(this.fetchedUsers));
    },
    setOrderedUsersByCountry(): void {
      this.orderedUsersByCountry = JSON.parse(JSON.stringify(this.users));
      this.orderedUsersByCountry.sort((a, b) =>
        a.country > b.country ? 1 : b.country > a.country ? -1 : 0
      );
    },
    toggleRowsColor(): void {
      this.showldRowsHaveColor = !this.showldRowsHaveColor;
    },
    toggleOrderByCountry(): void {
      this.shouldOrderUsersByCountry = !this.shouldOrderUsersByCountry;
      if (Object.keys(this.orderedUsersByCountry).length === 0) {
        this.setOrderedUsersByCountry();
      }
    },
  },
});
