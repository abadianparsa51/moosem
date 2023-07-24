import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRoomBedsComponent } from './set-room-beds.component';

describe('SetRoomBedsComponent', () => {
  let component: SetRoomBedsComponent;
  let fixture: ComponentFixture<SetRoomBedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetRoomBedsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRoomBedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
