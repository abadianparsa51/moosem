import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-managment-card',
  templateUrl: './host-managment-card.component.html',
  styleUrls: ['./host-managment-card.component.scss']
})
export class HostManagmentCardComponent implements OnInit {
  editPriceBtnName = " ویرایش قیمت ";
  editPriceURLLink = "editPrice";
  editPriceBtnIcon = "  ";
  editPriceCustomClass = " btn btn_blueCurve";

  removeResidenceBtnName = " حذف اقامتگاه ";
  removeResidenceURLLink = "";
  removeResidenceBtnIcon = " icon-delete ";
  removeResidenceCustomClass = " btn btn_redCurve";


  editBtnName = " ویرایش ";
  editURLLink = "edit";
  editBtnIcon = "  ";
  editCustomClass = " btn btn_blueB";

  priceCalendarBtnName = "تقویم قیمت ";
  priceCalendarURLLink = "  ";
  priceCalendarBtnIcon = "  ";
  priceCalendarCustomClass = "btn btn_light_blueB  ";


  constructor() { }

  ngOnInit() {
  }

}
