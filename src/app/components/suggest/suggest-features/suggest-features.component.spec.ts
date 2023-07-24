import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestFeaturesComponent } from './suggest-features.component';

describe('SuggestFeaturesComponent', () => {
  let component: SuggestFeaturesComponent;
  let fixture: ComponentFixture<SuggestFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
