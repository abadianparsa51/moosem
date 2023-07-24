import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginTitleBtnName = 'ورود | عضویت';
  loginCustomClass = 'btn btn_blue';
  loginURLLink = 'authentication/login';
  hostTitleBtnName = 'میزبان شوید';
  hostCustomClass = 'btn btn_white_bordered';
  hostURlLink = 'hosting';
  btnIcon = '';
  navStyle: boolean;
  darken: boolean;
  searchOrTel: boolean;
  menuFlag = false;
  profileDropdown = false;
  reserveDropdown = false;
  managementDropdown = false;
  creditDropdown = false;


  openMenu() {
    this.menuFlag = true;

  }
  closeMenu() {
    this.menuFlag = false;
  }

  checklogin() {
    if (location.pathname.includes('/authentication/login')) {
      return true;
    } else {
      return false;
    }
  }
  checksignup() {
    if (location.pathname.includes('/authentication/signup')) {
      return true;
    } else {
      return false;
    }
  }
  checkrecover() {
    if (location.pathname.includes('/authentication/recover')) {
      return true;
    } else {
      return false;
    }
  }

  constructor(private router: Router) {
    this.router.events.subscribe(val => {
      if (location.pathname === '/' || location.pathname === '/mosem/') {
        this.navStyle = true;
        this.searchOrTel = true;
        this.darken = false;
      } else {
        this.navStyle = false;
        this.searchOrTel = false;
        this.darken = true;
      }
    });
  }

  ngOnInit() { }
}
