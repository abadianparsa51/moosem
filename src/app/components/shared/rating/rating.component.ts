import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  // @Input() stars: any[];
  // @Input() fillStars: any[];
  // @Input() ratingScore: any;
  // fill(i: any) {
  //   console.log('fill ' + i);
  //   this.fillStars.splice(i, 1);
  //   this.stars.push(i);
  //   console.log(this.fillStars);

  // }
  // hollow(j: any) {
  //   console.log('holow ' + j);
  //   this.stars.splice(j, 1);
  //   this.fillStars.push(j);
  // }
  // constructor() { }

  // ngOnInit() {
  // }
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;
  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }
  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }
}
