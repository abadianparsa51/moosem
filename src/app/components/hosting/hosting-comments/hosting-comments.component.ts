import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosting-comments',
  templateUrl: './hosting-comments.component.html',
  styleUrls: ['./hosting-comments.component.scss']
})
export class HostingCommentsComponent implements OnInit {
  commentItems: any[] = [
    {
      image: 'assets/img/Mask1.png',
      title: 'آرش خرسند',
      comment:
        'طراحی جذاب و کارآمد سایت، رزرو را برای مسافران و به روز رسانی اطلاعات را برای میزبان‌هاآسان و سریع کرده است.'
    },
    {
      image: 'assets/img/Mask2.png',
      title: 'آرش خرسند',
      comment:
        'طراحی جذاب و کارآمد سایت، رزرو را برای مسافران و به روز رسانی اطلاعات را برای میزبان‌هاآسان و سریع کرده است.'
    },
    {
      image: 'assets/img/Mask3.png',
      title: 'آرش خرسند',
      comment:
        'طراحی جذاب و کارآمد سایت، رزرو را برای مسافران و به روز رسانی اطلاعات را برای میزبان‌هاآسان و سریع کرده است.'
    },
    {
      image: 'assets/img/Mask4.png',
      title: 'آرش خرسند',
      comment:
        'طراحی جذاب و کارآمد سایت، رزرو را برای مسافران و به روز رسانی اطلاعات را برای میزبان‌هاآسان و سریع کرده است.'
    }
  ];
  constructor() {}

  ngOnInit() {
    console.log(this.commentItems[0]);
  }
}
