import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suggest-features',
  templateUrl: './suggest-features.component.html',
  styleUrls: ['./suggest-features.component.scss']
})
export class SuggestFeaturesComponent implements OnInit {
  @Input() properties: any[];
  @Input() title: String;

  constructor() { }

  ngOnInit() {
  }

}
