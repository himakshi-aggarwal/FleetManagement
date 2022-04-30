import { Component, OnInit } from '@angular/core';
import { ActiveVehicle } from '../vehicle-card/vehicle-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabs = ['All', 'Driving', 'Parked', 'Out of Service'];

  activeVehicles: ActiveVehicle[] = [
    { vehicleDate: '26 April,21/1 hour 15mins', vehicleImagePath: 'assets/images/parked.jpg', vehicleNumber: 'PN 1756', status: 'Parked' },
    { vehicleDate: '25 January,21/2 hour 15mins', vehicleImagePath: 'assets/images/driving.jpg', vehicleNumber: 'FT 1112', status: 'Driving' },
    { vehicleDate: '26 April,21/1 hour 15mins', vehicleImagePath: 'assets/images/driving.jpg', vehicleNumber: 'GW 1005', status: 'Driving' },
    { vehicleDate: '26 April,21/1 hour 15mins', vehicleImagePath: 'assets/images/parked.jpg', vehicleNumber: 'VM 2315', status: 'Parked' },
    { vehicleDate: '26 April,21/1 hour 15mins', vehicleImagePath: 'assets/images/outofservice.jpg', vehicleNumber: 'RC 9654', status: 'Out of Service' },
    { vehicleDate: '26 April,21/1 hour 15mins', vehicleImagePath: 'assets/images/parked.jpg', vehicleNumber: 'KA 77771', status: 'Parked' },
  ]

  selectedVehicles!: ActiveVehicle[]
  constructor() { }

  ngOnInit(): void {
    this.selectedVehicles = this.activeVehicles
  }

  getVehicleDetail(): void {

  }

  tabChanged(event: any) {
    if (event.index != 0) {
      const filterText = event.tab.textLabel.toLowerCase();
      this.selectedVehicles = this.activeVehicles.filter((vehicle: any) => {
        return vehicle.status.toLowerCase() === filterText;
      });
    } else {
      this.selectedVehicles = this.activeVehicles;
    }
  }

}
