import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportFeaturesComponent } from './support-features.component';

describe('SupportFeaturesComponent', () => {
  let component: SupportFeaturesComponent;
  let fixture: ComponentFixture<SupportFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
