import { MainCard } from './../../interfaces/main-card';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  supportfeature: any[] = [
    { image: 'assets/img/SVGs/1.svg', title: 'میزبانهای تایید شده' },
    { image: 'assets/img/SVGs/2.svg', title: 'ضمانت بازگشت وجه' },
    { image: 'assets/img/SVGs/3.svg', title: 'امکان گفتگو با میزبان' },
    { image: 'assets/img/SVGs/4.svg', title: 'ضمانت تمیزی اقامتگاه' },
    { image: 'assets/img/SVGs/5.svg', title: 'پشتیبانی 24 ساعته' }
  ];
  public innerWidth: any;
  /**
   * Display rooms by fara id
   */
  faraData: any[] = [];
  faraDataCounter = 0;

  rentSlideData2: any[] = [];
  // residance renting section
  rentHost: any[] = [
    {
      title: 'اجاره ویلا در شمال',
      linkTitle: 'مشاهده همه اقامتگاها',
      link: '/rentals'
    }
  ];


  // instate renting section
  indoorsHost: any[] = [
    {
      title: 'اقامتگاه‌های بوم گردی',
      linkTitle: 'مشاهده همه اقامتگاها',
      link: '/rentals'
    }
  ];
  sights: any[] = [
    {
      title: 'دیدنی ها',
      linkTitle: '',
      link: ''
    }
  ];
  blogData: any[] = [
    {
      title: 'بلاگ',
      linkTitle: 'مشاهده همه مطالب وبلاگ',
      link: ''
    }
  ];

  blog: any = [
    {
      image: 'assets/img/Mask_3.png',
      title: 'ایران گردی با موسم',
      date: '۲۵ خرداد ۱۳۹۸- نوشته آرش خرسند',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      link: 'blog'
    },
    {
      image: 'assets/img/Mask.png',
      title: 'متل قو و جاذبه های سلمانشهر',
      date: '۲۵ خرداد ۱۳۹۸- نوشته آرش خرسند',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      link: 'blog'
    },
    {
      image: 'assets/img/Mask_4.png',
      title: 'اصفهان گردی به سبک موسم',
      date: '۲۵ خرداد ۱۳۹۸- نوشته آرش خرسند',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      link: 'blog'
    },
    {
      image: 'assets/img/Mask_2.png',
      title: 'بازار تهران؛ از گلوبندک تا آب منگل',
      date: '۲۵ خرداد ۱۳۹۸- نوشته آرش خرسند',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      link: 'blog'
    },
    {
      image: 'assets/img/Mask_3.png',
      title: 'ایران گردی با موسم',
      date: '۲۵ خرداد ۱۳۹۸- نوشته آرش خرسند',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      link: 'blog'
    }
  ];



  suggestHost: any[] = [
    {
      title: 'پیشنهاد‌های ویژه موسم',
      linkTitle: 'مشاهده همه اقامتگاها',
      link: 'rent'
    }
  ];

  // whole data from server stored in this variable
  pageData: any = [];

  popularSlides: any = [];

  popularHost: any[] = [
    {
      title: 'شهر های پربازدید',
      linkTitle: '',
      link: ''
    }
  ];

  travelExprience: any[] = [
    {
      title: 'تجربه سفر',
      linkTitle: 'مشاهده تجربه سفر ',
      // linkTitle: 'ثبت تجربه سفر ',
      link: '/exprince-search-page'
    }
  ];

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

  constructor(private getdata: HomeService) {
  }


  /**
   * Capsulate of display property in home page with FARAID
   * @param catId
   */
  propertyCatData(catId) {
    const dataSlide = [];
    dataSlide[0] = {};
    this.getdata.getHomeDataByFaraId(catId.id).subscribe(data => {
      let xy = 0;
      for (const item of data['data']) {
        dataSlide[xy] = [];
        let itemerCount = 0;
        dataSlide[xy].images = [];
        for (const itemer of item.images) {
          dataSlide[xy].images[itemerCount] = [];
          dataSlide[xy].images[itemerCount].image = 'https:www.moosem.ir/photo/ads/270-170_' + itemer.filename;
          dataSlide[xy].images[itemerCount].alt = 'https:www.moosem.ir/photo/ads/270-170_' + itemer.filename;
          itemerCount++;
          if (itemerCount > 5) {
            break;
          }
        }
        dataSlide[xy].details = [
          { icon: 'icon-bed', title: 'ff' },
          { icon: 'icon-bed', title: '3 تخت' },
          { icon: 'icon-bed', title: '3 تخت' },
          { icon: 'icon-bed', title: '3 تخت' }
        ];
        dataSlide[xy].link = '/room/' + item.data.id;
        xy++;
        if (xy > 7) {
          break;
        }
      }
      this.faraData[this.faraDataCounter] = [];
      this.faraData[this.faraDataCounter].title = catId.cat_name;
      this.faraData[this.faraDataCounter].link = '/preoperties/' + catId.id;
      this.faraData[this.faraDataCounter].data = dataSlide;
      this.faraData[this.faraDataCounter].linkTitle = 'مشاهده همه اقامتگاها';
      this.faraDataCounter = this.faraDataCounter + 1;
    });
  }

  catData(data) {
    for (let item of data) {
      this.propertyCatData(item);
    }
  }

  /**
   * Display city blocks in home
   * @param data
   */
  cityCategory(data) {
    let counter = 0;
    for (const item of data) {
      this.popularSlides[counter] = [];
      this.popularSlides[counter]['image'] = 'https:www.moosem.ir' + item.images;
      this.popularSlides[counter]['title'] = item.city_name;
      this.popularSlides[counter]['subtitle'] = 'اقامتگاه تایید شده';
      this.popularSlides[counter]['count'] = item.home_count;
      counter++;
    }
  }

  /**
   * Fetch data of blog
   */
  blogDataSlides(data) {
    let counter = 0;
    for (const item of data) {
      this.blog[counter] = [];
      this.blog[counter]['image'] = 'https:www.moosem.ir' + item.image;
      this.blog[counter]['title'] = item.title;
      this.blog[counter]['date'] = '۲۵ خرداد ۱۳۹۸- نوشته آرش خرسند';
      this.blog[counter]['description'] = item.description;
      this.blog[counter]['link'] = '/blog/' + item.id;
      counter++;
    }
  }

  ngOnInit() {
    this.getdata.getHomeData().subscribe(data => {
      this.catData(data['data']);
    });
    this.getdata.getHomeDataByCity().subscribe(data => {
      this.cityCategory(data['data']);
    });
    this.getdata.getBlogData(10).subscribe(data => {
      this.blogDataSlides(data['data']);
    });
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 600) {

    }
  }
}
