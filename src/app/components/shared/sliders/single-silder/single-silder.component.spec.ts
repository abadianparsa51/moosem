import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSilderComponent } from './single-silder.component';

describe('SingleSilderComponent', () => {
  let component: SingleSilderComponent;
  let fixture: ComponentFixture<SingleSilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
