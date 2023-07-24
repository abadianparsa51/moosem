import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from './../submit.component';

@Component({
  selector: 'app-room-photo',
  templateUrl: './room-photo.component.html',
  styleUrls: ['./room-photo.component.scss']
})
export class RoomPhotoComponent implements OnInit {
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  prevBtnURlLink = '/hosting/submit/aboutroom';
  nextBtnURlLink = '/hosting/submit/roomcheckout';
  iconValue = 'icon-back_arrow';

  formTitle = 'اقامتگاه شما ظرفیت چه تعداد میهمان را دارد؟';

  selectboxInfo = [
    {
      title: 'تعداد اتاق خواب',
      content: [
        {
          title: 'اتاق خواب 2',
          value: 'اتاق خواب 2'
        }
      ]
    }
  ];
  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: '‎ظرفیت استاندارد / ظرفیت حداکثر‎',
          text:

            '‎تعداد نفرات تعیین شده در ‏‏‎ظرفیت استاندارد اقامتگاه ‎ مبنای محاسبه نرخ استاندارد اقامتگاه خواهد بود, هر تعداد میهمان بیش از ‏ظرفیت استاندارد مشمول ‏محاسبه "هزینه نفر اضافه" خواهد گردید. حداکثر ظرفیت ‎ ‎حداکثر گنجایش اقامتگاه می باشد که بر اساس فضا, امکانات موجود و امکانات خواب تعیین می گردد.'
        }
      ]
    }
  ];

  quantityValue: number;
  quantityMaxValue: number;
  constructor(private submit: SubmitComponent, private router: Router) { }

  ngOnInit() { }
  incProgress(): void {
    this.submit.increaseLevel();
    this.router.navigate([this.nextBtnURlLink]);
  }
  decProgress(): void {
    this.submit.decreaseLevel();
    this.router.navigate([this.prevBtnURlLink]);
  }

}
