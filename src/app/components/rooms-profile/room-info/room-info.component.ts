import { Component, Input, OnInit } from '@angular/core';
import { MainCard } from 'src/app/interfaces/main-card';
import { GlobalService } from 'src/app/services/global.service';
import { HttpClient } from '@angular/common/http';
import { Moment } from 'moment';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.scss']
})
export class RoomInfoComponent implements OnInit {
  @Input() roomDetails: any;
  @Input() userDetails: any;
  comments: boolean = false;
  clicked: boolean = false;
  tooltip: boolean = false;

  CallTitleBtnName = 'تماس با میزبان';
  CallCustomClass = 'btn btn_light_blue';
  CallURlLink = '';
  CallbtnIcon = 'icon-call_answer';

  ShareTitleBtnName = 'اشتراک گذاری';
  ShareCustomClass = 'btn btn_blue_bordered';
  ShareURlLink = '';
  SharebtnIcon = 'icon-share';

  resShareTitleBtnName = '';
  resShareCustomClass = 'btn btn_blue_bordered';
  resShareURlLink = '';
  resSharebtnIcon = 'icon-share';

  ChatTitleBtnName = 'چت با میزبان';
  ChatCustomClass = 'btn btn_light_blue';
  ChatURlLink = '';
  ChatbtnIcon = 'icon-speech-bubble';

  reserveTitleBtnName = 'همین حالا رزرو کنید';
  reserveCustomClass = 'btn btn_green';
  reserveURlLink = '';
  reservebtnIcon = '';

  commentsTitleBtnName = 'ثبت نظر';
  commentsCustomClass = 'btn btn_blue';
  commentsURlLink = '';
  commentsbtnIcon = '';

  roomRate = [0, 1, 2];
  roomHollowStars = [0, 1];
  roomScore = '3';

  cleanRate = [0, 1, 2, 3];
  cleanHollowStars = [0];
  cleanScore = '4';

  reserveBtnTitle2 = 'درخواست رزرو';
  reserveCustomClass2 = 'btn btn_green';
  reserveBtnUrl2 = '';
  selected: { startDate: Moment; endDate: Moment };
  selectTitle = '';


  selectbox2 = [
    { title: 'با صبحانه محلی', input: true },
    { title: ' با ناهار شام محلی ', input: true },

  ];

  toolTipDate: any[] = [
    { title: "یکشنبه ۱۹ خرداد", price: "65000تومان" },
    { title: "دوشنبه ۲۰ خرداد :", price: "65000تومان" },
    { title: "سه شنبه ۲۱ خرداد", price: " 65000تومان" },
    { title: "پنج شنبه ۲۳ خرداد", price: " 65000تومان " },
    { title: "شنبه ۲۵ خرداد", price: " 65000تومان " },
    { title: "شنبه ۲6 خرداد ", price: " 65000تومان " },
  ]
  tooltipToggle() {
    this.tooltip = !this.tooltip;
  }
  
  reserveCardClicked() {
    this.clicked = !this.clicked;
  }

  rentSlideData: MainCard[] = [
    {
      images: [
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' }
      ],
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
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' }
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
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' }
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
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' }
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
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' }
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
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده',
      medal: true,
      verified: true
    }
  ];

  rentSlideData2: any[] = [
    {
      images: [
        { image: 'assets/img/Image11.png', alt: 'alt title' },
        { image: 'assets/img/Image10.png', alt: 'alt title' },
        { image: 'assets/img/Image12.png', alt: 'alt title' },
        { image: 'assets/img/Image9.png', alt: 'alt title' }
      ],
      details: [
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
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
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
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
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' }
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
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' },
        { icon: 'icon-bed', title: '3 تخت' }
      ],
      price: '350,000',
      title: 'ویلا دوبلکس یک خواب',
      location: 'میزبانهای تایید شده'
    }
  ];
  ratingItems: any[] = [
    { 'id': 0, 'rating': 3, 'title': 'نظافت اقامتگاه' },
    { 'id': 1, 'rating': 1, 'title': 'موقعیت اقامتگاه' },
    { 'id': 2, 'rating': 2, 'title': 'رفتار میزبان' },
    { 'id': 3, 'rating': 5, 'title': 'زمان تحویل به موقع اقامتگاه' },
    { 'id': 4, 'rating': 4, 'title': 'صحت اطلاعات' },
    { 'id': 4, 'rating': 4, 'title': 'کیفیت اقامتگاه نسبت به قیمت' }
  ];

  suggestImage: string;
  map = { height: '40rem' };
  mobileMap = { width: '80%', margin: '0 auto', height: '30rem' };
  basePath = '';
  openComments() {
    this.comments = !this.comments;
    if (this.comments == true) {
      this.commentsTitleBtnName = 'لغو نظر دهی';
      this.commentsCustomClass = 'btn btn_red';
    } else {
      this.commentsTitleBtnName = 'ثبت نظر';
      this.commentsCustomClass = 'btn btn_blue';
    }
  }
  constructor(private global: GlobalService) { }

  ngOnInit() {
    this.basePath = this.global.basePath;
  }
  getsuggestimagesrc(src) {
    this.suggestImage = src;
  }
}
