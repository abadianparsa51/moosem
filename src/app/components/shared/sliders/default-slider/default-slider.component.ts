import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-default-slider',
  templateUrl: './default-slider.component.html',
  styleUrls: ['./default-slider.component.scss']
})
export class DefaultSliderComponent implements OnInit {
  @Input() slideData: any;
  customOptions: any = {
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    // loop: true,
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
        items: 4.5
      },
    }
  };
  constructor() { }

  ngOnInit() { }
}
