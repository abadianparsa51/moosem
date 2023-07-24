import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss']
})
export class FavoriteCardComponent implements OnInit {

  favoriteBtnName = "";
  favoriteURLLink = " btn btn_red";
  favoriteBtnIcon = "icon-bookmark_on2";
  favoriteCustomClass = " ";


  constructor() { }

  ngOnInit() {
  }

}
