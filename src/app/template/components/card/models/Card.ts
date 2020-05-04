export interface Card {
  id: number;
  dateInit: Date;
  key: string;
  link?: Link;
}

interface Link {
  url: string;
  text: string;
  icon?: string;
}
