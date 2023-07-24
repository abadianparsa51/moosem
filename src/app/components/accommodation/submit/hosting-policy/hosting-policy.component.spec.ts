import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingPolicyComponent } from './hosting-policy.component';

describe('HostingPolicyComponent', () => {
  let component: HostingPolicyComponent;
  let fixture: ComponentFixture<HostingPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostingPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
