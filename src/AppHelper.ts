import { useUsersStore } from "@/store/usersStore";
import type { FormatedUser, User } from "@/interfaces";

export function fetchUsersFromApi() {
  const usersStore = useUsersStore();
  const { setUsersFromApi } = usersStore;
  fetch("https://randomuser.me/api/?results=100&inc=picture,name,location")
    .then((res) => res.json())
    .then((res) => formatUsersInformation(res.results))
    .then((res) => setUsersFromApi(res));
}

function formatUsersInformation(users: User[]): FormatedUser[] {
  const formatedUserDictionary: FormatedUser[] = [];
  let index = 0;
  users.filter((user) => {
    formatedUserDictionary.push({
      id: index,
      name: user.name.first,
      surname: user.name.last,
      country: user.location.country,
      picture: user.picture.thumbnail,
    });
    index++;
  });
  return formatedUserDictionary;
}
