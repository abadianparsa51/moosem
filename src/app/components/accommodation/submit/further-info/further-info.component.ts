import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-further-info',
  templateUrl: './further-info.component.html',
  styleUrls: ['./further-info.component.scss']
})
export class FurtherInfoComponent implements OnInit {
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  prevBtnURlLink = '/hosting/submit/capacityInfo';
  nextBtnURlLink = '/hosting/submit/roomfeature';
  iconValue = 'icon-back_arrow';

  formTitle = 'آیا در اقامتگاه شما خدمات ویژه یا پذیرایی با پرداخت هزینه اضافی ارائه میشود؟';

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
  getCapacityValue(value: number): void {
    this.quantityValue = value;
  }
  getMaxCapacityValue(value: number): void {
    this.quantityMaxValue = value;
  }
  checkQuantities(): boolean {
    if (this.quantityMaxValue < this.quantityValue) {
      return true;
    } else {
      return false;
    }
  }
}
