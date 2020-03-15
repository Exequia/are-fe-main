export interface NabvarMenu {
  authorized: Array<NabvarCredentials>;
  key: string;
  link: string;
  icon: string;
  items: Array<NabvarMenuItem>;
}

export interface NabvarMenuItem {
  key: string;
  icon: string;
  link: string;
}

export enum NabvarCredentials {
  Admin,
  All,
  Bets,
  Pro
}
