import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-pricing',
  templateUrl: './room-pricing.component.html',
  styleUrls: ['./room-pricing.component.scss']
})
export class RoomPricingComponent implements OnInit {
  formTitle = '‎قیمت دهی شما بر اساس هر نفر در شب میباشد؟‎';
  secformTitle = 'نرخ اجاره بهای اقامتگاه را وارد کنید‎';
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  nextBtnURlLink = '/hosting/submit/setpolicy';
  prevBtnURlLink = '/hosting/submit/roomcheckout';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  iconValue = 'icon-back_arrow';
  inputInfo = [
    {
      title: 'قیمت عادی',
      inputType: 'number',
      inputVal: '',
      inputPlaceholder: 'ملبغ را وارد کنید ( تومان )',
      inputIcon: '',
      inputClass: ''
    },
    {
      title: 'قیمت آخر هفته',
      inputType: 'number',
      inputVal: '',
      inputPlaceholder: 'ملبغ را وارد کنید ( تومان )',
      inputIcon: '',
      inputClass: ''
    },
    {
      title: 'قیمت ایام خاص',
      inputType: 'number',
      inputVal: '',
      inputPlaceholder: 'ملبغ را وارد کنید ( تومان )',
      inputIcon: '',
      inputClass: ''
    },
    {
      title: 'قیمت نفرات اضافی',
      inputType: 'number',
      inputVal: '',
      inputPlaceholder: 'ملبغ را وارد کنید ( تومان )',
      inputIcon: '',
      inputClass: ''
    }
  ];
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
