import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-reserve',
  templateUrl: './my-reserve.component.html',
  styleUrls: ['./my-reserve.component.scss']
})
export class MyReserveComponent implements OnInit {
  awaitingApprovalTitle= 'در انتظار تایید';
  awaitingApprovalCustomClass = 'link link_blue';
  awaitingApprovalURLLink = 'awaitingApproval';
  awaitingApprovalIcon ='icon-time_left';
  cancelTitle ='رد شده';
  cancelCustomClass = 'link link_blue';
  cancelURLLink = 'cancel';
  cancelIcon ='icon-close';
  paidFinalizedTitle ='پرداخت و نهایی شده';
  paidFinalizedCustomClass = 'link link_blue';
  paidFinalizedURLLink = 'paidFinalized';
  paidFinalizedIcon ='icon-card';
  clientWaittingTitle ='در انتظار تایید';
  clientWaittingCustomClass = 'link link_blue';
  clientWaittingURLLink = 'clientWaiting';
  clientWaittingIcon ='icon-time_left';
  awaitingPaymentTitle ='در انتظار پرداخت';
  awaitingPaymentCustomClass = 'link link_blue';
  awaitingPaymentURLLink = 'awaitingPayment';
  awaitingPaymentIcon ='icon-awaiting_payment';
  finalizedReservationsTitle ='رزروهای نهایی شده';
  finalizedReservationsCustomClass = 'link link_blue';
  finalizedReservationsURLLink = 'finalizedReservations';
  finalizedReservationsIcon ='icon-card';
  clientCancelTitle ='رد شده';
  clientCancelCustomClass = 'link link_blue';
  clientCancelURLLink = 'clientCancel';
  clientCancelIcon ='icon-close';



  constructor() {}

  ngOnInit() {}
}
