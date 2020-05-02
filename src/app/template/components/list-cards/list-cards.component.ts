import { Component, OnInit, Input } from '@angular/core';
// import { Card } from "src/app/template/components/card/models/card";

interface Card {
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

export enum CardTypes {
  News = 'news',
  Studies = 'studies'
}

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit {
  @Input() type = CardTypes;
  @Input() cardsList: Array<Card>;

  constructor() {}

  ngOnInit() {}
}
