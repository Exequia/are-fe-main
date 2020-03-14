import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { AuthGuardService } from "../services/auth-guard.service";
// import { NewUserComponent } from "../users/views/new-user/new-user.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetsRoutingModule {}
