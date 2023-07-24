import { InputsModule } from './../shared/inputs/inputs.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ButtonsModule } from '../shared/buttons/buttons.module';
import { SocialAuthComponent } from './social-auth/social-auth.component';

@NgModule({
  declarations: [
    ModalContainerComponent,
    LoginComponent,
    SignupComponent,
    RecoverPasswordComponent,
    SocialAuthComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    InputsModule,
    ButtonsModule
  ]
})
export class AuthenticationModule {}
