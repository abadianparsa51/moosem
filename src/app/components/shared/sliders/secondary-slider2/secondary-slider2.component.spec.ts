import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySlider2Component } from './secondary-slider2.component';

describe('SecondarySlider2Component', () => {
  let component: SecondarySlider2Component;
  let fixture: ComponentFixture<SecondarySlider2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondarySlider2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarySlider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
