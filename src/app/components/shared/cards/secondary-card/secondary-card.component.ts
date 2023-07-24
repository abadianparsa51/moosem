import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-card',
  templateUrl: './secondary-card.component.html',
  styleUrls: ['./secondary-card.component.scss']
})
export class SecondaryCardComponent implements OnInit {
  @Input() secondaryData: any[];
  constructor() {}

  ngOnInit() {}
}
