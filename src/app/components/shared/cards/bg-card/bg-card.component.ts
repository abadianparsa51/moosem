import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bg-card',
  templateUrl: './bg-card.component.html',
  styleUrls: ['./bg-card.component.scss']
})
export class BgCardComponent implements OnInit {
  @Input() bgData;

  constructor() { }

  ngOnInit() { }
}
