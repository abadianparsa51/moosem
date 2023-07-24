import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgSliderComponent } from './bg-slider.component';

describe('BgSliderComponent', () => {
  let component: BgSliderComponent;
  let fixture: ComponentFixture<BgSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
