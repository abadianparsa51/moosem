import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-landing',
  templateUrl: './app-landing.component.html',
  styleUrls: ['./app-landing.component.scss']
})
export class AppLandingComponent implements OnInit {
  titleForQA = 'سوالات متداول';
  titleBgForQA = '#ffd265';
  constructor() {}

  ngOnInit() {}
}
