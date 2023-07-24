import { TextareaModule } from './../../shared/textarea/textarea.module';
import { UploadModule } from './../../shared/upload/upload.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsModule } from '../../shared/inputs/inputs.module';
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { ButtonsModule } from './../../shared/buttons/buttons.module';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthProfileComponent } from './auth-profile/auth-profile.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { DateModule } from '../../shared/date/date.module';

@NgModule({
  declarations: [
    MyProfileComponent,
    EditProfileComponent,
    AuthProfileComponent,
    ChangePassComponent
  ],
  imports: [
    CommonModule,
    DateModule,
    MyProfileRoutingModule,
    ButtonsModule,
    InputsModule,
    UploadModule,
    TextareaModule,
    NgxDaterangepickerMd.forRoot()

  ]
})
export class MyProfileModule { }
