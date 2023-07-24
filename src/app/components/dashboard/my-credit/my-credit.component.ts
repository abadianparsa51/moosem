import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-credit',
  templateUrl: './my-credit.component.html',
  styleUrls: ['./my-credit.component.scss']
})
export class MyCreditComponent implements OnInit {

  increaseCreditlTitle = '  + افزایش اعتبار';
  increaseCreditCustomClass = 'btn btn_light_green2';
  increaseCreditURLLink = 'increaseCredit';
  increaseCreditIcon = '';

  TransactionsTitle = ' تراکنش ها ';
  TransactionsCustomClass = 'btn btn_light_blue3 ';
  TransactionsURLLink = 'transaction';
  TransactionsIcon = 'icon-download_up';

  constructor() { }

  ngOnInit() {
  }

}
