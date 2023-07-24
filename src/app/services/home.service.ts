import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl = this.global.baseUrl;
  catData: any;
  constructor(private http: HttpClient, private global: GlobalService) {}
  getSearchData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.apiUrl + '/searchWS', httpOptions);
  }

  getBlogData(limit) {
    const data = {'limit': limit};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.apiUrl + '/ListofBlogWS', data, httpOptions);
  }

  getHomeData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.apiUrl + '/HomeCatWS', httpOptions);
  }

  getHomeDataByCity() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.apiUrl + '/HomeCityWS', httpOptions);
  }

  getHomeDataByFaraId(id) {
    const data = {'fara_id': id};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.apiUrl + '/SelectPropertyWS', data, httpOptions);
  }
}
