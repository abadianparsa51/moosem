import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCheckoutComponent } from './room-checkout.component';

describe('RoomCheckoutComponent', () => {
  let component: RoomCheckoutComponent;
  let fixture: ComponentFixture<RoomCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
