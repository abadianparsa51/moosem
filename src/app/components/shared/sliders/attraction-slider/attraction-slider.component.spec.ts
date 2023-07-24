import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionSliderComponent } from './attraction-slider.component';

describe('AttractionSliderComponent', () => {
  let component: AttractionSliderComponent;
  let fixture: ComponentFixture<AttractionSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
