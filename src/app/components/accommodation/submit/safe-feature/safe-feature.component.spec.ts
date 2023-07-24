import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeFeatureComponent } from './safe-feature.component';

describe('SafeFeatureComponent', () => {
  let component: SafeFeatureComponent;
  let fixture: ComponentFixture<SafeFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
