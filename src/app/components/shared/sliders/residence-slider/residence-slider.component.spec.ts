import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceSliderComponent } from './residence-slider.component';

describe('ResidenceSliderComponent', () => {
  let component: ResidenceSliderComponent;
  let fixture: ComponentFixture<ResidenceSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenceSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenceSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
