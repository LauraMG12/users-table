import { defineStore } from "pinia";
import { type FormatedUser, SortBy } from "../interfaces";

export const useUsersStore = defineStore("users", {
  // DATA -> ref()
  state: () => ({
    originalUsers: [] as FormatedUser[],
    users: [] as FormatedUser[],
    incompletedUsers: [] as FormatedUser[],
    showRowsColor: false as boolean,
    sort: SortBy.NONE as SortBy,
    filterCountry: "" as string,
  }),

  // COMPUTED -> computed()
  getters: {
    filteredUsers(state) {
      return state.filterCountry !== "" && state.filterCountry.length > 0
        ? state.users.filter((user) => {
            return user.country
              .toLowerCase()
              .includes(state.filterCountry.toLowerCase());
          })
        : state.users;
    },
    sortedUsers(state): FormatedUser[] {
      if (state.sort === SortBy.NONE) {
        return this.filteredUsers;
      }

      const compareProperties: Record<string, (user: FormatedUser) => string> =
        {
          [SortBy.COUNTRY]: (user) => user.country,
          [SortBy.NAME]: (user) => user.name,
          [SortBy.SURNAME]: (user) => user.surname,
        };

      return this.filteredUsers.toSorted((a, b) => {
        const extractProperty = compareProperties[state.sort];
        return extractProperty(a).localeCompare(extractProperty(b));
      });
    },
  },

  // METHODS -> function()
  actions: {
    setOriginalUsers(response: FormatedUser[]): void {
      this.originalUsers = response;
      this.setUsers(response);
    },
    setUsers(response: FormatedUser[]): void {
      this.users = response;
    },
    toggleRowsColor(): void {
      this.showRowsColor = !this.showRowsColor;
    },
    setSorting(sortType: SortBy): void {
      if (this.sort === sortType) {
        this.sort = SortBy.NONE;
        return;
      }
      this.sort = sortType;
    },
    handleDelete(id: string): void {
      this.incompletedUsers = this.users.filter((user) => {
        return user.id !== id;
      });
      this.setUsers(this.incompletedUsers);
    },
    handleReset(): void {
      this.users = this.originalUsers;
    },
    setFilterCountry(input: string): void {
      this.filterCountry = input;
    },
  },
});
