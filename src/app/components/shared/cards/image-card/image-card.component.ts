import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {


  editPriceBtnName = " ویرایش قیمت ";
  editPriceURLLink = "editPrice";
  editPriceBtnIcon = "  ";
  editPriceCustomClass = " btn btn_blueCurve";

  removeResidenceBtnName = " حذف اقامتگاه ";
  removeResidenceURLLink = "";
  removeResidenceBtnIcon = " icon-delete ";
  removeResidenceCustomClass = " btn btn_redCurve2";


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
