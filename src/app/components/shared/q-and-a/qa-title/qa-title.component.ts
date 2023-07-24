import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qa-title',
  templateUrl: './qa-title.component.html',
  styleUrls: ['./qa-title.component.scss']
})
export class QaTitleComponent implements OnInit {
  @Input() QATitle: string;
  @Input() titleBgColor: string;
  constructor() {}

  ngOnInit() {}
}
