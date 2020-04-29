import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { Card } from "src/app/template/components/card/models/card";
interface Card {
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

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit {
  @Input() type = '';
  public cards: Array<Card>;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.cards = this.initCards();
  }

  //Functions
  private initCards(): Array<Card> {
    const card0: Card = {
      id: 0,
      title: '',
      date: new Date(),
      body: ''
    };
    this.fillText(card0, 'title');
    this.fillText(card0, 'body');

    const card1: Card = {
      id: 1,
      title: '',
      date: new Date(),
      body: ''
    };
    this.fillText(card1, 'title');
    this.fillText(card1, 'body');

    return [card0, card1];
  }

  private fillText(card: Card, target: string) {
    this.translate.get(`template.${this.type}.${card.id}.${target}`).subscribe((res: string) => {
      card[target] = res;
    });
  }
}
