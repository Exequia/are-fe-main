export interface User {
  alias: string;
  password: string;
  person: Person;
  contact: Contact;
}

export interface Person {
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

export interface Contact {
  email: string;
  confirmEmail: string;
  phone: string;
}

export interface Login {
  email: string;
  password: string;
}
