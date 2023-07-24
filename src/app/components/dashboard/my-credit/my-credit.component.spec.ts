import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCreditComponent } from './my-credit.component';

describe('MyCreditComponent', () => {
  let component: MyCreditComponent;
  let fixture: ComponentFixture<MyCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
