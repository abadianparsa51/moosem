import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-name',
  templateUrl: './room-name.component.html',
  styleUrls: ['./room-name.component.scss']
})
export class RoomNameComponent implements OnInit {
  formTitle = '‎عنوانی برای اقامتگاه خود انتخاب کنید‎';
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  nextBtnURlLink = '/hosting/submit/aboutroom';
  prevBtnURlLink = '/hosting/submit/safefeature';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  iconValue = 'icon-back_arrow';
  inputType = 'text';
  inputVal = '';
  inputPlaceholder = 'عنوان اقامتگاه دلخواه خود را بنویسید';
  inputIcon = '';
  inputClass = '';
  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: 'نام گذاری اقامتگاه',
          text:
            // tslint:disable-next-line:max-line-length
            '‎‎نامی انتخاب کنید که با خصوصیات اقامتگاه شما متناسب باشد تا آن را از بقیه اقامتگاه ها ‏متمایز کند و در یادها بماند.‏‎ ‎چند مثال ویلا ساحلی دوبلکس - رامسر کلبه چوبی ‏دلباز - کاشان‎سوئیت دو خوابه رو به باغ - ارومیه‎'
        }
      ]
    }
  ];
  constructor(private submit: SubmitComponent, private router: Router) {}

  ngOnInit() {}
  incProgress(): void {
    this.submit.increaseLevel();
    this.router.navigate([this.nextBtnURlLink]);
  }
  decProgress(): void {
    this.submit.decreaseLevel();
    this.router.navigate([this.prevBtnURlLink]);
  }
}
