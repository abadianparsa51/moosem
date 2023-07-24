import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  arrowBtnTitle = "  ";
  arrowURLLink = "";
  arrowIcon = "icon-balance_up green-arrow-icon";
  arrowCustomClass = " btn ";

  arrowgBtnTitle = "  ";
  arrowgURLLink = "";
  arrowgIcon = "icon-balance_down red-arrow-icon";
  arrowgCustomClass = " btn ";


  price1Title = ' 20000 تومان';
  price1CustomClass = 'btn btn_blue_bordered3';
  price1URLLink = '';
  price1Icon = '';
  price2Title = ' تومان 50000';
  price2CustomClass = 'btn btn_blue_bordered3';
  price2URLLink = '';
  price2Icon = '';
  price3Title = '  تومان 1000000';
  price3CustomClass = 'btn btn_blue_bordered3';
  price3URLLink = '';
  price3Icon = '';
  price4Title = '  2000000 تومان';
  price4CustomClass = 'btn btn_blue_bordered3';
  price4URLLink = '';
  price4Icon = '';

  TransactionsTitle = ' تراکنش ها ';
  TransactionsCustomClass = 'btn btn_light_blue3 ';
  TransactionsURLLink = '/transaction';
  TransactionsIcon = 'icon-download_up';

  saveTitle = ' افزاریش اعتبار ';
  saveCustomClass = 'btn btn_blueB3 ';
  saveURLLink = '';
  saveIcon = '';

  // activeBtn : Boolean = false;

  // clicked(){
  //   this.activeBtn = 
  // }
  constructor() { }

  ngOnInit() {
  }

}
