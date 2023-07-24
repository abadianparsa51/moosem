import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-name',
  templateUrl: './room-name.component.html',
  styleUrls: ['./room-name.component.scss']
})
export class RoomNameComponent implements OnInit {
  formTitle = 'نرخ بهای تجربه سفر را وارد کنید';
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  nextBtnURlLink = '/travel-exprience/submit/capacityInfo';
  prevBtnURlLink = '/travel-exprience/submit/roomprice';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  iconValue = 'icon-back_arrow';
  inputType = 'text';
  inputVal = '';
  inputPlaceholder = 'ملبغ را وارد کنید';
  inputIcon = '';
  inputClass = '';
  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: 'قیمت عادی',
          text:
            // tslint:disable-next-line:max-line-length
            ' ‎میزان تخفیف تخصیص یافته به رزروهای هفتگی‎‎(رزرو 7 روز تا 29 روز) '
        }, {
          title: 'قیمت عادی',
          text:
            // tslint:disable-next-line:max-line-length
            ' ‎میزان تخفیف تخصیص یافته به رزروهای هفتگی‎‎(رزرو 7 روز تا 29 روز) '
        }
      ]
    }
  ];
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
