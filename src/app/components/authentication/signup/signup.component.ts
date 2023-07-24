import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  nameType = 'text';
  nameVal = '';
  nameplaceholder = 'نام';
  familynameType = 'text';
  familynameVal = '';
  familynameplaceholder = 'نام خانوداگی';
  mobileType = 'tel';
  mobileVal = '';
  mobileplaceholder = '09123456789';
  mobilehideIcon = '';
  passwordType = 'password';
  passwordVal = '';
  passwordplaceholder = 'رمز عبور';
  emailType = 'email';
  emailVal = '';
  emailplaceholder = 'ایمیل';
  constructor() {}

  ngOnInit() {}
  checkVal() {
    console.log(this.mobileVal);
  }
}
