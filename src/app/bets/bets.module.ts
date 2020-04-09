import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { BetsRoutingModule } from "./bets-routing.module";
import { BetsHomeComponent } from "./views/bets-home/bets-home.component";
import { DatepickerI18nComponent } from "./components/datepicker-i18n/datepicker-i18n.component";
import { ListBetsComponent } from "./views/list-bets/list-bets.component";
import { BetComponent } from "./components/bet/bet.component";

@NgModule({
  declarations: [
    BetsHomeComponent,
    DatepickerI18nComponent,
    ListBetsComponent,
    BetComponent
  ],
  imports: [
    CommonModule,
    BetsRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule
  ]
})
export class BetsModule {}
