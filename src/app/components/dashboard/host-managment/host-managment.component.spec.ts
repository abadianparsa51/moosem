import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostManagmentComponent } from './host-managment.component';

describe('HostManagmentComponent', () => {
  let component: HostManagmentComponent;
  let fixture: ComponentFixture<HostManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
