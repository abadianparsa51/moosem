import { ChangePassComponent } from './change-pass/change-pass.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile.component';
import { AuthProfileComponent } from './auth-profile/auth-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    component: MyProfileComponent,
    children: [
      { path: 'editInfo', component: EditProfileComponent },
      { path: 'authInfo', component: AuthProfileComponent },
      { path: 'changePassword', component: ChangePassComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
