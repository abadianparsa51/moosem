import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-feature',
  templateUrl: './room-feature.component.html',
  styleUrls: ['./room-feature.component.scss']
})
export class RoomFeatureComponent implements OnInit {
  formTitle = 'امکانات خواب اقامتگاه';
  subformTitle = 'جزئیات فضای خواب';
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  nextBtnURlLink = '/hosting/submit/location';
  prevBtnURlLink = '/hosting/submit/furtherInfo';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  iconValue = 'icon-back_arrow';
  textareaVal = '';
  textareaTitle = 'توضیحات فضای خواب';
  textareaPlaceholder =
    'در اینجا می توانید توضیحات بیشتری درباره امکانات و شرایط مهیا شده برای خواب میهمانان, ارائه کنید';
  textareaClass = '';
  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: 'امکانات خواب',
          text:
            // tslint:disable-next-line:max-line-length
            '‎‏در این قسمت, امکانات خواب اقامتگاه, همچون تعداد و نوع تخت خوابهای موجود در هر اتاق خواب را مشخص کنید. ‏سایر انواع رخت خواب, همچون رخت خواب سنتی, تشک بادی و غیرو ... را نیز در این قسمت وارد کنید'
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
