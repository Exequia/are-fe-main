import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';

import { NewUserComponent } from './views/new-user/new-user.component';
import { UpdateUserComponent } from './views/update-user/update-user.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'Login' }
  },
  {
    path: 'signUp',
    component: NewUserComponent,
    canActivate: [AuthGuardService],
    data: { animation: 'NewUser' }
  },
  {
    path: 'update',
    component: UpdateUserComponent,
    canActivate: [AuthGuardService],
    data: { animation: 'UpdateUser' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
