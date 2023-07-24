import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-box2',
  templateUrl: './select-box2.component.html',
  styleUrls: ['./select-box2.component.scss']
})
export class SelectBox2Component implements OnInit {
  @Input() id: number;
  @Input() data: any;
  openInput = false;
  constructor() { }

  ngOnInit() {
  }
  openinputFunc() {
    this.openInput = this.openInput === false ? true : false;
  }
}
