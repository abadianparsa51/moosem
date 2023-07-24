import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  arrowURLLink = "";
  arrowIcon = "icon-balance_up green-arrow-icon";
  arrowCustomClass = " btn ";

  arrowgBtnTitle = "  ";
  arrowgURLLink = "";
  arrowgIcon = "icon-balance_down red-arrow-icon";
  arrowgCustomClass = " btn ";


  increaseCreditlTitle = '  + افزایش اعتبار';
  increaseCreditCustomClass = 'btn btn_light_green2';
  increaseCreditURLLink = '';
  increaseCreditIcon = '';

  TransactionsTitle = ' تراکنش ها ';
  TransactionsCustomClass = 'btn btn_light_blue3 ';
  TransactionsURLLink = '/transaction';
  TransactionsIcon = 'icon-download_up';
  constructor() { }

  ngOnInit() {
  }

}
