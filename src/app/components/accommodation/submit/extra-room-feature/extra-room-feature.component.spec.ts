import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraRoomFeatureComponent } from './extra-room-feature.component';

describe('ExtraRoomFeatureComponent', () => {
  let component: ExtraRoomFeatureComponent;
  let fixture: ComponentFixture<ExtraRoomFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraRoomFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraRoomFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
