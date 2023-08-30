import { ref } from "vue";

interface User {
  id: FormatedId;
  name: CompleteName;
  nat: string;
  picture: FormatedPicture;
}
export interface CompleteName {
  title: string;
  first: string;
  last: string;
}
interface FormatedPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
interface FormatedId {
  name: string;
  value: string;
}

export const users = ref<User[] | null>(null);

export function setUsersFromApi(response: User[]): void {
  users.value = response;
}
export const headers = ref<string[]>([
  "Foto",
  "Nombre",
  "Apellido",
  "País",
  "Acciones",
]);
