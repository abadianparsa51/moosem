import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa-content',
  templateUrl: './qa-content.component.html',
  styleUrls: ['./qa-content.component.scss']
})
export class QaContentComponent implements OnInit {
  openflag = false;
  constructor() {}

  ngOnInit() {}
  openModal() {
    this.openflag = !this.openflag;
    console.log(this.openflag);
  }
}
