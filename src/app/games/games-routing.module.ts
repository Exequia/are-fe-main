import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesHomeComponent } from './views/games-home/games-home.component';
import { ThreeInLineComponent } from './views/three-in-line/three-in-line.component';

const routes: Routes = [
  {
    path: '',
    component: GamesHomeComponent,
    pathMatch: 'full',
    data: { animation: 'GamesHome' }
  },
  {
    path: '3x3',
    component: ThreeInLineComponent,
    pathMatch: 'full',
    data: { animation: 'ThreeInLine' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {}
