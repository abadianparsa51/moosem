import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extra-room-feature',
  templateUrl: './extra-room-feature.component.html',
  styleUrls: ['./extra-room-feature.component.scss']
})
export class ExtraRoomFeatureComponent implements OnInit {
  selectbox = [
    { title: 'اینترنت بی‌سیم', placeholder: 'مثال وای فای', input: true },
    { title: 'هود', placeholder: 'مثال bimax', input: true },
    {
      title: 'کولر گازی',
      placeholder: 'مثال کولر گازی 21000 سامسونگ',
      input: true
    },
    { title: 'سیستم گرمایشی', placeholder: 'مثال وای فای', input: true },
    { title: 'یخچال', placeholder: 'مثال وای فای', input: true }
  ];
  formTitle = 'امکانات و تجهیزات موجود در اقامتگاه خود را مشخص نمایید‏‏';
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  nextBtnURlLink = '/hosting/submit/necessaryfeature';
  prevBtnURlLink = '/hosting/submit/locationmap';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  iconValue = 'icon-back_arrow';
  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: 'امکانات اقامتگاه',
          text:
            '‎در این قسمت امکانات موجود در اقامتگاه را مشخص کنید. همچنین می توانید توضیحات تکمیلی هر گزینه را در کادر روبری آن ‏وارد کنید. '
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
