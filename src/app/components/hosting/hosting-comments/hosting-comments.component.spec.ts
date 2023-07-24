import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingCommentsComponent } from './hosting-comments.component';

describe('HostingCommentsComponent', () => {
  let component: HostingCommentsComponent;
  let fixture: ComponentFixture<HostingCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostingCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
