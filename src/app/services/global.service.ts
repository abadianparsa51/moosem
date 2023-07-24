import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public baseUrl = 'https://www.moosem.ir/app';
  public basePath = 'https://moosem.ir/';
  constructor() { }
}
