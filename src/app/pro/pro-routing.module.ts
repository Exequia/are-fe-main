import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProHomeComponent } from "./views/pro-home/pro-home.component";
import { AuthGuardService } from "../services/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    component: ProHomeComponent,
    canActivate: [AuthGuardService]
  },
  { path: "/", redirectTo: "" },
  { path: "/pro", redirectTo: "" },
  { path: "/home", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProRoutingModule {}
