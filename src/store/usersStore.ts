import { defineStore } from "pinia";
import type { FormatedUser } from "../interfaces";

export const useUsersStore = defineStore("users", {
  // DATA -> ref()
  state: () => ({
    users: null as FormatedUser[] | null,
    showldRowsHaveColor: false,
  }),
  // COMPUTED -> computed()
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  // METHODS -> function()
  actions: {
    setUsersFromApi(response: FormatedUser[]): void {
      this.users = response;
    },
  },
});
