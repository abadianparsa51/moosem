import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss']
})
export class HostingComponent implements OnInit {
  titleForQA = 'سوالات متداول میزبانی';
  titleBgForQA = '#0389ff';
  mechanisms: any[] = [
    {
      image: 'assets/img/SVGs/asset_1.svg',
      title: 'اقامتگاهتو توی موسم درج کن',
      sub: 'اقامتگاهتو توی موسم ثبت کن و به راحتی سفارش دریافت کن'
    },
    {
      image: 'assets/img/SVGs/asset_2.svg',
      title: 'درآمد کسب کن',
      sub: 'اینجاست که موسم درآمد خوبی رو برات میسازه'
    },
    {
      image: 'assets/img/SVGs/asset_3.svg',
      title: 'توی موسم ثبت نام کن',
      sub: 'به راحتی توی سایت موسم ثبت نام کن و میزبان شو'
    }
  ];

  comments: any[] = [
    {
      title: 'نظرات میزبانان موسم',
      linkTitle: '',
      link: ''
    }
  ];
  constructor() {}

  ngOnInit() {}
}
