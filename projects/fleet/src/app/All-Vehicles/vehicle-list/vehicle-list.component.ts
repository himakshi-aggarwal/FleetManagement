import { AddVehicleComponent } from './../add-vehicle/add-vehicle.component';
import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { VehicleList } from '../../models/vehicle-list.model';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  faPlus = faPlus;
  tabs = ['ALL STATUSES', 'EN ROUTE', 'AVAILABLE', 'OUT OF SERVICE']
  VehicleTableHead = ['VEHICLE', 'TYPE', 'STATUS', 'HEALTH RATE']
  vehiclesListAll!: VehicleList[]
  selectedVehicles!: VehicleList[]

  constructor(private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.vehiclesListAll = getVehicleList()
    this.selectedVehicles = this.vehiclesListAll
  }

  tabChanged(event: any) {
    if (event.index != 0) {
      const filterText = event.tab.textLabel.toLowerCase();
      this.selectedVehicles = this.vehiclesListAll.filter((vehicle: any) => {
        return vehicle.status.toLowerCase() === filterText;
      });
    } else {
      this.selectedVehicles = this.vehiclesListAll;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddVehicleComponent, {
      width: '400px', disableClose: false
    });

  }
}

export function getVehicleList(): VehicleList[] {
  let vehicleDataset: VehicleList[] = [
    {
      name: 'Vehicle 1',
      id: '12345',
      type: 'Truck',
      status: 'Available',
      health: 65,
      vehicleImagePath: 'assets/images/parked.jpg'

    },
    {
      name: 'Vehicle 2',
      id: '12885',
      type: 'Truck',
      status: 'En Route',
      health: 45,
      vehicleImagePath: 'assets/images/driving.jpg'
    },
    {
      name: 'Vehicle 3',
      id: '12397',
      type: 'Car',
      status: 'Out of Service',
      health: 20,
      vehicleImagePath: 'assets/images/outofservice.jpg'
    },
    {
      name: 'Vehicle 4',
      id: '2345',
      type: 'Van',
      status: 'Available',
      health: 90,
      vehicleImagePath: 'assets/images/parked.jpg'

    },
    {
      name: 'Vehicle 5',
      id: '9345',
      type: 'Truck',
      status: 'Available',
      health: 55,
      vehicleImagePath: 'assets/images/parked.jpg'
    },
    {
      name: 'Vehicle 6',
      id: '9585',
      type: 'Car',
      status: 'En Route',
      health: 75,
      vehicleImagePath: 'assets/images/driving.jpg'
    },
    {
      name: 'Vehicle 7',
      id: '1897',
      type: 'Van',
      status: 'Out of Service',
      health: 7,
      vehicleImagePath: 'assets/images/outofservice.jpg'
    },
    {
      name: 'Vehicle 8',
      id: '43697',
      type: 'Van',
      status: 'Out of Service',
      health: 13,
      vehicleImagePath: 'assets/images/outofservice.jpg'
    },
  ]
  return vehicleDataset;
}
