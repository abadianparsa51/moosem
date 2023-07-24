import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-checkout',
  templateUrl: './room-checkout.component.html',
  styleUrls: ['./room-checkout.component.scss']
})
export class RoomCheckoutComponent implements OnInit {
  formTitle = 'چه فضایی از اقامتگاه خود را به اجاره اختصاص می‌دهید؟';
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  nextBtnURlLink = '/hosting/submit/roompricing';
  prevBtnURlLink = '/hosting/submit/aboutroom';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  iconValue = 'icon-back_arrow';
  selectBoxContent = [
    {
      title: 'زمان تحویل از',
      content: [
        {
          title: 'زمان تحویل را مشخص کنید',
          value: 'زمان تحویل را مشخص کنید'
        }
      ]
    },
    {
      title: 'تا ساعت',
      content: [
        {
          title: 'بدون محدودیت',
          value: 'بدون محدودیت'
        }
      ]
    },
    {
      title: 'زمان خروج',
      content: [
        {
          title: 'زمان تخلیه را مشخص کنید',
          value: 'زمان تخلیه را مشخص کنید'
        }
      ]
    }
  ];
  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: '‎زمان تحویل و تخلیه',
          text:
            // tslint:disable-next-line:max-line-length
            '‎زمان تحویل اقامتگاه به میهمان بعدی می بایست با فاصله مناسب از زمان تخلیه اقامتگاه توسط میهمان قبلی تعیین گردد تا فرصت کافی برای نظافت و مرتب کردن خانه فراهم باشد. زمان تحویل بطور معمول ساعت 2 بعد از ظهر می باشد.‎ توجه: با انتخاب گزینه "نامحدود" آمادگی خواهید داشت تا در هر زمانی از شبانه روز, منزل را به میهمان تازه وارد تحویل دهید.'
        }
      ]
    }
  ];
  quantityVal: number;
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
  getQuantityValue(value: number): void {
    this.quantityVal = value;
  }
}
