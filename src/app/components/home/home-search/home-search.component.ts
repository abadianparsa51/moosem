import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../../../services/home.service';
@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {


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

  // newResidenceRegistrationBtnName = "";
  // newResidenceRegistrationURLLink = "";
  // newResidenceRegistrationBtnIcon = "icon-pin_location";
  // newResidenceRegistrationCustomClass = "";

  // searchBtnName = "";
  // searchURLLink = "search-page";
  // searchBtnIcon = "icon-pin_location";
  // searchCustomClass = "";

  playerName = '';
  state: any;
  constructor(private http: HttpClient, private home: HomeService) { }

  ngOnInit() {
    this.state = this.http.get('/assets/json/iran_state.json');
  }
  onChangeCheck() { }
}
