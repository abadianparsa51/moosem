import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelExprienceRoutingModule } from './travel-exprience-routing.module';
import { ButtonsModule } from './../shared/buttons/buttons.module';
import { UploadModule } from './../shared/upload/upload.module';
import { UploadTravelModule } from './../shared/upload-travel/upload-travel.module';
import { MapModule } from './../shared/map/map.module';
import { TextareaModule } from './../shared/textarea/textarea.module';
import { InputsModule } from './../shared/inputs/inputs.module';
import { SelectBoxModule } from './../shared/select-box/select-box.module';
import { InfoCardComponent } from './submit/info-card/info-card.component';
import { SubmitComponent } from './submit/submit.component';
import { BaseInfoComponent } from './submit/base-info/base-info.component';
import { ProgressbarComponent } from './submit/progressbar/progressbar.component';
import { RoomLocationMapComponent } from './submit/room-location-map/room-location-map.component';
import { RoomNameComponent } from './submit/room-name/room-name.component';
import { RoomPricingComponent } from './submit/room-pricing/room-pricing.component';
import { CapacityInfoComponent } from './submit/capacity-info/capacity-info.component';
import { CardsModule } from './../shared/cards/cards.module';

@NgModule({
  declarations: [SubmitComponent, InfoCardComponent,
    ProgressbarComponent, BaseInfoComponent, RoomNameComponent,
    RoomLocationMapComponent, RoomPricingComponent, CapacityInfoComponent],
  imports: [
    ButtonsModule,
    CardsModule,
    UploadModule,
    UploadTravelModule,
    TextareaModule,
    SelectBoxModule,
    InputsModule,
    CommonModule,
    MapModule,
    TravelExprienceRoutingModule
  ]

})
export class TravelExprienceModule { }
