import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then(mod => mod.UsersModule)
  },
  {
    path: 'bets',
    loadChildren: () => import('./bets/bets.module').then(mod => mod.BetsModule)
  },
  {
    path: 'pro',
    loadChildren: () => import('./pro/pro.module').then(mod => mod.ProModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
