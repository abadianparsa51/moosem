import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.scss']
})
export class ToolTipComponent implements OnInit {
  @Input() toolTipData: any;

  constructor() { }

  ngOnInit() {
  }

}
