export interface User {
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
export interface FormatedPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
export interface FormatedId {
  name: string;
  value: string;
}
