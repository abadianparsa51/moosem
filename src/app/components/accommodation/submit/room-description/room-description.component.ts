import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-description',
  templateUrl: './room-description.component.html',
  styleUrls: ['./room-description.component.scss']
})
export class RoomDescriptionComponent implements OnInit {
  formTitle = 'توضیحاتی درباره اقامتگاه تان بنویسید‎';
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  nextBtnURlLink = '/hosting/submit/roomphoto';
  prevBtnURlLink = '/hosting/submit/setroomtitle';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  iconValue = 'icon-back_arrow';
  inputType = 'text';
  inputVal = '';
  inputPlaceholder = 'عنوان اقامتگاه دلخواه خود را بنویسید';
  inputIcon = '';
  inputClass = '';
  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: 'توضیحات تکمیلی درباره اقامتگاه‎',
          text:
            // tslint:disable-next-line:max-line-length
            '‎‏‎بهتر است در توضیحات خود, به فراهم بودن امکانات ‏تفریحی همچون دوچرخه سواری, اسب سواری یا ماهی گیری و قایقرانی در مجاورت اقامتگاه خود اشاره کنید. همچنین نحوه و ‏فاصله دسترسی گردشگران به ‏تاکسی/اتوبوس/فرودگاه/قطار را در این قسمت مشخص نمایید تا میهمانان شما با اطلاع از شرایط زندگی در ‏محله شما و با خیالی آسوده, سفر خود را آغاز کنند.‏‎'
        }
      ]
    }
  ];
  textareaVal = '';
  textareaTitle = 'توضیحات اقامتگاه';
  textareaPlaceholder = 'توضیحی درباره اقامتگاه خود بنویسید';
  textareaClass = '';
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
