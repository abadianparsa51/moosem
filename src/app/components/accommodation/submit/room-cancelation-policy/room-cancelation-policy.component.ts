import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-cancelation-policy',
  templateUrl: './room-cancelation-policy.component.html',
  styleUrls: ['./room-cancelation-policy.component.scss']
})
export class RoomCancelationPolicyComponent implements OnInit {
  formTitle = '‎مقررات لغو رزرو اقامتگاه خود را تعیین نمایید';
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  nextBtnURlLink = '/hosting/submit/hostingpolicy';
  prevBtnURlLink = '/hosting/submit/safefeature';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  iconValue = 'icon-back_arrow';

  selectboxtitle = 'قانون لغو';
  selectboxcontent = [
    {
      title: 'انتخاب قوانین',
      value: 'انتخاب قوانین'
    }
  ];
  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: 'مقررات لغو رزرو اقامتگاه',
          text:
            // tslint:disable-next-line:max-line-length
            '‎در این قسمت میزبان تعیین می کند در صورتی که میهمان, رزرو قطعی شده خود را لغو کند, چه عواقبی برای او (میهمان) به همراه خواهد داشت سیاست لغو رزرو هر اقامتگاه در "نمایه" آن اقامتگاه و همچنین اسناد رزرو ثبت گردیده و قابل مشاهده خواهد بود, لذا میهمان پیش از رزرو اقامتگاه و یا لغو رزرو خود از عواقب مالی آن آگاه خواهد بود. در صورت لغو رزرو قطعی, هرگونه بازگشت وجوه مطابق مقررات لغو رزرو همان اقامتگاه انجام خواهد شد.‎'
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
