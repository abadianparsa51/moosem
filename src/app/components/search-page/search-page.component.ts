import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  seeMoreTitleBtnName = 'مشاهده بیشتر';
  seeMoreCustomClass = 'btn btn_blue_bordered';
  seeMoreURLLink = '/cities';

  residencePageTitleBtnName = 'اقامتگاه';
  searchResidenceCustomClass = '';
  residencePageURLLink = '/residence-search-page';
  searchResidencebtnIcon = '';

  exprincePageTitleBtnName = 'تجربه سفر';
  exprinceCustomClass = '';
  exprincePageURLLink = '/exprince-search-page';
  exprincebtnIcon = '';

  filterFlag: boolean = false;
  dateFlag: boolean = false;
  personFlag: boolean = false;

  closeFilters(param: any) {
    this.filterFlag = false;
    this.personFlag = false;
    this.dateFlag = false;

  }

  openFilters(param: any) {
    if (param == 3) {
      this.filterFlag = true;
      this.dateFlag = true;
    }
    else if (param == 4) {
      this.filterFlag = true;
      this.personFlag = true;
    }
    else {
      this.filterFlag = false
    }
  }
  rentSlideData: any[] = [
    {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 تخت' },
        { icon: 'icon-avatar', title: '3 تخت' },
        { icon: 'icon-rate_fill yellow', title: '3 تخت' }
      ],
      // precent: '18%',
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده',
      medal: true,
      verified: true

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
        { icon: 'icon-door_handle', title: '3 تخت' },
        { icon: 'icon-avatar', title: '3 تخت' },
        { icon: 'icon-rate_fill yellow', title: '3 تخت' }
      ],
      // precent: '18%',
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده',
      medal: true,
      verified: true

    },
    {
      images: [
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 تخت' },
        { icon: 'icon-avatar', title: '3 تخت' },
        { icon: 'icon-rate_fill yellow', title: '3 تخت' }
      ],
      price: '300,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده',
      medal: true,
      verified: true

    },
    {
      images: [
        { image: 'assets/img/Image9.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 تخت' },
        { icon: 'icon-avatar', title: '3 تخت' },
        { icon: 'icon-rate_fill yellow', title: '3 تخت' }
      ],
      price: '180,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده',
      medal: true,
      verified: true

    },
    {
      images: [
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 تخت' },
        { icon: 'icon-avatar', title: '3 تخت' },
        { icon: 'icon-rate_fill yellow', title: '3 تخت' }
      ],
      price: '200,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده',
      medal: true,
      verified: true

    },
    {
      images: [
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 تخت' },
        { icon: 'icon-avatar', title: '3 تخت' },
        { icon: 'icon-rate_fill yellow', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده',
      medal: true,
      verified: true

    },
    {
      images: [
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-door_handle', title: '3 تخت' },
        { icon: 'icon-avatar', title: '3 تخت' },
        { icon: 'icon-rate_fill yellow', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده',
      medal: true,
      verified: true
    }
  ];
  person: any[] = [

    // { id: 0, number: "نعداد نفرات" },
    { id: 0, number: "1" },
    { id: 1, number: "2" },
    { id: 2, number: "3" },
    { id: 3, number: "4" },
    { id: 4, number: "5" },
    { id: 5, number: "6" },

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


  constructor() { }

  ngOnInit() {
  }

}
