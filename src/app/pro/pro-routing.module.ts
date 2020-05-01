import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProHomeComponent } from './views/pro-home/pro-home.component';
import { StudiesComponent } from './views/studies/studies.component';
import { WorksComponent } from './views/works/works.component';

const routes: Routes = [
  {
    path: 'home',
    component: ProHomeComponent,
    pathMatch: 'full',
    data: { animation: 'ProHome' }
  },
  {
    path: 'works',
    component: WorksComponent,
    pathMatch: 'full',
    data: { animation: 'Works' }
  },
  {
    path: 'studies',
    component: StudiesComponent,
    pathMatch: 'full',
    data: { animation: 'Studies' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProRoutingModule {}
