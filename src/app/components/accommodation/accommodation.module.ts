import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaModule } from './../shared/textarea/textarea.module';
import { InputsModule } from './../shared/inputs/inputs.module';
import { AccommodationRoutingModule } from './accommodation-routing.module';
import { SelectBoxModule } from '../shared/select-box/select-box.module';

import { SubmitComponent } from './submit/submit.component';
import { ProgressbarComponent } from './submit/progressbar/progressbar.component';
import { BaseInfoComponent } from './submit/base-info/base-info.component';
import { CapacityInfoComponent } from './submit/capacity-info/capacity-info.component';

import { QuantityModule } from '../shared/quantity/quantity.module';
import { RoomFeatureComponent } from './submit/room-feature/room-feature.component';
import { RoomLocationComponent } from './submit/room-location/room-location.component';
import { RoomLocationMapComponent } from './submit/room-location-map/room-location-map.component';
import { ExtraRoomFeatureComponent } from './submit/extra-room-feature/extra-room-feature.component';
import { NecessaryFeatureComponent } from './submit/necessary-feature/necessary-feature.component';
import { SafeFeatureComponent } from './submit/safe-feature/safe-feature.component';
import { RoomNameComponent } from './submit/room-name/room-name.component';
import { RoomDescriptionComponent } from './submit/room-description/room-description.component';
import { RoomCheckoutComponent } from './submit/room-checkout/room-checkout.component';
import { RoomPricingComponent } from './submit/room-pricing/room-pricing.component';
import { RoomPolicyComponent } from './submit/room-policy/room-policy.component';
import { RoomCancelationPolicyComponent } from './submit/room-cancelation-policy/room-cancelation-policy.component';
import { HostingPolicyComponent } from './submit/hosting-policy/hosting-policy.component';
import { ExtraServiceComponent } from './submit/extra-service/extra-service.component';
import { SetRoomBedsComponent } from './submit/room-feature/set-room-beds/set-room-beds.component';

import { ButtonsModule } from '../shared/buttons/buttons.module';
import { InfoCardComponent } from './submit/info-card/info-card.component';
import { SelectboxComponent } from './submit/extra-room-feature/selectbox/selectbox.component';
import { MapModule } from '../shared/map/map.module';
import { RoomPhotoComponent } from './submit/room-photo/room-photo.component';
import { CardsModule } from './../shared/cards/cards.module';
// import { ImageCardComponent } from './../shared/cards/image-card/image-card.component';
import { UploadTravelModule } from './../shared/upload-travel/upload-travel.module';
import { FurtherInfoComponent } from './submit/further-info/further-info.component';
import { SetInfoComponent } from './submit/further-info/set-info/set-info.component';


@NgModule({
  declarations: [
    SubmitComponent,
    ProgressbarComponent,
    BaseInfoComponent,
    CapacityInfoComponent,
    InfoCardComponent,
    RoomFeatureComponent,
    RoomLocationComponent,
    RoomLocationMapComponent,
    ExtraRoomFeatureComponent,
    NecessaryFeatureComponent,
    SafeFeatureComponent,
    RoomNameComponent,
    // ImageCardComponent,
    RoomDescriptionComponent,
    RoomCheckoutComponent,
    RoomPricingComponent,
    RoomPolicyComponent,
    RoomCancelationPolicyComponent,
    HostingPolicyComponent,
    ExtraServiceComponent,
    SetRoomBedsComponent,
    SelectboxComponent,
    RoomPhotoComponent,
    FurtherInfoComponent,
    SetInfoComponent
  ],
  imports: [
    CommonModule,
    AccommodationRoutingModule,
    SelectBoxModule,
    InputsModule,
    TextareaModule,
    MapModule,
    ButtonsModule,
    CardsModule,
    QuantityModule,
    UploadTravelModule
  ],
  providers: [SubmitComponent]
})
export class AccommodationModule { }
