import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mobileType = 'tel';
  mobileVal = '';
  mobileplaceholder = '09123456789';
  mobilehideIcon = '';
  passType = 'password';
  passVal = '';
  passplaceholder = 'رمز عبور';
  inputClass = 'center';
  hideIcon = 'icon-hide';
  constructor() { }

  ngOnInit() { }
}
