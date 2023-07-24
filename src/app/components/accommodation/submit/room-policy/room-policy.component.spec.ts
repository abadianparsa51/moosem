import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPolicyComponent } from './room-policy.component';

describe('RoomPolicyComponent', () => {
  let component: RoomPolicyComponent;
  let fixture: ComponentFixture<RoomPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
