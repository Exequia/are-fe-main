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
  email: string;
  confirmEmail: string;
  phone: string;
}

export interface LoginModel {
  email: string;
  password: string;
}
