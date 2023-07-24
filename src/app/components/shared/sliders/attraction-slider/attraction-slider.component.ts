import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-attraction-slider',
  templateUrl: './attraction-slider.component.html',
  styleUrls: ['./attraction-slider.component.scss']
})
export class AttractionSliderComponent implements OnInit {
  @Input() slides: any[];
  customOptions: any = {
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    center: true,
    navSpeed: 300,
    margin: 10,
    loop: true,
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
        items: 4
      },
      980: {
        items: 4.5
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
