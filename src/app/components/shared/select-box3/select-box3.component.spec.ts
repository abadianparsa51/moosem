import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBox3Component } from './select-box3.component';

describe('SelectBox3Component', () => {
  let component: SelectBox3Component;
  let fixture: ComponentFixture<SelectBox3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBox3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
