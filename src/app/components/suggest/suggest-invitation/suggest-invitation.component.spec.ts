import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestInvitationComponent } from './suggest-invitation.component';

describe('SuggestInvitationComponent', () => {
  let component: SuggestInvitationComponent;
  let fixture: ComponentFixture<SuggestInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
