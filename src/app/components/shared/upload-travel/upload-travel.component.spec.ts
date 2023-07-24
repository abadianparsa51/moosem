import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTravelComponent } from './upload-travel.component';

describe('UploadTravelComponent', () => {
  let component: UploadTravelComponent;
  let fixture: ComponentFixture<UploadTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
