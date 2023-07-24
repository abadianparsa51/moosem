import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMessagesComponent } from './my-messages.component'
const routes: Routes = [
  { path: '', component: MyMessagesComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyMessagesRoutingModule { }
