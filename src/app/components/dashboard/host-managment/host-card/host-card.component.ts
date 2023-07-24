import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-card',
  templateUrl: './host-card.component.html',
  styleUrls: ['./host-card.component.scss']
})
export class HostCardComponent implements OnInit {

  newResidenceRegistrationBtnName = "ثبت اقامتگاه جدید";
  newResidenceRegistrationURLLink = "/hosting/submit/baseInfo";
  newResidenceRegistrationBtnIcon = "icon-house-outline";
  newResidenceRegistrationCustomClass = "btn btn_blueBack";

  travelexperienceSubmitBtnName = "ثبت تجربه سفر";
  travelexperienceSubmitURLLink = "/travel-exprience/submit/baseInfo";
  // travelexperienceSubmitBtnIcon = "icon-house-outline";
  travelexperienceSubmitCustomClass = "btn btn_blueBack";

  constructor() { }

  ngOnInit() {

  }

}
