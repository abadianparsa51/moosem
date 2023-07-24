import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySliderComponent } from './secondary-slider.component';

describe('SecondarySliderComponent', () => {
  let component: SecondarySliderComponent;
  let fixture: ComponentFixture<SecondarySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondarySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
