import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyReserveComponent } from './my-reserve.component';
import { AwaitingApprovalComponent } from './awaiting-approval/awaiting-approval.component';
import { CancelComponent} from './cancel/cancel.component';
import {PaidFinalizedComponent } from './paid-finalized/paid-finalized.component';
import {ClientWaitingComponent} from './client-waiting/client-waiting.component'
import {AwaitingPaymentComponent} from './awaiting-payment/awaiting-payment.component';
import {FinalizedReservationsComponent} from './finalized-reservations/finalized-reservations.component';
import {ClientCancelComponent} from './client-cancel/client-cancel.component';
  

const routes: Routes = [
  {
    path: '',
    component: MyReserveComponent,
    children: [
      { path: 'awaitingApproval', component: AwaitingApprovalComponent },
      { path: 'cancel', component: CancelComponent },
      { path: 'paidFinalized', component: PaidFinalizedComponent },
      { path: 'clientWaiting', component: ClientWaitingComponent },
      { path: 'awaitingPayment', component: AwaitingPaymentComponent },
      { path: 'finalizedReservations', component: FinalizedReservationsComponent },
      { path: 'clientCancel', component: ClientCancelComponent },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyReserveRoutingModule {}
