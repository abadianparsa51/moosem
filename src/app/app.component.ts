import { Component, AfterViewInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationCancel,
  NavigationEnd
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  loading: boolean;
  footerVal: boolean;
  constructor(private router: Router) {
    this.loading = true;
    this.router.events.subscribe(val => {
      if (
        location.pathname.includes('hosting/submit') ||
        location.pathname.includes('dashboard')
      ) {
        this.footerVal = false;
      } else {
        this.footerVal = true;
      }
    });
  }
  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.loading = false;
      }
    });
  }
}
