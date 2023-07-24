import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suggest-hero',
  templateUrl: './suggest-hero.component.html',
  styleUrls: ['./suggest-hero.component.scss']
})
export class SuggestHeroComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }
}
