import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePriceComponent } from './date-price.component';

describe('DatePriceComponent', () => {
  let component: DatePriceComponent;
  let fixture: ComponentFixture<DatePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
