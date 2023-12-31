import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() value: string;
  @Input() placeholderValue: string;
  @Input() customClass: string;
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
