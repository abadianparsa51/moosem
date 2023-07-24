import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-related-items',
  templateUrl: './related-items.component.html',
  styleUrls: ['./related-items.component.scss']
})
export class RelatedItemsComponent implements OnInit {

  @Input() slideData: any;
  customOptions: any = {
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    margin:10,
    nav: true,
    navText: [
      '<img class="sliderTestClass" src="assets/img/slider_right_arrow.png" alt="">',
      '<img class="sliderTestClass" src="assets/img/slider_left_arrow.png" alt="">'
    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1.5
      },
      740: {
        items: 2.5
      },
      1024: {
        items: 4.5
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
