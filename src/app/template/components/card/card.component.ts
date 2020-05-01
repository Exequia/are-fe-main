import { Component, OnInit, Input } from '@angular/core';
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
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  constructor() {}

  ngOnInit() {}
}
