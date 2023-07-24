import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})
export class SuggestComponent implements OnInit {
  heroData: any = {
    image: 'url(assets/img/invite-hero.png)',
    title: 'کادو بده کادو بگیر',
    subtitle:
      'دوستت رو دعوت کن تا با اولین رزروش کیف پول هردوتون هرکدوم 20 هزار تومان شارژ بشه'
  };

  suggestFeaturesTitle = 'چجوری دوستمو دعوت کنم؟';
  suggestfeature: any[] = [
    {
      image: 'assets/img/back_3.png',
      description: 'از دوستان خود دعوت کنید باید بعد از پیاده سازی تغییر کنه'
    },
    {
      image: 'assets/img/back_2.png',
      description:
        'با اولین سفر هر کدام از دوستانتون کیف پول شما 20000 تومان شارژ میشه و میتونین هر وقت که خواستین ازش استفاده کنین'
    },
    {
      image: 'assets/img/back_1.png',
      description:
        'دوستان دعوت شده توسط شما هم هرکدوم 20000 تومان اعتبار دارن که از هزینه ی سفرشون کسر میشه'
    }
  ];

  invitationTitle = 'برای دعوت از دوستات یکی از دو روش زیر رو انتخاب کن';
  constructor() {}

  ngOnInit() {}
}
