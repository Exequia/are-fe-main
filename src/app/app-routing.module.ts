import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './template/views/home/home.component';
import { PageNotFoundComponent } from './template/views/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((mod) => mod.UsersModule),
    data: { animation: 'users' }
  },
  {
    path: 'bets',
    loadChildren: () =>
      import('./bets/bets.module').then((mod) => mod.BetsModule),
    canActivate: [AuthGuardService],
    data: { animation: 'bets' }
  },
  {
    path: 'pro',
    loadChildren: () => import('./pro/pro.module').then((mod) => mod.ProModule),
    data: { animation: 'pro' }
    // canActivate: [AuthGuardService]
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./games/games.module').then((mod) => mod.GamesModule)
    // canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { animation: 'PageNotFound' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
