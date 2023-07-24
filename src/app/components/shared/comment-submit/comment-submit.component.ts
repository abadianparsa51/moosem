import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-submit',
  templateUrl: './comment-submit.component.html',
  styleUrls: ['./comment-submit.component.scss']
})

export class CommentSubmitComponent implements OnInit {


  commentTitleBtnName = 'ثبت نظر';
  commentCustomClass = 'btn btn_blue';
  commentURlLink = '';
  commentbtnIcon = '';
  ratingClicked: number;
  itemIdRatingClicked: string;
  ratingItems: any[] = [
    { 'id': 0, 'rating': 3, 'title': 'نظافت اقامتگاه' },
    { 'id': 1, 'rating': 1, 'title': 'موقعیت اقامتگاه' },
    { 'id': 2, 'rating': 2, 'title': 'رفتار میزبان' },
    { 'id': 3, 'rating': 5, 'title': 'زمان تحویل به موقع اقامتگاه' },
    { 'id': 4, 'rating': 4, 'title': 'صحت اطلاعات' },
    { 'id': 4, 'rating': 4, 'title': 'کیفیت اقامتگاه نسبت به قیمت' }
  ];

  Rate = [];
  HollowStars = [0, 1, 2, 3, 4];
  Score = '4';
  sendComment() {
    console.log('sending the comment to services');
  }
  constructor() { }

  ngOnInit() {
  }


  ratingComponentClick(clickObj: any): void {
    const item = this.ratingItems.find(((i: any) => i.id === clickObj.itemId));
    if (!!item) {
      item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item.company;
    }

  }

}
