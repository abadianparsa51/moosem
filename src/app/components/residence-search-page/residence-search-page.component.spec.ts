import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceSearchPageComponent } from './residence-search-page.component';

describe('ResidenceSearchPageComponent', () => {
  let component: ResidenceSearchPageComponent;
  let fixture: ComponentFixture<ResidenceSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenceSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenceSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
