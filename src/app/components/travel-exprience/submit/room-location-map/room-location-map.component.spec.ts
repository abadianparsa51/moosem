import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomLocationMapComponent } from './room-location-map.component';

describe('RoomLocationMapComponent', () => {
  let component: RoomLocationMapComponent;
  let fixture: ComponentFixture<RoomLocationMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomLocationMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
