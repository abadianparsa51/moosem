import { TextareaModule } from './../../shared/textarea/textarea.module';
import { UploadModule } from './../../shared/upload/upload.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '../../shared/buttons/buttons.module';
import { MyReserveRoutingModule } from './my-reserve-routing.module';
import { InputsModule } from '../../shared/inputs/inputs.module';
import { MyReserveComponent } from './my-reserve.component';
import { AwaitingApprovalComponent } from './awaiting-approval/awaiting-approval.component';
import { CancelComponent } from './cancel/cancel.component';
import { PaidFinalizedComponent } from './paid-finalized/paid-finalized.component';
import { ClientWaitingComponent } from './client-waiting/client-waiting.component';
import { AwaitingPaymentComponent } from './awaiting-payment/awaiting-payment.component';
import { FinalizedReservationsComponent } from './finalized-reservations/finalized-reservations.component';
import { ClientCancelComponent } from './client-cancel/client-cancel.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    MyReserveComponent,
    AwaitingApprovalComponent,
    CancelComponent,
    PaidFinalizedComponent,
    ClientWaitingComponent,
    AwaitingPaymentComponent,
    FinalizedReservationsComponent,

    ClientCancelComponent,],

  imports: [
    CommonModule,
    MyReserveRoutingModule,
    ButtonsModule,
    InputsModule,
    UploadModule,
    SharedModule,
    TextareaModule,
    // TabelModule,
    // NgxDaterangepickerMd.forRoot()

  ]
})
export class MyReserveeModule { }
