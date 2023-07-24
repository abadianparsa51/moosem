import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { MyCreditComponent } from './my-credit/my-credit.component';
// import { MyMessagesComponent } from './my-messages/my-messages.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
// import { FavoriteComponent } from './favorite/favorite.component';



@NgModule({
  declarations: [
    // FavoriteComponent,
    DashboardComponent,
    // MyCreditComponent,
    // MyMessagesComponent,
    DashboardNavComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule { }

