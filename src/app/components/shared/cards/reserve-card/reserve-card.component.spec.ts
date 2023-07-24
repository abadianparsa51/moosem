import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveCardComponent } from './reserve-card.component';

describe('ReserveCardComponent', () => {
  let component: ReserveCardComponent;
  let fixture: ComponentFixture<ReserveCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
