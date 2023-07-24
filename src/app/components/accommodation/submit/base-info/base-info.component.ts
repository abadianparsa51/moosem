import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SubmitComponent } from '../submit.component';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.scss']
})
export class BaseInfoComponent implements OnInit {
  formTitle = 'چه فضایی از اقامتگاه خود را به اجاره اختصاص می‌دهید؟';
  nextBtnTitle = 'بعدی';
  nextBtnCustomClass = 'btn btn_blue';
  nextBtnURlLink = '/hosting/submit/capacityInfo';
  selectBoxContent = [
    {
      title: 'تاریخ فضای اقامتگاه',
      content: [
        {
          title: 'خانه دربست',
          value: 'خانه دربست'
        }
      ]
    },
    {
      title: 'نوع اقامتگاه شما چیست؟',
      content: [
        {
          title: 'خانه دربست',
          value: 'خانه دربست'
        }
      ]
    },
    {
      title: 'اقامتگاه شما در چه منطقه‌ای واقع شده؟',
      content: [
        {
          title: 'خانه دربست',
          value: 'خانه دربست'
        }
      ]
    }
  ];
  info = [
    {
      infoTitle: 'موسم با شماست',
      infoContent: [
        {
          title: 'خانه دربست',
          text: 'در این حالت اقامتگاه بصورت یکجا در اختیار میهمان قرار میگیرد.'
        },
        {
          title: 'خانه نیمه دربست',
          text:
            'در این حالت یک واحد مسکونی در اختیار میهمان قرار می گیرد ولی مواردی همچون ورودی اقامتگاه و یا حیاط و محوطه مشترک می باشد.'
        },
        {
          title: 'خانه اتاق خصوصی',
          text:
            // tslint:disable-next-line:max-line-length
            'در این حالت حداقل یک اتاق به صورت اختصاصی به میهمان اختصاص می یابد و سایر فضاها همچون سالن, آشپزخانه و حیاط بصورت مشترک مورداستفاده قرار می گیرد.'
        }
      ]
    }
  ];
  constructor(private submit: SubmitComponent, private router: Router) {}

  ngOnInit() {}
  incProgress(): void {
    this.submit.increaseLevel();
    this.router.navigate([this.nextBtnURlLink]);
  }
}
