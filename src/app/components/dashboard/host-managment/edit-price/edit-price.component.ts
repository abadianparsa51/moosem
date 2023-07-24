import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-price',
  templateUrl: './edit-price.component.html',
  styleUrls: ['./edit-price.component.scss']
})
export class EditPriceComponent implements OnInit {

  newResidenceRegistrationBtnName = " ذخیره ";
  newResidenceRegistrationURLLink = "/hosting/submit/baseInfo";
  newResidenceRegistrationBtnIcon = "  ";
  newResidenceRegistrationCustomClass = "btn btn_blueSave";


  addResidenceGuideBtnName = " راهنمای افزودن اقامتگاه ";
  addResidenceGuideURLLink = "/hosting/submit/baseInfo";
  addResidenceGuideBtnIcon = "  ";
  addResidenceGuideCustomClass = "btn btn_blueGuid";

  constructor() { }

  ngOnInit() {
  }

}
