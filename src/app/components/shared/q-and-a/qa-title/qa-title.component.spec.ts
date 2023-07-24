import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTitleComponent } from './qa-title.component';

describe('QaTitleComponent', () => {
  let component: QaTitleComponent;
  let fixture: ComponentFixture<QaTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
