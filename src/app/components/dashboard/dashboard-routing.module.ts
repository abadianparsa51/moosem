import { MyMessagesComponent } from './my-messages/my-messages.component';
import { MyCreditComponent } from './my-credit/my-credit.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostManagmentComponent } from './host-managment/host-managment.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'myProfile',
        loadChildren: () =>
          import('./my-profile/my-profile.module').then(m => m.MyProfileModule)
      },
      {
        path: 'myReserve', loadChildren: () =>
          import('./my-reserve/my-reserve.module').then(m => m.MyReserveeModule)
      },
      {
        path: 'hostManagment', loadChildren: () =>
          import('./host-managment/host-managment.module').then(m => m.HostManagmentModule)
      },
      {
        path: 'favorite', loadChildren: () =>
          import('./favorite/favorite.module').then(m => m.FavoriteModule)
      },
      {
        path: 'myCredit', loadChildren: () =>
          import('./my-credit/my-credit.module').then(m => m.MyCreditModule)
      }, {
        path: 'myMessages', loadChildren: () =>
          import('./my-messages/my-messages.module').then(m => m.MyMessagesModule)
      },
      // { path: 'myMessages', component: MyMessagesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
