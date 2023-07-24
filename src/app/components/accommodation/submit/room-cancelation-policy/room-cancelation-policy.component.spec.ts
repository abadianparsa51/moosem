import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCancelationPolicyComponent } from './room-cancelation-policy.component';

describe('RoomCancelationPolicyComponent', () => {
  let component: RoomCancelationPolicyComponent;
  let fixture: ComponentFixture<RoomCancelationPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCancelationPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCancelationPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
