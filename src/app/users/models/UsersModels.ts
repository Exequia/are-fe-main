export interface UserModel {
  alias: string;
  password: string;
  person: PersonModel;
  contact: ContactModel;
}

export interface PersonModel {
  name: string;
  firstSurname: string;
  secondSurname: string;
  gender: EnumGender;
  birthDate: Date;
  dni: string;
}

export enum EnumGender {
  male,
  female
}

export interface ContactModel {
  phone: string;
  email: string;
}
