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
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() type: CardTypes;
  @Input() card: Card;

  constructor() {}

  ngOnInit() {}

  public getPath(path: string): string {
    return `${this.type}.${this.card.key}.${path}`;
  }
}
