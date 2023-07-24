import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set-room-beds',
  templateUrl: './set-room-beds.component.html',
  styleUrls: ['./set-room-beds.component.scss']
})
export class SetRoomBedsComponent implements OnInit {
  @Input() title: string;
  BtnTitle = 'ویرایش';
  BtnCustomClass = 'btn btn_light_blue';
  value: number;
  openVal = false;
  singleBed = 0;
  doubleBed = 0;
  traditionalBed = 0;
  inputType = 'text';
  inputVal = '';
  inputPlaceholder = 'مثال تشک بادی';
  inputIcon = '';
  inputClass = '';
  constructor() {}

  ngOnInit() {}
  open() {
    this.openVal = this.openVal === false ? true : false;
    this.BtnTitle = this.BtnTitle === 'ویرایش' ? 'ذخیره' : 'ویرایش';
  }
  getSingleValue(value: number): void {
    this.singleBed = value;
  }
  getDoubleValue(value: number): void {
    this.doubleBed = value;
  }
  getTraditionalValue(value: number): void {
    this.traditionalBed = value;
  }
  totalBed() {
    return this.singleBed + this.doubleBed + this.traditionalBed;
  }
}
