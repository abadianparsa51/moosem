import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set-info',
  templateUrl: './set-info.component.html',
  styleUrls: ['./set-info.component.scss']
})
export class SetInfoComponent implements OnInit {
  @Input() title: string;
  BtnTitle = 'ویرایش';
  BtnCustomClass = 'btn btn_light_blue';
  value: number;
  openVal = false;
  singleBed = 0;
  doubleBed = 0;
  traditionalBed = 0;

  inputInfo = [
    {

      inputType: 'text',
      inputVal: '',
      inputPlaceholder: 'هزینه نظافت',
      inputIcon: '',
      inputClass: '',
      selectbox: [
        {
          title: ' میخواهم رایگان شود ',
          input: false
        }, {
          title: ' میخواهم رایگان شود ',
          input: false
        }, {
          title: ' میخواهم رایگان شود ',
          input: false
        }
      ]
    },
    {
      inputType: 'number',
      inputVal: '',
      inputPlaceholder: 'ملبغ را وارد کنید ( تومان )',
      inputIcon: '',
      inputClass: ''
    }, {
      title: 'قیمت آخر هفته',
      inputType: 'text',
      inputVal: '',
      inputPlaceholder: 'به ازای نفر شب',
      inputIcon: '',
      inputClass: ''
    },

  ];
  constructor() { }

  ngOnInit() { }
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
