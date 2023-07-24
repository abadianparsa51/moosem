import { Component, OnInit, Input } from '@angular/core';
import { MainCard } from 'src/app/interfaces/main-card';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-sightseeing',
  templateUrl: './sightseeing.component.html',
  styleUrls: ['./sightseeing.component.scss']
})
export class SightseeingComponent implements OnInit {

  @Input() attDetails: any;
  @Input() userDetails: any;
  comments: boolean = false;
  openVal = false;
  open() {
    this.openVal = this.openVal === false ? true : false;
    // this.BtnTitle = this.BtnTitle === 'ویرایش' ? 'ذخیره' : 'ویرایش';
  }
  BtnTitle = 'ثبت نظر';
  BtnCustomClass = 'btn btn_light_blue';
  BtnTitle2 = '  ثبت ';
  BtnCustomClass2 = 'btn btn_light_blue2';

  // commentsTitleBtnName = 'ثبت نظر';
  // commentsCustomClass = 'btn btn_blue';
  // commentsURlLink = '/comment-submit';
  // commentsbtnIcon = '';

  ChatTitleBtnName = 'چت با میزبان';
  ChatCustomClass = 'btn btn_light_blue';
  ChatURlLink = '';
  ChatbtnIcon = 'icon-speech-bubble';

  roomRate = [0, 1, 2];
  roomHollowStars = [0, 1];
  roomScore = '3';

  cleanRate = [0, 1, 2, 3];
  cleanHollowStars = [0];
  cleanScore = '4';

  commentsTitleBtnName = 'ثبت نظر';
  commentsCustomClass = 'btn btn_blue';
  commentsURlLink = '';
  commentsbtnIcon = '';


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

  customOptionsForImage: any = {
    loop: true,
    rtl: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 300,
    nav: true,
    navText: [
      '<span class="icon-arrow_right"></span>',
      '<span class="icon-arrow_left"></span>'
    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }, 980: {
        items: 4.5
      }
    }
  };


  popularSlides: any[] = [
    {
      image: 'assets/img/shiraz.png',
      title: 'کیش',
      subtitle: 'اقامتگاه تایید شده',
      count: '35'
    },
    {
      image: 'assets/img/ramsar.png',
      title: 'کیش',
      subtitle: 'اقامتگاه تایید شده',
      count: '35'
    },
    {
      image: 'assets/img/esfahan.png',
      title: 'کیش',
      subtitle: 'اقامتگاه تایید شده',
      count: '35'
    },
    {
      image: 'assets/img/masal.png',
      title: 'کیش',
      subtitle: 'اقامتگاه تایید شده',
      count: '35'
    },
    {
      image: 'assets/img/masal.png',
      title: 'کیش',
      subtitle: 'اقامتگاه تایید شده',
      count: '35'
    },
    {
      image: 'assets/img/masal.png',
      title: 'کیش',
      subtitle: 'اقامتگاه تایید شده',
      count: '35'
    }
  ];


  suggestImage: string;

  map = { height: "30rem", width: "100%" };

  basePath = '';
  constructor(private global: GlobalService) { }

  ngOnInit() {
    this.basePath = this.global.basePath;
  }
  getsuggestimagesrc(src) {
    this.suggestImage = src;
  }
}