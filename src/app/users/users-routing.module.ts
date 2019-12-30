import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./views/login/login.component";
import { UserFormComponent } from "./components/user-form/user-form.component";

import { NewUserComponent } from "./views/new-user/new-user.component";
import { UpdateUserComponent } from "./views/update-user/update-user.component";
import { AuthGuardService } from "../services/auth-guard.service";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "signUp",
    component: NewUserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "update",
    component: UpdateUserComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
