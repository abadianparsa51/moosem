import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  @Input() value: string;
  @Input() type: string;
  @Input() placeholderValue: string;
  @Input() customClass: string;
  @Input() icon: string;

  

  constructor() {}

  ngOnInit() {}
  makePassVisible() {
    if (this.type === 'password') {
      this.type = 'text';
    } else if (this.type === 'text') {
      this.type = 'password';
    }
  }
}
