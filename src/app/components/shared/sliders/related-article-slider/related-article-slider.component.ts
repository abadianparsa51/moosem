import { Component, OnInit, Input } from '@angular/core';
import { NewsCardComponent } from '../../cards/news-card/news-card.component';

@Component({
  selector: 'app-related-article-slider',
  templateUrl: './related-article-slider.component.html',
  styleUrls: ['./related-article-slider.component.scss']
})
export class RelatedArticleSliderComponent implements OnInit {

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
      '<img class="sliderTestClass" src="assets/img/slider_left_arrow.png" alt="">',
      '<img class="sliderTestClass" src="assets/img/slider_right_arrow.png" alt="">'
    ],
    responsive: {
      0: {
        items: 1
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
