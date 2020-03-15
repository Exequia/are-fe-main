import { Component, OnInit } from "@angular/core";
import { Card } from "../../models/card";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  private cards: Array<Card>;

  constructor() {}

  ngOnInit() {
    this.cards = this.initCards();
  }

  //Functions
  private initCards(): Array<Card> {
    const card0: Card = {
      id: 0,
      date: new Date()
    };
    const card1: Card = {
      id: 1,
      date: new Date()
    };
    return [card0, card1];
  }
}
