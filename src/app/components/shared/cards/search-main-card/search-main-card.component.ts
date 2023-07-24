import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-main-card',
  templateUrl: './search-main-card.component.html',
  styleUrls: ['./search-main-card.component.scss']
})
export class SearchMainCardComponent implements OnInit {
  @Input() cardData: any;
  public innerWidth: any;

  roomRate = [0, 1, 2];
  roomHollowStars = [0, 1];
  roomScore = '3';

  customOptionsForImage: any = {
    loop: true,
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 300,
    nav: true,
    navText: [
      '<span class="icon-arrow_right"></span>',
      '<span class="icon-arrow_left"></span>'
    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }, 980: {
        items: 4.5
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
