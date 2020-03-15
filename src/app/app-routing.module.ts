import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./template/home/home.component";
import { PageNotFoundComponent } from "./template/page-not-found/page-not-found.component";
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", redirectTo: "" },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then(mod => mod.UsersModule)
  },
  {
    path: "bets",
    loadChildren: () =>
      import("./bets/bets.module").then(mod => mod.BetsModule),
    canActivate: [AuthGuardService]
  },
  {
    path: "pro",
    loadChildren: () => import("./pro/pro.module").then(mod => mod.ProModule),
    canActivate: [AuthGuardService]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
