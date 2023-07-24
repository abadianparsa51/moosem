import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favo-card',
  templateUrl: './favo-card.component.html',
  styleUrls: ['./favo-card.component.scss']
})
export class FavoCardComponent implements OnInit {
  bookmarkedBtnName = "";
  bookmarkedURLLink = "";
  bookmarkedBtnIcon = "";
  bookmarkedCustomClass = "";

  constructor() { }

  ngOnInit() {
  }

}
