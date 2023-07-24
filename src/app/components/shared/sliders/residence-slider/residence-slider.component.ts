import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-residence-slider',
  templateUrl: './residence-slider.component.html',
  styleUrls: ['./residence-slider.component.scss']
})
export class ResidenceSliderComponent implements OnInit {

  @Input() slideData: any;
  customOptions: any = {
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    center: true,
    loop: true,
    dots: false,
    navSpeed: 300,
    margin: 10,
    nav: true,
    navText: [
      '<img class="sliderTestClass" src="assets/img/slider_right_arrow.png" alt="">',
      '<img class="sliderTestClass" src="assets/img/slider_left_arrow.png" alt="">'
    ],
    responsive: {
      0: {
        items: 2
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

  ngOnInit() {
  }

}
