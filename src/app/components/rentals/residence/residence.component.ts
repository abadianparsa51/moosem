import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.scss']
})
export class ResidenceComponent implements OnInit {
  seeMoreTitleBtnName = 'مشاهده بیشتر';
  seeMoreCustomClass = 'btn btn_blue_bordered';
  seeMoreURLLink = '/cities';
  @Input() cardDatas: any;
  constructor() { }

  ngOnInit() {
  }

}
