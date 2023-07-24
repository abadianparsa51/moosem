import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedArticleSliderComponent } from './related-article-slider.component';

describe('RelatedArticleSliderComponent', () => {
  let component: RelatedArticleSliderComponent;
  let fixture: ComponentFixture<RelatedArticleSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedArticleSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedArticleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
