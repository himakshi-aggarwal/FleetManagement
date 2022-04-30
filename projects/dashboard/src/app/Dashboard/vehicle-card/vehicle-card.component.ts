import { Component, Input, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export interface ActiveVehicle {
  vehicleImagePath: string,
  vehicleNumber: string,
  vehicleDate: string,
  status: string
}

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})

export class VehicleCardComponent implements OnInit {

  @Input() public activeVehicles: ActiveVehicle = { vehicleDate: '', vehicleImagePath: '', vehicleNumber: '', status: '' };
  faPaperPlane = faPaperPlane;
  constructor() { }

  ngOnInit(): void {
  }

}
