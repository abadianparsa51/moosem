import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
  mobileType = 'tel';
  mobileVal = '';
  mobileplaceholder = 'شماره موبایل خود را وارد نمایید';
  codeType = 'text';
  codeVal = '';
  codeplaceholder = 'کد بازیابی پیامک شده';
  newpassType = 'password';
  newpassVal = '';
  newpassplaceholder = 'رمز عبور جدید';
  newpasscheckType = 'password';
  newpasscheckVal = '';
  newpasscheckplaceholder = 'تکرار رمز عبور جدید';
  getmobile = true;
  constructor() {}

  ngOnInit() {}
  getMobileFun() {
    this.getmobile = this.getmobile === true ? false : true;
  }
}
