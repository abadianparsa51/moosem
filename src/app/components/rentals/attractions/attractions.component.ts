import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss']
})
export class AttractionsComponent implements OnInit {
  seeMoreTitleBtnName = 'مشاهده بیشتر';
  seeMoreCustomClass = 'btn btn_blue_bordered';
  seeMoreURLLink = '/attractions';
  constructor() {}

  ngOnInit() {}
}
