import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.scss']
})
export class SelectboxComponent implements OnInit {
  @Input() id: number;
  @Input() data: any;
  openInput = false;
  constructor() { }

  ngOnInit() { }
  openinputFunc() {
    this.openInput = this.openInput === false ? true : false;
  }
}
