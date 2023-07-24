import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizedReservationsComponent } from './finalized-reservations.component';

describe('FinalizedReservationsComponent', () => {
  let component: FinalizedReservationsComponent;
  let fixture: ComponentFixture<FinalizedReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizedReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizedReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
