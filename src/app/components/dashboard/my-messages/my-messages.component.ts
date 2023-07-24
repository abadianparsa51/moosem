import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.scss']
})
export class MyMessagesComponent implements OnInit {

  myMsgTitle = '  + افزایش اعتبار';
  myMsgCustomClass = 'btn btn_light_green2';
  myMsgURLLink = '';
  myMsgIcon = '';

  increaseCreditlTitle = '  + افزایش اعتبار';
  increaseCreditCustomClass = 'btn btn_light_green2';
  increaseCreditURLLink = 'increaseCredit';
  increaseCreditIcon = '';

  constructor() { }

  ngOnInit() {
  }

}
