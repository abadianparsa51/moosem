import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExprinceSearchPageComponent } from './exprince-search-page.component';

describe('ExprinceSearchPageComponent', () => {
  let component: ExprinceSearchPageComponent;
  let fixture: ComponentFixture<ExprinceSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExprinceSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExprinceSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
