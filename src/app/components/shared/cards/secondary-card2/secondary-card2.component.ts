import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-card2',
  templateUrl: './secondary-card2.component.html',
  styleUrls: ['./secondary-card2.component.scss']
})
export class SecondaryCard2Component implements OnInit {
  @Input() secondaryData: any[];
  constructor() { }

  ngOnInit() {
  }

}
