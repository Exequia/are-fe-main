import { Component, OnInit } from "@angular/core";
import { BetModel, TypeBet } from "../../models/BetModel";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-list-bets",
  templateUrl: "./list-bets.component.html",
  styleUrls: ["./list-bets.component.scss"]
})
export class ListBetsComponent implements OnInit {
  private bets: Array<BetModel>;

  constructor() {}

  ngOnInit() {
    if (environment.mock) {
      this.bets = [
        {
          id: 0,
          name: "fnxWorkChange",
          type: TypeBet.Date,
          config: {
            private: true,
            dateInit: new Date(),
            dateEnd: null,
            active: true
          }
        }
      ];
    }
  }
}
