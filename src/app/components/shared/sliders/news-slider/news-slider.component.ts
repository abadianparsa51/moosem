import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.scss']
})
export class NewsSliderComponent implements OnInit {
  @Input() news: any[];
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
        items: 4
      }
    }
  };
  constructor() { }

  ngOnInit() { }
}
