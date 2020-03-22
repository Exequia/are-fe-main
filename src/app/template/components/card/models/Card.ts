export interface Card {
  id: number;
  title: string;
  date: Date;
  body: string;
  link?: Link;
}

interface Link {
  url: string;
  text: string;
  icon?: string;
}
