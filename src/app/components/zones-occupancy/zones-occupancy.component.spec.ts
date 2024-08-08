import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonesOccupancyComponent } from './zones-occupancy.component';

describe('ZonesOccupancyComponent', () => {
  let component: ZonesOccupancyComponent;
  let fixture: ComponentFixture<ZonesOccupancyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonesOccupancyComponent]
    });
    fixture = TestBed.createComponent(ZonesOccupancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
