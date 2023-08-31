export interface FormatedUser {
  id: string;
  name: string;
  surname: string;
  country: string;
  picture: string;
}
export interface User {
  id: CompleteId;
  name: CompleteName;
  location: CompleteLocation;
  picture: FormatedPicture;
}

export interface CompleteName {
  title: string;
  first: string;
  last: string;
}

interface CompleteLocation {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: LatLong;
  timezone: Timezone;
}

interface Street {
  numer: number;
  name: string;
}
interface LatLong {
  latitude: string;
  longitude: string;
}
interface Timezone {
  offset: string;
  description: string;
}

interface FormatedPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
interface CompleteId {
  name: string;
  value: string;
}