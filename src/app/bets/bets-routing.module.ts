import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BetsSummaryComponent } from "./views/bets-summary/bets-summary.component";
import { AuthGuardService } from "../services/auth-guard.service";
import { NewUserComponent } from "../users/views/new-user/new-user.component";

const routes: Routes = [
  {
    path: "",
    component: BetsSummaryComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetsRoutingModule {}
