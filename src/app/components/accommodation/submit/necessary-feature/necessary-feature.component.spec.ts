import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NecessaryFeatureComponent } from './necessary-feature.component';

describe('NecessaryFeatureComponent', () => {
  let component: NecessaryFeatureComponent;
  let fixture: ComponentFixture<NecessaryFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecessaryFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NecessaryFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
