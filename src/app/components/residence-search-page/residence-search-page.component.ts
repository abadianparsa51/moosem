import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-residence-search-page',
  templateUrl: './residence-search-page.component.html',
  styleUrls: ['./residence-search-page.component.scss']
})
export class ResidenceSearchPageComponent implements OnInit {
  stateTitle = 'استان';
  cityTitle = 'شهر';
  dateTitle = 'تاریخ';
  guestsTitle = 'نفرات';
  priceTitle = 'قیمت';
  typeTitle = 'اقامتگاه';
  // dropDownSearchClass= 'white-bordered'

  searchOrTel: boolean;
  mapTitleBtnName = 'نمایش روی نقشه';
  mapCustomClass = 'btn btn_lightBlue_dashed';
  mapURLLink = '';
  mapBtnIcon = 'icon-radio_active';
  i: any;
  // changePassTitleBtnName = 'تغیر رمز عبور';
  changePassCustomClass = 'link link_blue';
  // changePassURLLink = 'changePassword';
  // changePassbtnIcon = 'icon-padlock';
  // changePassTitleBtnName = 'تغیر رمز عبور';

  cityCustomClass = 'link link_blue';
  // changePassURLLink = 'changePassword';
  // changePassbtnIcon = 'icon-padlock';

  filterFlag: boolean = false;
  provienceFlag: boolean = false;
  cityFlag: boolean = false;
  dateFlag: boolean = false;
  priceFlag: boolean = false;
  personFlag: boolean = false;
  residenceTypeFlag: boolean = false;
  moreFilterFlag: boolean = false;

  closeFilters() {
    this.filterFlag = false;
    this.provienceFlag = false;
    this.priceFlag = false;
    this.cityFlag = false;
    this.personFlag = false;
    this.dateFlag = false;
    this.residenceTypeFlag = false;
    this.moreFilterFlag = false;
  }

  openFilters(param: any) {
    if (param == 1) {
      this.filterFlag = true;
      this.provienceFlag = true;
    }
    else if (param == 2) {
      this.filterFlag = true;
      this.cityFlag = true;
    }
    else if (param == 3) {
      this.filterFlag = true;
      this.dateFlag = true;
    }
    else if (param == 4) {
      this.filterFlag = true;
      this.personFlag = true;
    }
    else if (param == 5) {
      this.filterFlag = true;
      this.priceFlag = true;
    }
    else if (param == 6) {
      this.filterFlag = true;
      this.residenceTypeFlag = true;
    }
    else if (param == 7) {
      this.filterFlag = true;
      this.moreFilterFlag = true;
    }
    else {
      this.filterFlag = false;
    }
  }

  selectProv(state) {
    this.stateTitle = state;
  }

  selectCit(citys) {
    this.cityTitle = citys;
  }
  selectRes(residence) {
    this.typeTitle = residence;
  }

  selectbox = [
    { title: ' اینترنت وایرلس', input: true },
    { title: 'باربیکیو', input: true },
    { title: 'گرمایش', input: true },
    { title: ' کولر آبی', input: true },
    { title: 'کولر گازی', input: true },
    { title: 'صبحانه', input: true },
    { title: 'تلویزیون', input: true },
    { title: 'پارکینگ', input: true },
    { title: ' آسانسور ', input: true },
    { title: ' مبلمان ', input: true },
    { title: ' سرویس فرنگی ', input: true },
    { title: ' تجهیزات آشپزی ', input: true },
    { title: ' تراس ', input: true },
    { title: ' حمام ', input: true },
    { title: 'استخر سرباز', input: true },
    { title: 'استخر سرپوشیده', input: true },
    { title: 'گیرنده دیجیتال', input: true }

  ];

  selectbox2 = [
    { title: 'عدم برگزاری مراسم', input: true },
    { title: ' حیوانات خانگی ممنوع است ', input: true },
    { title: ' استعمال دخانیات ممنوع ', input: true },
  ];


  residence: any[] = [
    { id: 1, title: "ویلایی" },
    { id: 2, title: "ابارتمان" },
    { id: 3, title: " سوییت " },
    { id: 4, title: " کلبه " },
    { id: 5, title: " بوم گردی " },
    { id: 6, title: " روستای " },
    { id: 7, title: " هتل آبارتمان " }
  ]


  province: any[] = [
    { id: 0, title: "استان" },
    { id: 1, title: "تهران" },
    { id: 2, title: "کرج" },
    { id: 3, title: "قزوین" },
    { id: 4, title: "گیلان" },
    { id: 5, title: "گلستان" },
    { id: 6, title: "زنجان" },
    { id: 7, title: "آذربایجان غربی" },
    { id: 8, title: "اذربایجان شرقی" },
    { id: 9, title: "اردبیل" },
    { id: 10, title: " مرکزی " },
    { id: 11, title: " فارس" },
  ];
  citys: any[] = [
    { id: 0, title: "شهر" },
    { id: 1, title: "تهران" },
    { id: 2, title: "کرج" },
    { id: 3, title: "قزوین" },
    { id: 4, title: "رشت" },
    { id: 5, title: "گرگان" },
    { id: 6, title: "زنجان" },
    { id: 7, title: "ارومیه" },
    { id: 8, title: "تبریز" },
    { id: 9, title: "اردبیل" },
    { id: 10, title: "اراک" },
    { id: 11, title: "شیراز" },
  ];

