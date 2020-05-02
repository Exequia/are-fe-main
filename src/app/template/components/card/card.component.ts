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

  /**
   * Combine the type of card, the card key and the path of the param
   * @param property string, with the property to show
   * @returns string, with the i18n path to translate
   */
  public getPath(property: string): string {
    return `${this.type}.${this.card.key}.${property}`;
  }
}
