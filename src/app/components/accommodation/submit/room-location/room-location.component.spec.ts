import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomLocationComponent } from './room-location.component';

describe('RoomLocationComponent', () => {
  let component: RoomLocationComponent;
  let fixture: ComponentFixture<RoomLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
