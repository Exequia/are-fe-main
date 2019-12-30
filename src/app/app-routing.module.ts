import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuardService] },
  { path: "home", redirectTo: "" },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then(mod => mod.UsersModule),
    canActivate: [AuthGuardService]
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
