import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-safe-feature',
  templateUrl: './safe-feature.component.html',
  styleUrls: ['./safe-feature.component.scss']
})
export class SafeFeatureComponent implements OnInit {
  selectbox = [
    {
      title: 'جعبه کمکهای اولیه',
      input: false
    },
    {
      title: 'کپسول آتشنشانی',
      input: false
    },
    { title: 'برگه راهنمای ایمنی', input: false }
  ];
  formTitle = 'تجهیزات ایمنی اقامتگاه خود را مشخص نمایید';
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  nextBtnURlLink = '/hosting/submit/setroomtitle';
  prevBtnURlLink = '/hosting/submit/necessaryfeature';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  iconValue = 'icon-back_arrow';
  textareaVal = '';
  textareaTitle = 'افزودن موارد بیشتر';
  textareaPlaceholder = 'تجهیزات ایمنی دیگر را در این قسمت وارد کنید';
  textareaClass = '';
  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: 'ایمنی اقامتگاه',
          text:
            // tslint:disable-next-line:max-line-length
            '‎در این قسمت می توانید مواردی را که در هنگام اضطرار مورد نیاز ‏میهمانان می باشد را مشخص ‏کنید. مواردی همچون: مکان کپسول آتشنشانی / مکان شیر گاز اصلی ‏ساختمان / خروجی به پله ‏های اضطراری آپارتمان / شماره تماس آتش نشانی و اورژانس.‎‎در صورتی که موارد ایمنی بیشتری درباره اقامتگاه خود دارید در کادر تعبیه شده ذکر نمایید.‎ ‎توصیه: موارد فوق را در ‏برگه ای پرینت کرده و در اقامتگاه خود در معرض دید میهمانان قرار دهید‎'
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
