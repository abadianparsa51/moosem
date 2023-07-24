import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMainCardComponent } from './search-main-card.component';

describe('SearchMainCardComponent', () => {
  let component: SearchMainCardComponent;
  let fixture: ComponentFixture<SearchMainCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMainCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
