import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {
  @Output() QuantityNum: EventEmitter<number> = new EventEmitter<number>();
  quantityNumber = 1;
  @Input() minValue = 1;
  constructor() { }
  ngOnInit() {
    this.quantityNumber = this.minValue;
  }
  passValue() {
    this.QuantityNum.emit(this.quantityNumber);
  }
  plus() {
    this.quantityNumber++;
  }
  mines() {
    if (this.quantityNumber > this.minValue) {
      this.quantityNumber--;
    }
  }
}
