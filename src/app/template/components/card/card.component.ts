import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../models/card";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  //VARS
  @Input() card: Card;
  constructor() {}

  ngOnInit() {}
}
