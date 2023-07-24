import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingMechanismComponent } from './hosting-mechanism.component';

describe('HostingMechanismComponent', () => {
  let component: HostingMechanismComponent;
  let fixture: ComponentFixture<HostingMechanismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostingMechanismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingMechanismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
