import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-awaiting-approval',
  templateUrl: './awaiting-approval.component.html',
  styleUrls: ['./awaiting-approval.component.scss']
})
export class AwaitingApprovalComponent implements OnInit {

  confirmationTitle = 'تایید رزرو';
  confirmationCustomClass = 'btn btn_light_green ';
  confirmationURLLink = '';
  confirmationIcon = '';

  cancelBookingTitle = 'لغو کردن';
  cancelBookingCustomClass = 'btn btn_red_dropDown';
  cancelBookingURLLink = '';
  cancelBookingIcon = 'icon-list_down red-dropDown-icon';

  dropDownTitle = '';
  dropDownCustomClass = 'btn bt_red_dropDown';
  dropDownURLLink = '';
  dropDownIcon = 'icon-list_down red-dropDown-icon';

  boxTitle = 'مشاهده اقامتگاه';
  boxCustomClass = 'btn btn_black_box';
  boxURLLink = 'clientCancel';
  boxIcon = 'icon-list_down red-dropDown-icon';

  upTitle = '';
  upCustomClass = 'btn btn_black_box';
  upURLLink = '';
  upIcon = 'icon-close black-up-icon';

  constructor() { }

  divStyle: boolean = false;
  divStyle2: boolean = false;
  divStyle3: boolean = false;

  click() {
    this.divStyle = true;

    console.log('click');
  }

  clickHide() {
    this.divStyle = false;

    console.log('clickHide');
  }
  click2() {
    this.divStyle2 = true;

    console.log('click');
  }

  clickHide2() {
    this.divStyle2 = false;

    console.log('clickHide');
  }
  click3() {
    this.divStyle3 = true;

    console.log('click');
  }

  clickHide3() {
    this.divStyle3 = false;

    console.log('clickHide');
  }
  ngOnInit() {
  }

}
