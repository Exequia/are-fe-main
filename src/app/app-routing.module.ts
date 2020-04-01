import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./template/views/home/home.component";
import { PageNotFoundComponent } from "./template/views/page-not-found/page-not-found.component";
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "#", redirectTo: "home" },
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
    loadChildren: () => import("./pro/pro.module").then(mod => mod.ProModule)
    // canActivate: [AuthGuardService]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
