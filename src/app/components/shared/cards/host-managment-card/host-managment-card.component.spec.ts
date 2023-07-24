import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostManagmentCardComponent } from './host-managment-card.component';

describe('HostManagmentCardComponent', () => {
  let component: HostManagmentCardComponent;
  let fixture: ComponentFixture<HostManagmentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostManagmentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostManagmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
