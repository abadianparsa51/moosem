import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingHeroComponent } from './hosting-hero.component';

describe('HostingHeroComponent', () => {
  let component: HostingHeroComponent;
  let fixture: ComponentFixture<HostingHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostingHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
