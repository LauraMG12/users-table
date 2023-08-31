import { useUsersStore } from "@/store/usersStore";
import type { FormatedUser, User } from "@/interfaces";

export function fetchUsersFromApi() {
  const usersStore = useUsersStore();
  const { setUsersFromApi } = usersStore;
  fetch("https://randomuser.me/api/?results=100&inc=id,picture,name,location")
    .then((res) => res.json())
    .then((res) => formatUsersInformation(res.results))
    .then((res) => setUsersFromApi(res));
}

function formatUsersInformation(users: User[]): FormatedUser[] {
  const formatedUser: FormatedUser[] = [];
  users.filter((user) => {
    formatedUser.push({
      id: user.id.value,
      name: user.name.first,
      surname: user.name.last,
      country: user.location.country,
      picture: user.picture.thumbnail,
    });
  });
  return formatedUser;
}
