import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BetsSummaryComponent } from "./views/bets-summary/bets-summary.component";
import { BetsRoutingModule } from "./bets-routing.module";

@NgModule({
  declarations: [BetsSummaryComponent],
  imports: [CommonModule, BetsRoutingModule]
})
export class BetsModule {}
