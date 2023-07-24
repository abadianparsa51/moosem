import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';
import { MainCard } from 'src/app/interfaces/main-card';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  roomInfo: any = {
    data: {
      0: {
        title: ""
      }
    }
  };
  userInfo: any = {};

  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: '‎ظرفیت استاندارد / ظرفیت حداکثر‎',
          text:
            // tslint:disable-next-line:max-line-length
            '‎تعداد نفرات تعیین شده در ‏‏‎ظرفیت استاندارد اقامتگاه ‎ مبنای محاسبه نرخ استاندارد اقامتگاه خواهد بود, هر تعداد میهمان بیش از ‏ظرفیت استاندارد مشمول ‏محاسبه "هزینه نفر اضافه" خواهد گردید. حداکثر ظرفیت ‎ ‎حداکثر گنجایش اقامتگاه می باشد که بر اساس فضا, امکانات موجود و امکانات خواب تعیین می گردد.'
        }
      ]
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute, private getdata: RoomService) { }

  userCall(id) {
    this.getdata.getUserData(id).subscribe(data => {
      this.userInfo = data['data'][0];
    });
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

  ngOnInit() {
    const roomId = this.route.snapshot.paramMap.get('id');
    this.getdata.getRoomData(roomId).subscribe(data => {
      this.roomInfo = data;
      this.userCall(data['data'][0]['user_id']);
    });

    this.galleryOptions = [
      {
        previewFullscreen: true,
        preview: true,
        image: false,
        width: '0px',
        height: '0px',
        thumbnails: false,
        imageAnimation: NgxGalleryAnimation.Slide,
        arrowPrevIcon: 'icon-arrow_right',
        arrowNextIcon: 'icon-arrow_left'
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/img/Image21.jpg',
        medium: 'assets/img/Image21.jpg',
        big: 'assets/img/Image21.jpg'
      },
      {
        small: 'assets/img/Image21.jpg',
        medium: 'assets/img/Image21.jpg',
        big: 'assets/img/Image21.jpg'
      },
      {
        small: 'assets/img/Image21.jpg',
        medium: 'assets/img/Image21.jpg',
        big: 'assets/img/Image21.jpg'
      }
    ];
  }
  openPreview() { }
}
