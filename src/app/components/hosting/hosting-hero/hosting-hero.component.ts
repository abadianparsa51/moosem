import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosting-hero',
  templateUrl: './hosting-hero.component.html',
  styleUrls: ['./hosting-hero.component.scss']
})
export class HostingHeroComponent implements OnInit {
  hostTitleBtnName = 'میزبان شوید';
  hostCustomClass = 'btn btn_blue';
  hostURlLink = '/hosting/submit/baseInfo';
  btnIcon = '';
  constructor() {}

  ngOnInit() {}
}
