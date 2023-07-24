import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFeatureComponent } from './room-feature.component';

describe('RoomFeatureComponent', () => {
  let component: RoomFeatureComponent;
  let fixture: ComponentFixture<RoomFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
