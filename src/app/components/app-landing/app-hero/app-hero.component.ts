import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-hero',
  templateUrl: './app-hero.component.html',
  styleUrls: ['./app-hero.component.scss']
})
export class AppHeroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  /* scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  } */
}
