import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitComponent } from './submit/submit.component';
import { BaseInfoComponent } from './submit/base-info/base-info.component';
import { RoomLocationMapComponent } from './submit/room-location-map/room-location-map.component';
import { RoomNameComponent } from './submit/room-name/room-name.component';
import { RoomPricingComponent } from './submit/room-pricing/room-pricing.component';
import { CapacityInfoComponent } from './submit/capacity-info/capacity-info.component';

const submitHostRoutes: Routes = [
  {
    path: '',
    component: SubmitComponent,
    children: [
      { path: 'baseInfo', component: BaseInfoComponent },
      {
        path: 'locationmap',
        component: RoomLocationMapComponent
      },
      {
        path: 'setroomtitle',
        component: RoomNameComponent
      },
      {
        path: 'roompricing',
        component: RoomPricingComponent
      },
      {
        path: 'capacityInfo',
        component: CapacityInfoComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(submitHostRoutes)],
  exports: [RouterModule]
})
export class TravelExprienceRoutingModule { }
