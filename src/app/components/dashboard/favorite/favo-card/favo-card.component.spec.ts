import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoCardComponent } from './favo-card.component';

describe('FavoCardComponent', () => {
  let component: FavoCardComponent;
  let fixture: ComponentFixture<FavoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
