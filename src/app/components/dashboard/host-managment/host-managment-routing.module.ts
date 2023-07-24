import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostManagmentComponent } from './host-managment.component';
import { EditPriceComponent } from './edit-price/edit-price.component';
import { HostCardComponent } from './host-card/host-card.component';
import { EditComponent } from './edit/edit.component';



const routes: Routes = [
  {
    path: '',
    component: HostManagmentComponent,
    children: [

      { path: '', component: HostCardComponent },
      { path: 'editPrice', component: EditPriceComponent },
      { path: 'edit', component: EditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostManagmentRoutingModule { }
