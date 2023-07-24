import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtterCardComponent } from './atter-card.component';

describe('AtterCardComponent', () => {
  let component: AtterCardComponent;
  let fixture: ComponentFixture<AtterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
