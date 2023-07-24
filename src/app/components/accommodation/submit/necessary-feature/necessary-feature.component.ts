import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-necessary-feature',
  templateUrl: './necessary-feature.component.html',
  styleUrls: ['./necessary-feature.component.scss']
})
export class NecessaryFeatureComponent implements OnInit {
  selectbox = [
    {
      title: 'تعویض روبالشی و روتختی (برای هر میهمان جدید)',
      input: false
    },
    {
      title: 'تعویض حوله حمام (برای هر میهمان جدید)',
      input: false
    },
    { title: 'شارژ مایع دستشویی', input: false },
    { title: 'شارژ کاغذ توالت', input: false }
  ];
  formTitle = 'اقلام ضروری و بهداشتی اقامتگاه';
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  nextBtnURlLink = '/hosting/submit/safefeature';
  prevBtnURlLink = '/hosting/submit/roomextrafeature';
  prevBtnTitle = 'قبلی';
  prevBtnCustomClass = 'btn btn_light_blue';
  iconValue = 'icon-back_arrow';
  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: '‎تعویض‎ اقلام ضروری و بهداشتی‎',
          text:
            // tslint:disable-next-line:max-line-length
            '‎‏ارائه و تعویض اقلام بهداشتی (شامل روبالشی, روتختی, حوله حمام, کاغذ ‏توالت و صابون یا مایع دستشویی) موجب می شود تا میهمان شما احساس کند که در منزل خود حضور ‏دارد. توجه: اقلام همچون روبالشی, روتختی و حوله حمام, می بایست پیش از ورود میهمان جدید, تعویض و یا شارژ شوند.‏'
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
