import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  // @Input() customClass: string;
  searchs: any[] = [
    {
      icon: 'icon-pin_location',
      city: 'تهران',
      town: 'تهران',
      numOfRes: '۴۵۶ اقامتگاه'
    },
    {
      icon: 'icon-pin_location',
      city: 'تهران',
      town: 'تهران',
      numOfRes: '۴۵۶ اقامتگاه'
    },
  ];

  playerName = '';
  state: any;
  constructor() { }

  ngOnInit() {}

}
