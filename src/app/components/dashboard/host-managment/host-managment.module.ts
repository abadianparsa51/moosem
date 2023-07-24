import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaModule } from './../../shared/textarea/textarea.module';
import { UploadModule } from './../../shared/upload/upload.module';
import { ButtonsModule } from './../../shared/buttons/buttons.module';
import { InputsModule } from './../../shared/inputs/inputs.module';
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { CardsModule } from '../../shared/cards/cards.module';
import { HostManagmentRoutingModule } from './host-managment-routing.module';
import { HostManagmentComponent } from './host-managment.component';
import { EditPriceComponent } from './edit-price/edit-price.component';
import { HostCardComponent } from './host-card/host-card.component';
import { EditComponent } from './edit/edit.component';
// import { HostManagmentCardComponent } from './host-managment-card/host-managment-card.component';
// import { RentalsModule } from '../../rentals/rentals.module';

@NgModule({
  declarations: [
    HostManagmentComponent,
    EditPriceComponent,
    HostCardComponent,
    EditComponent,
    // HostManagmentCardComponent
  ],
  imports: [
    CommonModule,
    // RentalsModule,
    CardsModule,
    ButtonsModule,
    InputsModule,
    UploadModule,
    TextareaModule,
    HostManagmentRoutingModule,
    NgxDaterangepickerMd.forRoot()


  ]
})
export class HostManagmentModule { }
