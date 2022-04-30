import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListCardComponent } from './vehicle-list-card.component';

describe('VehicleListCardComponent', () => {
  let component: VehicleListCardComponent;
  let fixture: ComponentFixture<VehicleListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
