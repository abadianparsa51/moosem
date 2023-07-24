import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityInfoComponent } from './capacity-info.component';

describe('CapacityInfoComponent', () => {
  let component: CapacityInfoComponent;
  let fixture: ComponentFixture<CapacityInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacityInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
