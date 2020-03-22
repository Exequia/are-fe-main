import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProHomeComponent } from "./views/pro-home/pro-home.component";
import { StudiesComponent } from "./views/studies/studies.component";

const routes: Routes = [
  {
    path: "",
    component: ProHomeComponent
  },
  { path: "studies", component: StudiesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProRoutingModule {}
