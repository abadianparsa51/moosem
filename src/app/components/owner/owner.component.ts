import { Component, OnInit } from '@angular/core';
import { MainCard } from 'src/app/interfaces/main-card';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {


  ChatTitleBtnName = 'تماس با میزبان';
  ChatCustomClass = 'btn btn_light_blue';
  ChatURlLink = '';
  // ChatbtnIcon = 'icon-speech-bubble';


  ownerData: any[] = [

    { icon: 'icon-speech-bubble', title: '3 تخت' },
    { icon: 'icon-door_handle', title: '3 تخت' },
    { icon: 'icon-avatar', title: '3 تخت' },
    { icon: 'icon-rate_fill yellow', title: '3 تخت' }
  ]

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
        { icon: 'icon-bed', title: '3 تخت' },
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

  constructor() { }

  ngOnInit() {
  }

}
