import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-silder',
  templateUrl: './single-silder.component.html',
  styleUrls: ['./single-silder.component.scss']
})
export class SingleSilderComponent implements OnInit {
  @Input() slides: any[];
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
        items: 2.5
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

  ngOnInit() { }
}
