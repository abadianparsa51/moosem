import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  commentsRate = [0, 1];
  commentsHollowStars = [0, 1, 2];
  commentsScore = "";

  ratingItems: any[] = [
    { 'id': 0, 'rating': 3, 'title': 'نظافت اقامتگاه' },
    { 'id': 1, 'rating': 1, 'title': 'موقعیت اقامتگاه' },
    { 'id': 2, 'rating': 2, 'title': 'رفتار میزبان' },
    { 'id': 3, 'rating': 5, 'title': 'زمان تحویل به موقع اقامتگاه' },
    { 'id': 4, 'rating': 4, 'title': 'صحت اطلاعات' },
    { 'id': 4, 'rating': 4, 'title': 'کیفیت اقامتگاه نسبت به قیمت' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
