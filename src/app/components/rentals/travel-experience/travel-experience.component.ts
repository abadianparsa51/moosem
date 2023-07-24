import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-experience',
  templateUrl: './travel-experience.component.html',
  styleUrls: ['./travel-experience.component.scss']
})
export class TravelExperienceComponent implements OnInit {
  seeMoreTitleBtnName = 'مشاهده بیشتر';
  seeMoreCustomClass = 'btn btn_blue_bordered';
  seeMoreURLLink = '/authentication/login';
  constructor() {}

  ngOnInit() {}
}
