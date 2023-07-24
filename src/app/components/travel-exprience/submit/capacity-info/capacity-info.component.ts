import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';

@Component({
  selector: 'app-capacity-info',
  templateUrl: './capacity-info.component.html',
  styleUrls: ['./capacity-info.component.scss']
})
export class CapacityInfoComponent implements OnInit {
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  prevBtnURlLink = '/hosting/submit/baseInfo';
  nextBtnURlLink = '/hosting/submit/roomfeature';
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
            // tslint:disable-next-line:max-line-length
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
