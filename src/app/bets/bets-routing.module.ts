import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BetsHomeComponent } from "./views/bets-home/bets-home.component";
import { AuthGuardService } from "../services/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    component: BetsHomeComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetsRoutingModule {}
