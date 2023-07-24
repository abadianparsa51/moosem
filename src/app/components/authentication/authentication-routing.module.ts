import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: ModalContainerComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'signup',
        component: SignupComponent
      },
      { path: 'recovery', component: RecoverPasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
