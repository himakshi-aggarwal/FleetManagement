import { Component, Input, OnInit } from '@angular/core';
import { VehicleStatus } from '../../enums/vehicle.status';
import { VehicleList } from '../../models/vehicle-list.model';


@Component({
  selector: 'app-vehicle-list-card',
  templateUrl: './vehicle-list-card.component.html',
  styleUrls: ['./vehicle-list-card.component.scss']
})
export class VehicleListCardComponent implements OnInit {

  @Input() vehicleToDisplay!: VehicleList
  vehicleIcon = VehicleStatus
  progressType!: string;
  constructor() { }

  ngOnInit(): void {
    const health = this.vehicleToDisplay.health
    switch (true) {
      case health <= 30:
        this.progressType = 'danger'
        break;
      case health > 30 && health < 70:
        this.progressType = 'warning'
        break;
      case health >= 70:
        this.progressType = 'success'
        break;
    }
  }

}
