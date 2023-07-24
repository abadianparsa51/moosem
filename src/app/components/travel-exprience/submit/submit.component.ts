import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  totalLevels = 5;
  currentLevel = 1;
  constructor() { }

  ngOnInit() { }
  increaseLevel() {
    if (this.currentLevel <= this.totalLevels - 1) {
      this.currentLevel++;
    }
  }
  decreaseLevel() {
    if (this.currentLevel >= 2) {
      this.currentLevel--;
    }
  }
}
