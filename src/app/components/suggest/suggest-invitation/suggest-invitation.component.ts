import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suggest-invitation',
  templateUrl: './suggest-invitation.component.html',
  styleUrls: ['./suggest-invitation.component.scss']
})
export class SuggestInvitationComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
