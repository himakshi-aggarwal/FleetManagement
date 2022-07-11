import { Component, Input, OnInit } from '@angular/core';
import {  faExclamationTriangle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export interface ActiveVehicle {
  vehicleImagePath: string,
  vehicleNumber: string,
  vehicleDate: string,
  type:string,
  tab?:number,
  error: boolean
}

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})

export class VehicleCardComponent implements OnInit {

  @Input() public activeVehicles: ActiveVehicle = { vehicleDate: '', vehicleImagePath: '',type:'', vehicleNumber: '', error: false };
  faPaperPlane = faPaperPlane;
  faExplanation = faExclamationTriangle;
  constructor() { }

  ngOnInit(): void {
  }

}
