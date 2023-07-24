import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from './../submit.component';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.scss']
})
export class BaseInfoComponent implements OnInit {
  formTitle = 'مشخصات تجربه سفر';
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  nextBtnURlLink = '/travel-exprience/submit/locationmap';

  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: 'خانه دربست',
          text: ' ‎زمان تحویل اقامتگاه به میهمان بعدی می بایست با فاصله مناسب از زمان تخلیه اقامتگاه توسط میهمان قبلی تعیین گردد تا فرصت کافی برای نظافت و مرتب کردن خانه فراهم باشد. زمان تحویل بطور معمول ساعت 2 بعد از ظهر می باشد.‎‎زمان تحویل اقامتگاه به میهمان بعدی می بایست با فاصله مناسب از زمان تخلیه اقامتگاه توسط میهمان قبلی تعیین گردد تا فرصت کافی برای نظافت و مرتب کردن خانه فراهم باشد. زمان تحویل بطور معمول ساعت 2 بعد از ظهر می باشد'
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
}
