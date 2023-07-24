import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-location',
  templateUrl: './room-location.component.html',
  styleUrls: ['./room-location.component.scss']
})
export class RoomLocationComponent implements OnInit {
  formTitle = 'مکان اقامتگاه خود را در نقشه مشخص کنید';
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  nextBtnURlLink = '/hosting/submit/locationmap';
  prevBtnURlLink = '/hosting/submit/roomfeature';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  iconValue = 'icon-back_arrow';
  inputType = 'text';
  inputVal = '';
  inputPlaceholder = 'نام محله اختیاری می‌باشد';
  inputIcon = '';
  inputClass = '';
  selectBoxContent = [
    {
      title: 'استان',
      content: [
        {
          title: 'انتخاب استان',
          value: 'انتخاب استان'
        }
      ]
    },
    {
      title: 'شهر/منطقه',
      content: [
        {
          title: 'انتخاب شهر/منطقه',
          value: 'انتخاب شهر/منطقه'
        }
      ]
    }
  ];
  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: '‎آدرس اقامتگاه‎',
          text:
            '‎‏ آدرس دقیق اقامتگاه, تنها پس از ‎قطعی شدن رزرو‎, به اطلاع میهمان خواهد رسید‎.‎‎درج کد پستی اختیاری است.'
        }
      ]
    }
  ];
  textareaVal = '';
  textareaTitle = 'آدرس اقامتگاه';
  textareaPlaceholder = 'آدرس را به صورت کامل بنویسید';
  textareaClass = '';
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
