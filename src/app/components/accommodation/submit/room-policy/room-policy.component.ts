import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-policy',
  templateUrl: './room-policy.component.html',
  styleUrls: ['./room-policy.component.scss']
})
export class RoomPolicyComponent implements OnInit {
  selectbox = [
    {
      title: 'آوردن حیوانات خانگی به این اقامتگاه ممنوع است.',
      input: false
    },
    {
      title:
        'استعمال دخانیات (سیگار, قلیان, ...) در فضاهای داخلی اقامتگاه ممنوع است.',
      input: false
    },
    { title: 'برگذاری میهمانی ممنوع است.', input: false }
  ];
  formTitle = 'مقررات اقامتگاه خود را برای اطلاع میهمانان مشخص کنید';
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  nextBtnURlLink = '/hosting/submit/cancelation';
  prevBtnURlLink = '/hosting/submit/roompricing';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  iconValue = 'icon-back_arrow';
  textareaVal = '';
  textareaTitle = 'مقررات بیشتر';
  textareaPlaceholder = 'در اینجا می توانید مقررات بیشتری اضافه کنید';
  textareaClass = '';
  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: '‎تعادل در تعیین مقررات',
          text:
            // tslint:disable-next-line:max-line-length
            '‎‎توجه: تنها میهمانانی که تمامی مقررات اقامتگاه شما را می پذیرند قادر به رزرو اقامتگاه خواهند بود, لذا با رعایت تعادل در تعیین مقررات ‏تعداد کمتری از میهمانان را از دست خواهید داد‎'
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
