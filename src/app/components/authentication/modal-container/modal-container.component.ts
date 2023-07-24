import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
  public innerWidth: any;

  constructor() { }

  checklogin() {
    if (location.pathname.includes('/authentication/login') && innerWidth < 1200) {
      return true;
    } else {
      return false;
    }
  }
  checksignup() {
    if (location.pathname.includes('/authentication/signup') && innerWidth < 1200) {
      return true;
    } else {
      return false;
    }
  }
  checkrecover() {
    if (location.pathname.includes('/authentication/recover') && innerWidth < 1200) {
      return true;
    } else {
      return false;
    }
  }


  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 600) {
    }
  }

}
