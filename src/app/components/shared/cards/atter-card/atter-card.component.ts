import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-atter-card',
  templateUrl: './atter-card.component.html',
  styleUrls: ['./atter-card.component.scss']
})
export class AtterCardComponent implements OnInit {
  reserveBtnTitle = 'درخواست رزرو';
  reserveCustomClass = 'btn btn_blue2 flex-col center-md';
  reserveBtnUrl = '/room';

  selectionBtnTitle = 'انتخاب';
  selectionCustomClass = 'btn btn_blue_bordered2';
  selectionBtnUrl = '';



  selected: { startDate: Moment; endDate: Moment };
  selectTitle = '';


  selectbox2 = [
    { title: 'با صبحانه محلی', input: true },
    { title: ' با ناهار شام محلی ', input: true },

  ];

  toolTipDate: any[] = [
    { title: "یکشنبه ۱۹ خرداد", price: "65000تومان" },
    { title: "دوشنبه ۲۰ خرداد :", price: "65000تومان" },
    { title: "سه شنبه ۲۱ خرداد", price: " 65000تومان" },
    { title: "پنج شنبه ۲۳ خرداد", price: " 65000تومان " },
    { title: "شنبه ۲۵ خرداد", price: " 65000تومان " },
    { title: "شنبه ۲6 خرداد ", price: " 65000تومان " },
  ]




  constructor() { }
  ngOnInit() { }
}
