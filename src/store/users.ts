import { defineStore } from "pinia";
import type { User } from "./interfaces";

export const useUsersStore = defineStore("users", {
  // DATA -> ref()
  state: () => ({ users: null as User[] | null }),
  // COMPUTED -> computed()
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  // METHODS -> function()
  actions: {
    setUsersFromApi(response: User[]): void {
      this.users = response;
    },
  },
});
