import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestHeroComponent } from './suggest-hero.component';

describe('SuggestHeroComponent', () => {
  let component: SuggestHeroComponent;
  let fixture: ComponentFixture<SuggestHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
