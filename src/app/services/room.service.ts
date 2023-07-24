import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  apiUrl = this.global.baseUrl;
  constructor(private http: HttpClient, private global: GlobalService) {}

  getRoomData(property) {
    const data = {property_id: property};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.apiUrl + '/PropertyInfoWS', data, httpOptions);
  }
  getUserData(user) {
    const data = {user_id: user};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.apiUrl + '/UserInfoWS', data, httpOptions);
  }
}
