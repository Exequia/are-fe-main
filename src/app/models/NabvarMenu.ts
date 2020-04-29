export interface NavbarMenu {
  authorized: Array<NavbarCredentials>;
  key: string;
  link: string;
  icon: string;
  items: Array<NavbarMenuItem>;
}

export interface NavbarMenuItem {
  key: string;
  icon: string;
  link: string;
}

export enum NavbarCredentials {
  Admin,
  All,
  Bets,
  Pro,
}
