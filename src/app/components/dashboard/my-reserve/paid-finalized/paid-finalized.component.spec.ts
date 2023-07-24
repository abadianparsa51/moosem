import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidFinalizedComponent } from './paid-finalized.component';

describe('PaidFinalizedComponent', () => {
  let component: PaidFinalizedComponent;
  let fixture: ComponentFixture<PaidFinalizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidFinalizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidFinalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
