import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryCard2Component } from './secondary-card2.component';

describe('SecondaryCard2Component', () => {
  let component: SecondaryCard2Component;
  let fixture: ComponentFixture<SecondaryCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryCard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
