// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-room-slider',
//   templateUrl: './room-slider.component.html',
//   styleUrls: ['./room-slider.component.scss']
// })
// export class RoomSliderComponent implements OnInit {

//   roomImages: any[] = [
//     {
//       image: "assets/img/Image18.jpg",
//       alt: "first"
//     },
//     {
//       image: "assets/img/Image19.jpg",
//       alt: "second"
//     },
//     {
//       image: "assets/img/Image21.jpg",
//       alt: "third"
//     },
//     {
//       image: "assets/img/Image22.jpg",
//       alt: "forth"
//     }
//   ];
//   customOptions: any = {
//     rtl: true,
//     // loop:true,
//     mouseDrag: true,
//     touchDrag: true,
//     pullDrag: true,
//     margin: 10,
//     center: true,
//     dots: false,
//     navSpeed: 300,
//     nav: true,
//     navText: [
//       '<img class="sliderTestClass" src="assets/img/slider_right_arrow.png" alt="">',
//       '<img class="sliderTestClass" src="assets/img/slider_left_arrow.png" alt="">'
//     ],
//     responsive: {
//       0: {
//         items: 1
//       },
//       400: {
//         items: 1
//       },
//       740: {
//         items: 2
//       },
//       940: {
//         items: 2
//       },
//       980: {
//         items: 2.5
//       }
//     }
//   };
//   constructor() { }

//   ngOnInit() { }
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-slider',
  templateUrl: './room-slider.component.html',
  styleUrls: ['./room-slider.component.scss']
})
export class RoomSliderComponent implements OnInit {
    roomImages: any[] = [
    {
      image: "assets/img/Image18.jpg",
      alt: "first"
    },
    {
      image: "assets/img/Image19.jpg",
      alt: "second"
    },
    {
      image: "assets/img/Image21.jpg",
      alt: "third"
    },
    {
      image: "assets/img/Image22.jpg",
      alt: "forth"
    }
  ];
  customOptions: any = {
    rtl: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 10,
    center: true,
    dots: false,
    navSpeed: 300,
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
        items: 2
      },
      940: {
        items: 2
      }
    }
  };
  constructor() {}

  ngOnInit() {}
}
