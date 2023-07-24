import { HostingPolicyComponent } from './submit/hosting-policy/hosting-policy.component';
import { RoomCancelationPolicyComponent } from './submit/room-cancelation-policy/room-cancelation-policy.component';
import { ExtraRoomFeatureComponent } from './submit/extra-room-feature/extra-room-feature.component';
import { RoomLocationMapComponent } from './submit/room-location-map/room-location-map.component';
import { RoomLocationComponent } from './submit/room-location/room-location.component';
import { CapacityInfoComponent } from './submit/capacity-info/capacity-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitComponent } from './submit/submit.component';
import { BaseInfoComponent } from './submit/base-info/base-info.component';
import { RoomFeatureComponent } from './submit/room-feature/room-feature.component';
import { NecessaryFeatureComponent } from './submit/necessary-feature/necessary-feature.component';
import { SafeFeatureComponent } from './submit/safe-feature/safe-feature.component';
import { RoomNameComponent } from './submit/room-name/room-name.component';
import { RoomDescriptionComponent } from './submit/room-description/room-description.component';
import { RoomCheckoutComponent } from './submit/room-checkout/room-checkout.component';
import { RoomPricingComponent } from './submit/room-pricing/room-pricing.component';
import { RoomPolicyComponent } from './submit/room-policy/room-policy.component';
import { RoomPhotoComponent } from './submit/room-photo/room-photo.component';
import { FurtherInfoComponent } from './submit/further-info/further-info.component';

const submitHostRoutes: Routes = [
  {
    path: '',
    component: SubmitComponent,
    children: [
      { path: 'baseInfo', component: BaseInfoComponent },
      {
        path: 'capacityInfo',
        component: CapacityInfoComponent
      },
      {
        path: 'roomfeature',
        component: RoomFeatureComponent
      }, {
        path: 'furtherInfo',
        component: FurtherInfoComponent
      },
      {
        path: 'location',
        component: RoomLocationComponent
      },
      {
        path: 'locationmap',
        component: RoomLocationMapComponent
      },
      {
        path: 'roomextrafeature',
        component: ExtraRoomFeatureComponent
      },
      {
        path: 'necessaryfeature',
        component: NecessaryFeatureComponent
      },
      {
        path: 'safefeature',
        component: SafeFeatureComponent
      },
      {
        path: 'setroomtitle',
        component: RoomNameComponent
      },
      {
        path: 'aboutroom',
        component: RoomDescriptionComponent
      }, {
        path: 'roomphoto',
        component: RoomPhotoComponent
      },
      {
        path: 'roomcheckout',
        component: RoomCheckoutComponent
      },
      {
        path: 'roompricing',
        component: RoomPricingComponent
      },
      {
        path: 'setpolicy',
        component: RoomPolicyComponent
      },
      {
        path: 'cancelation',
        component: RoomCancelationPolicyComponent
      },
      {
        path: 'hostingpolicy',
        component: HostingPolicyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(submitHostRoutes)],
  exports: [RouterModule]
})
export class AccommodationRoutingModule { }
