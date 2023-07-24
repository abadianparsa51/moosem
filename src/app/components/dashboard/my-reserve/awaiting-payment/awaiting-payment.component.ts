import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awaiting-payment',
  templateUrl: './awaiting-payment.component.html',
  styleUrls: ['./awaiting-payment.component.scss']
})
export class AwaitingPaymentComponent implements OnInit {
  paymentTitle ='پرداخت';
  paymentCustomClass = 'btn btn_light_green';
  paymentURLLink = '';
  paymentIcon ='';
  constructor() { }

  ngOnInit() {
  }

}
