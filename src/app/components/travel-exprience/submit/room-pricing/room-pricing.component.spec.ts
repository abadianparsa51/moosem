import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPricingComponent } from './room-pricing.component';

describe('RoomPricingComponent', () => {
  let component: RoomPricingComponent;
  let fixture: ComponentFixture<RoomPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
