import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
  @Input() totalLevel: number;
  @Input() level: number;
  constructor() {}

  ngOnInit() {}

  calcPersentegeLevel(): number {
    return (this.level * 100) / this.totalLevel;
  }
}
