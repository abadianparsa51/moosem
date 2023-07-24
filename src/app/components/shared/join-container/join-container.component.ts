import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-join-container',
  templateUrl: './join-container.component.html',
  styleUrls: ['./join-container.component.scss']
})
export class JoinContainerComponent implements OnInit {
  title = 'برای مشاهده پیشنهاد‌های بهتر قسمت علاقه‌مندی‌تان را کامل کنید';
  loginTitleBtnName = 'ورود به سایت';
  loginCustomClass = 'btn btn_blue';
  loginURLLink = 'authentication/login';
  signupTitleBtnName = 'عضویت سریع';
  signupCustomClass = 'btn btn_blue_bordered';
  signUpURLLink = 'authentication/signup';
  constructor() {}

  ngOnInit() {}
}
