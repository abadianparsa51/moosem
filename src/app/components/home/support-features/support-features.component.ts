import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-support-features',
  templateUrl: './support-features.component.html',
  styleUrls: ['./support-features.component.scss']
})
export class SupportFeaturesComponent implements OnInit {
  @Input() properties: any[];


  
  customOptions: any = {
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    nav: true,
    navText: [

      '<img class="sliderTestClass" src="assets/img/slider_right_arrow.png" alt="">',
      '<img class="sliderTestClass" src="assets/img/slider_left_arrow.png" alt="">'
    ],
    responsive: {
      0: {
        items: 1.5
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      },
      980: {
        items: 3
      }
    }
  };

  constructor() {}

  ngOnInit() {}
}
