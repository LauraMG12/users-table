import { useUsersStore } from "@/store/usersStore";
import type { FormatedUser, User } from "@/interfaces";

export function fetchUsersFromApi() {
  const usersStore = useUsersStore();
  const { setOriginalUsers } = usersStore;
  fetch(
    "https://randomuser.me/api/?results=100&inc=picture,name,location,email"
  )
    .then((res) => res.json())
    .then((res) => formatUsersInformation(res.results))
    .then((res) => {
      setOriginalUsers(res);
    })
    .catch((err) => console.log(err));
}

function formatUsersInformation(users: User[]): FormatedUser[] {
  const formatedUserDictionary: FormatedUser[] = [];

  users.filter((user) => {
    formatedUserDictionary.push({
      id: user.email,
      name: user.name.first,
      surname: user.name.last,
      country: user.location.country,
      picture: user.picture.thumbnail,
    });
  });
  return formatedUserDictionary;
}
