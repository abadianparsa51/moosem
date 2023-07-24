import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCancelComponent } from './client-cancel.component';

describe('ClientCancelComponent', () => {
  let component: ClientCancelComponent;
  let fixture: ComponentFixture<ClientCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
