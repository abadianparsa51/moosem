import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hosting-mechanism',
  templateUrl: './hosting-mechanism.component.html',
  styleUrls: ['./hosting-mechanism.component.scss']
})
export class HostingMechanismComponent implements OnInit {

  @Input() items: any[]; 

  constructor() { }

  ngOnInit() {
  }

}
