import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-suggestion-item',
  templateUrl: './suggestion-item.component.html',
  styleUrls: ['./suggestion-item.component.scss']
})
export class SuggestionItemComponent implements OnInit {
  @Input() data: any;
  @Output() public myOutput = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  passImageData(): void {
    this.myOutput.emit(this.data);
  }
}
