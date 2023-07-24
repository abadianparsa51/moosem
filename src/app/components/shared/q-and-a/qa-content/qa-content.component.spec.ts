import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaContentComponent } from './qa-content.component';

describe('QaContentComponent', () => {
  let component: QaContentComponent;
  let fixture: ComponentFixture<QaContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
