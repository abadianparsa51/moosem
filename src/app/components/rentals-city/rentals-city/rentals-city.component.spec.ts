import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsCityComponent } from './rentals-city.component';

describe('RentalsCityComponent', () => {
  let component: RentalsCityComponent;
  let fixture: ComponentFixture<RentalsCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalsCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalsCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