  price: any[] = [
    // {id: }
  ]
  person: any[] = [

    // { id: 0, number: "نعداد نفرات" },
    { id: 1, number: "1" },
    { id: 2, number: "2" },
    { id: 3, number: "3" },
    { id: 4, number: "4" },
    { id: 5, number: "5" },
    { id: 6, number: "6" },

  ];

  date: any[] = [

    { title: ' از تارخ .. تا تاریخ ' }

  ];

  cardDatas: any[] = [
    {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    }, {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    }, {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    }, {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    }, {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    }, {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
  ];
  cardDatas2: any[] = [
    {
      images: [
        { image: 'assets/img/56b96d18-8a29-45e3-b714-a9df8728dc0f.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 اتاق' },
        { icon: 'icon-profile', title: '3 نفر' },
        { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/56b96d18-8a29-45e3-b714-a9df8728dc0f.png', alt: 'alt title' }
      ],
      details: [
        // { icon: 'icon-bed', title: '3 تخت' },
        // { icon: 'icon-door_handle', title: '3 اتاق' },
        // { icon: 'icon-profile', title: '3 نفر' },
        // { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/56b96d18-8a29-45e3-b714-a9df8728dc0f.png', alt: 'alt title' }
      ],
      details: [
        // { icon: 'icon-bed', title: '3 تخت' },
        // { icon: 'icon-door_handle', title: '3 اتاق' },
        // { icon: 'icon-profile', title: '3 نفر' },
        // { icon: 'icon-rate_fill', title: 'ridi' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/56b96d18-8a29-45e3-b714-a9df8728dc0f.png', alt: 'alt title' }
      ],
      details: [
        // { icon: 'icon-bed', title: '3 تخت' },
        // { icon: 'icon-door_handle', title: '3 اتاق' },
        // { icon: 'icon-profile', title: '3 نفر' },
        // { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/56b96d18-8a29-45e3-b714-a9df8728dc0f.png', alt: 'alt title' }
      ],
      details: [
        // { icon: 'icon-bed', title: '3 تخت' },
        // { icon: 'icon-door_handle', title: '3 اتاق' },
        // { icon: 'icon-profile', title: '3 نفر' },
        // { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    }
  ];
  cardDatas3: any[] = [
    {
      images: [
        { image: 'assets/img/56b96d18-8a29-45e3-b714-a9df8728dc0f.png', alt: 'alt title' }
      ],
      details: [
        // { icon: 'icon-bed', title: '3 تخت' },
        // { icon: 'icon-door_handle', title: '3 اتاق' },
        // { icon: 'icon-profile', title: '3 نفر' },
        // { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/56b96d18-8a29-45e3-b714-a9df8728dc0f.png', alt: 'alt title' }
      ],
      details: [
        // { icon: 'icon-bed', title: '3 تخت' },
        // { icon: 'icon-door_handle', title: '3 اتاق' },
        // { icon: 'icon-profile', title: '3 نفر' },
        // { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/56b96d18-8a29-45e3-b714-a9df8728dc0f.png', alt: 'alt title' }
      ],
      details: [
        // { icon: 'icon-bed', title: '3 تخت' },
        // { icon: 'icon-door_handle', title: '3 اتاق' },
        // { icon: 'icon-profile', title: '3 نفر' },
        // { icon: 'icon-rate_fill', title: 'ridi' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/56b96d18-8a29-45e3-b714-a9df8728dc0f.png', alt: 'alt title' }
      ],
      details: [
        // { icon: 'icon-bed', title: '3 تخت' },
        // { icon: 'icon-door_handle', title: '3 اتاق' },
        // { icon: 'icon-profile', title: '3 نفر' },
        // { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    },
    {
      images: [
        { image: 'assets/img/56b96d18-8a29-45e3-b714-a9df8728dc0f.png', alt: 'alt title' }
      ],
      details: [
        // { icon: 'icon-bed', title: '3 تخت' },
        // { icon: 'icon-door_handle', title: '3 اتاق' },
        // { icon: 'icon-profile', title: '3 نفر' },
        // { icon: 'icon-rate_fill', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    }
  ];

  openMapVar = false;
  map = { 'height': '60rem', 'width': '100%' }

  constructor() {

    //  let choose = document.getElementById(h)
  }

  ngOnInit() {

  }
  openMap() {
    this.openMapVar === false
      ? (this.openMapVar = true)
      : (this.openMapVar = false);
  }

  minValue: number = 50;
  maxValue: number = 200;
  options: Options = {
    floor: 0,
    ceil: 250
  };

}
